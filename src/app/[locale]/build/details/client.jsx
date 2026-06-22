"use client";

import { useRef, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "@/i18n/routing";
import { parseAsString, useQueryStates } from "nuqs";
import {
  useGetAuthTanstack,
  useGetTanstack,
  useMutateAuthTanstack,
} from "@/hooks/useTanstack";
import { queryClient } from "@/providers/queryProvider";
import { useSearch } from "@/hooks/useSearch";
import { buildPayload, pickInvitationFields } from "@/utils/formatters";
import { detailsForm } from "@/utils/constants";
import { Box, Stack } from "@chakra-ui/react";
import { Animate } from "@/components/ui/animate";
import { LngSelector } from "@/components/build/lngSelector";
import { TitleCreator } from "@/components/build/titleCreator";
import { EventDate } from "@/components/build/eventDate";
import { Timeline } from "@/components/build/timeline";
import { Contact } from "@/components/build/contact";
import { Dresscode } from "@/components/build/dresscode";
import { AlbumLink } from "@/components/build/albumLink";
import { Story } from "@/components/build/story";
import { TextAreaField } from "@/components/build/textareaField";
import { Photos } from "@/components/build/photos";
import { Expire } from "@/components/build/expire";
import { Venue } from "@/components/build/venue";
import { Rsvp } from "@/components/build/rsvp";
import { error } from "@/components/ui/alerts";
import { InvitationStorageService } from "@/services/aws/index";

export const DetailsClient = () => {
  const router = useRouter();
  const search = useSearch();
  const hiddenFieldsRef = useRef({});
  const lastSavedFormRef = useRef(null);
  const formRef = useRef(null);

  const { isAuthenticated, isLoading } = useAuth0();
  const [{ template, palette, id }, setQuery] = useQueryStates({
    template: parseAsString,
    palette: parseAsString,
    id: parseAsString,
  });

  // clear drafts
  // const { mutate: mutateDelete } = useMutateAuthTanstack(
  //   "invitations/drafts",
  //   "delete",
  //   {
  //     onSuccess: () => {
  //       success("Drafts deleted.");
  //     },
  //   },
  // );

  // useEffect(() => {
  //   mutateDelete();
  // }, []);
  //

  const { data } = useGetTanstack(`templates/${template}`, !id);
  const { data: invitationData } = useGetAuthTanstack(
    `invitations/${id}`,
    !!id,
  );

  const { mutate } = useMutateAuthTanstack("invitations/draft", "post", {
    onSuccess: (res) => {
      const draftId = res?.id;
      const urlExtension = res?.urlExtension;

      if (urlExtension) {
        setUrlExtension(urlExtension);
      }

      if (draftId) {
        setForm((prev) => {
          if (prev.id === draftId) return prev;
          const updated = { ...prev, id: draftId };
          lastSavedFormRef.current = JSON.stringify(updated);
          return updated;
        });

        if (!search?.includes(draftId)) {
          setQuery({ id: draftId });
        }
      }
      queryClient.invalidateQueries({ queryKey: [`invitations/drafts`] });
      // TODO: get urlExtension & invalidate invitations/urlExtension
    },
    onError: (err) => error(err?.response?.data?.error || "Draft error!"),
  });

  const [form, setForm] = useState({
    ...detailsForm,
    templateId: template,
    colorPaletteId: palette,
  });

  formRef.current = form;
  console.log("FORM ID", form?.id);

  const [agenda, setAgenda] = useState([]);
  const [urlExtension, setUrlExtension] = useState("");

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push(
        `/build/customisations?template=${template}${palette ? `&palette=${palette}` : ""}`,
      );
    }
  }, [isLoading, isAuthenticated]);

  useEffect(() => {
    const titles =
      data?.defaults?.agendaTitles ??
      invitationData?.template?.defaults?.agendaTitles;
    if (titles) setAgenda(titles);
  }, [data, invitationData]);

  useEffect(() => {
    if (!invitationData) return;

    const picked = pickInvitationFields(invitationData);
    setForm(picked);

    if (invitationData?.urlExtension) {
      setUrlExtension(invitationData.urlExtension);
    }

    const sanitized = {
      ...picked,
      timeline: picked.timeline?.map((item) => ({
        venueKey: item.venueKey,
        venueName: item.venueName,
        time: item.time,
        venueLocation: item.venueLocation,
      })),
    };
    lastSavedFormRef.current = JSON.stringify(sanitized);
  }, [invitationData]);

  useEffect(() => {
    if (!data) return;

    setForm((prev) => {
      const updates = { ...prev };

      if (data?.defaults?.ourStoryText) {
        updates.ourStory = {
          ...prev.ourStory,
          text: data.defaults.ourStoryText,
        };
      }
      if (data?.defaults?.description) {
        updates.description = data.defaults.description;
      }
      if (data?.defaults?.dressCodeDescription) {
        updates.dressCode = {
          ...prev.dressCode,
          description: data.defaults.dressCodeDescription,
        };
      }
      return updates;
    });
  }, [data]);

  const handleHide = (key, hidden) => {
    setForm((prev) => {
      const updated = { ...prev };
      if (hidden) {
        hiddenFieldsRef.current[key] = updated[key];
        delete updated[key];
      } else {
        updated[key] = hiddenFieldsRef.current[key] || "";
        delete hiddenFieldsRef.current[key];
      }
      return updated;
    });
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLngChange = (field, lang, value, nestedKey) => {
    setForm((prev) => {
      let updated;

      if (!nestedKey) {
        updated = {
          ...prev,
          [field]: {
            ...(prev[field] || { hy: "", ru: "", en: "" }),
            [lang]: value,
          },
        };
      } else {
        updated = {
          ...prev,
          [field]: {
            ...(prev[field] || {}),
            [nestedKey]: {
              ...(prev[field]?.[nestedKey] || { hy: "", ru: "", en: "" }),
              [lang]: value,
            },
          },
        };
      }

      return updated;
    });
  };

  const handleTimelineChange = (newTimeline) => {
    setForm((prev) => ({
      ...prev,
      timeline: newTimeline,
    }));
  };

  // V1 - with mac OS bug
  // const processMainImages = async (current) => {
  //   let processedForm = { ...current };

  //   if (!Array.isArray(current.mainImages)) {
  //     return processedForm;
  //   }

  //   const isFileArray =
  //     current.mainImages.length > 0 && current.mainImages[0] instanceof File;

  //   if (!isFileArray || !current.id) {
  //     return processedForm;
  //   }

  //   const urls = await InvitationStorageService.uploadMany(
  //     current.mainImages,
  //     current.id,
  //   );

  //   processedForm.mainImages = urls;

  //   setForm((prev) => ({
  //     ...prev,
  //     mainImages: urls,
  //   }));

  //   return processedForm;
  // };

  // V2
  const uploadLockRef = useRef(false);
  // const isFile = (f) =>
  //   f &&
  //   typeof f === "object" &&
  //   typeof f.name === "string" &&
  //   typeof f.size === "number";
  const isFile = (f) => f instanceof File || f instanceof Blob;

  const processMainImages = async (current) => {
    if (uploadLockRef.current) return current;

    if (!Array.isArray(current.mainImages) || !current.id) {
      return current;
    }

    const existing = current.mainImages.filter(
      (item) => typeof item === "string",
    );

    const files = current.mainImages.filter(isFile);

    if (!files.length) {
      return current;
    }

    uploadLockRef.current = true;

    try {
      const uploaded = await InvitationStorageService.uploadMany(
        files,
        current.id,
      );

      const updated = {
        ...current,
        // IMPORTANT: replace ALL files immediately so blur won't re-trigger uploads
        mainImages: [...existing, ...uploaded],
      };

      setForm(updated);

      return updated;
    } finally {
      uploadLockRef.current = false;
    }
  };

  // V1 - with mac OS bug
  // const processStoryImages = async (current) => {
  //   let processedForm = { ...current };

  //   const photoUrls = current.ourStory?.photoUrls;

  //   if (!Array.isArray(photoUrls) || !current.id) {
  //     return processedForm;
  //   }

  //   const existingUrls = photoUrls.filter((img) => typeof img === "string");
  //   const newFiles = photoUrls.filter((img) => img instanceof File);

  //   if (newFiles.length === 0) {
  //     return processedForm;
  //   }

  //   const uploadedUrls = await InvitationStorageService.uploadMany(
  //     newFiles,
  //     current.id,
  //   );

  //   const mergedUrls = [...existingUrls, ...uploadedUrls];

  //   processedForm = {
  //     ...processedForm,
  //     ourStory: {
  //       ...processedForm.ourStory,
  //       photoUrls: mergedUrls,
  //     },
  //   };

  //   setForm((prev) => ({
  //     ...prev,
  //     ourStory: {
  //       ...prev.ourStory,
  //       photoUrls: mergedUrls,
  //     },
  //   }));

  //   return processedForm;
  // };

  // V2
  const processStoryImages = async (current) => {
    const photoUrls = current.ourStory?.photoUrls;

    if (!Array.isArray(photoUrls) || !current.id) {
      return current;
    }

    const existing = photoUrls.filter((item) => typeof item === "string");
    const files = photoUrls.filter(isFile);

    if (!files.length) {
      return current;
    }

    const uploaded = await InvitationStorageService.uploadMany(
      files,
      current.id,
    );

    const updated = {
      ...current,
      ourStory: {
        ...current.ourStory,
        photoUrls: [...existing, ...uploaded],
      },
    };

    setForm(updated);

    return updated;
  };

  // V1 - with mac OS bug
  // const handleSmartBlur = async () => {
  //   if (invitationData?.status === "ACTIVE") return;

  //   const current = formRef.current;

  //   const isTitleFilled = current.languages?.some((lang) =>
  //     current.title?.[lang]?.trim(),
  //   );

  //   if (!isTitleFilled) return;

  //   let processedForm = await processMainImages(current);
  //   processedForm = await processStoryImages(processedForm);

  //   const sanitized = {
  //     ...processedForm,
  //     timeline: processedForm.timeline?.map((item) => ({
  //       venueKey: item.venueKey,
  //       venueName: item.venueName,
  //       time: item.time,
  //       venueLocation: item.venueLocation,
  //     })),
  //   };

  //   const currentDataString = JSON.stringify(sanitized);

  //   if (lastSavedFormRef.current !== currentDataString) {
  //     mutate(buildPayload(sanitized));
  //     lastSavedFormRef.current = currentDataString;
  //   }
  // };

  // V2
  const handleSmartBlur = async () => {
    if (invitationData?.status === "ACTIVE") return;

    const current = formRef.current;

    const isTitleFilled = current.languages?.some((lang) =>
      current.title?.[lang]?.trim(),
    );

    if (!isTitleFilled) return;

    const processed = await processStoryImages(current);

    const sanitized = {
      ...processed,
      timeline: processed.timeline?.map((item) => ({
        venueKey: item.venueKey,
        venueName: item.venueName,
        time: item.time,
        venueLocation: item.venueLocation,
      })),
    };

    const clean = JSON.parse(JSON.stringify(sanitized));

    const currentDataString = JSON.stringify(clean);

    if (lastSavedFormRef.current !== currentDataString) {
      mutate(buildPayload(clean));
      lastSavedFormRef.current = currentDataString;
    }
  };

  //
  const uploadMainImages = async (current) => {
    console.log("[uploadMainImages] start");

    if (!Array.isArray(current.mainImages)) {
      console.log("[uploadMainImages] mainImages not array");
      return current;
    }

    if (!current.id) {
      console.log("[uploadMainImages] missing invitation id");
      return current;
    }

    const existing = current.mainImages.filter((i) => typeof i === "string");
    const files = current.mainImages.filter(isFile);

    console.log("[uploadMainImages] existing", existing.length);
    console.log("[uploadMainImages] files", files);

    if (!files.length) {
      console.log("[uploadMainImages] nothing to upload");
      return current;
    }

    const uploaded = await InvitationStorageService.uploadMany(
      files,
      current.id,
    );

    console.log("[uploadMainImages] uploaded urls", uploaded);

    // const updated = {
    //   ...current,
    //   mainImages: [...existing, ...uploaded],
    // }; // V1

    // return updated; // V1
    return {
      ...current,
      mainImages: [...existing, ...uploaded],
    }; // V2
  };

  const handlePhotoFiles = async (files) => {
    console.log("[Photos] handlePhotoFiles", files);

    if (!files?.length) {
      console.log("[Photos] no files");
      return;
    }

    const current = formRef.current;

    console.log("[Photos] invitation id", current?.id);
    console.log("[Photos] current form", current);

    const normalizedFiles = Array.from(files).filter(isFile);

    console.log("[Photos] normalized", normalizedFiles);

    if (!normalizedFiles.length) {
      console.log("[Photos] no valid File objects");
      return;
    }
    const updated = {
      ...current,
      // mainImages: normalizedFiles, // V1
      mainImages: [
        ...(current.mainImages ?? []).filter((i) => typeof i === "string"),
        ...normalizedFiles, // V2
      ],
    };

    setForm(updated);
    formRef.current = updated;

    try {
      const uploaded = await uploadMainImages(updated);

      console.log("[Photos] uploaded result", uploaded);

      if (!uploaded) return;

      formRef.current = uploaded;
      setForm(uploaded);
    } catch (e) {
      console.error("[Photos] uploadMainImages failed", e);
    }
  };

  const handleDeletePhoto = (url) => {
    const current = formRef.current;

    const updated = {
      ...current,
      // mainImages: (current.mainImages ?? []).filter((img) => img !== url), // V1
      mainImages: (current.mainImages ?? []).filter((img) =>
        typeof img === "string" ? img !== url : img.url !== url,
      ), // V2
    };

    formRef.current = updated;
    setForm(updated);
  };

  const submit = async (e) => {
    e.preventDefault();
    router.push(`preview${search}`);
  };

  return (
    <Box pt={{ base: "32px", md: "48px" }} pb="22px">
      {/* VStack */}
      <Stack
        gap={{ base: "16px", md: "24px" }}
        w={{ base: "100%", lg: "748px" }}
        mx="auto"
      >
        <Stack
          id="details"
          as="form"
          gap={{ base: "16px", md: "24px" }}
          autoComplete="on"
          onSubmit={submit}
          onBlur={handleSmartBlur}
        >
          <Animate>
            <LngSelector
              name="languages"
              value={form.languages}
              onChange={handleChange}
              required={true}
            />
          </Animate>

          <Animate>
            <TitleCreator
              name="title"
              value={form.title}
              urlExtension={urlExtension}
              onChange={handleLngChange}
              required={true}
              languages={form.languages}
            />
          </Animate>

          <Animate>
            <EventDate
              name="eventDate"
              value={form.eventDate}
              onChange={handleChange}
              disabled={form.status === "ACTIVE" ? true : false}
              required={true}
            />
          </Animate>

          <Animate>
            <TextAreaField
              name="description"
              value={form.description}
              onChange={handleLngChange}
              required={true}
              text="description"
              placeholder="description_placeholder"
              languages={form.languages}
            />
          </Animate>

          <Animate>
            <Photos
              // name="mainImages"
              // onChange={(name, files) =>
              //   setForm((prev) => ({
              //     ...prev,
              //     [name]: Array.from(files ?? []),
              //   }))
              // }
              value={form.mainImages}
              // onChange={handleChange}
              onFileSelect={handlePhotoFiles}
              onDelete={handleDeletePhoto}
              count={
                data?.mainImageMaxCount ??
                invitationData?.template?.mainImageMaxCount
              }
              required={true}
            />
          </Animate>

          <Animate>
            <Rsvp
              name="confirmationEnabled"
              hide={handleHide}
              onChange={handleChange}
              text="rsvp"
              value={form.confirmationEnabled}
            />
          </Animate>

          <Animate>
            <Venue
              name="eventVenue"
              value={form.eventVenue}
              onChange={handleChange}
              required={true}
            />
          </Animate>

          <Animate>
            <Timeline
              data={agenda}
              setData={setAgenda}
              languages={form.languages}
              //
              name="timeline"
              value={form.timeline}
              hide={handleHide}
              onChange={handleTimelineChange}
              required={false}
            />
          </Animate>

          <Animate>
            <Dresscode
              name="dressCode"
              value={form.dressCode}
              onChange={handleLngChange}
              setForm={setForm} //
              hide={handleHide}
              required={false}
              languages={form.languages}
            />
          </Animate>

          <Animate>
            <AlbumLink
              name="albumLink"
              value={form.albumLink}
              onChange={handleChange}
              hide={handleHide}
              required={false}
            />
          </Animate>

          <Animate>
            <Story
              name="ourStory"
              value={form.ourStory}
              onChange={handleLngChange}
              photoUrlsChange={handleChange}
              hide={handleHide}
              required={false}
              languages={form.languages}
              count={
                data?.albumImageMaxCount ??
                invitationData?.template?.albumImageMaxCount
              }
            />
          </Animate>

          <Animate>
            <Contact
              name="connectWithUs"
              value={form.connectWithUs}
              onChange={handleChange}
              hide={handleHide}
              required={false}
            />
          </Animate>
        </Stack>

        <Animate>
          <Expire />
        </Animate>
      </Stack>
    </Box>
  );
};

// V1 - these two affect the draft call after the invitation/id call.
// useEffect(() => {
//   if (!invitationData) return;
//   setForm(pickInvitationFields(invitationData));

//   if (invitationData?.urlExtension) {
//     setUrlExtension(invitationData.urlExtension);
//   }
// }, [invitationData]);

// useEffect(() => {
//   if (!form.eventDate) return;
//   handleSmartBlur();
// }, [form.eventDate]);
// blur with nested img upload logic (not needed)
// const handleSmartBlur = async () => {
//   if (invitationData?.status === "ACTIVE") return;

//   const current = formRef.current;

//   const isTitleFilled = current.languages?.some((lang) =>
//     current.title?.[lang]?.trim(),
//   );

//   if (!isTitleFilled) return;

//   //
//   const processedForm = await processMainImages(current);
//   //

//   //
//   // let processedForm = { ...current };

//   // if (Array.isArray(current.mainImages)) {
//   //   const isFileArray =
//   //     current.mainImages.length > 0 && current.mainImages[0] instanceof File;

//   //   if (isFileArray && current.id) {
//   //     const urls = await uploadImages(current.mainImages, current.id);
//   //     console.log(urls);

//   //     processedForm.mainImages = urls;

//   //     // also update UI state so next blur won't re-upload
//   //     setForm((prev) => ({
//   //       ...prev,
//   //       mainImages: urls,
//   //     }));
//   //   }
//   // }
//   //

//   const sanitized = {
//     // ...current,
//     ...processedForm,
//     // timeline: current.timeline?.map((item) => ({
//     timeline: processedForm.timeline?.map((item) => ({
//       venueKey: item.venueKey,
//       venueName: item.venueName,
//       time: item.time,
//       venueLocation: item.venueLocation,
//     })),
//   };

//   const currentDataString = JSON.stringify(sanitized);

//   if (lastSavedFormRef.current !== currentDataString) {
//     mutate(buildPayload(sanitized));
//     lastSavedFormRef.current = currentDataString;
//   }
// };

// V2 --works, but not needed (it was added for draft call fix)
// const handleSmartBlur = () => {
//   setTimeout(async () => {
//     if (invitationData?.status === "ACTIVE") return;

//     const current = formRef.current;

//     const isTitleFilled = current.languages?.some((lang) =>
//       current.title?.[lang]?.trim(),
//     );

//     if (!isTitleFilled) return;

//     const processedForm = await processMainImages(current);

//     const sanitized = {
//       ...processedForm,
//       timeline: processedForm.timeline?.map((item) => ({
//         venueKey: item.venueKey,
//         venueName: item.venueName,
//         time: item.time,
//         venueLocation: item.venueLocation,
//       })),
//     };

//     const currentDataString = JSON.stringify(sanitized);

//     if (lastSavedFormRef.current !== currentDataString) {
//       mutate(buildPayload(sanitized));
//       lastSavedFormRef.current = currentDataString;
//     }
//   }, 0);
// };

// const handleSmartBlur = () => {
//   if (invitationData?.status === "ACTIVE") return;

//   const current = formRef.current;

//   const isTitleFilled = current.languages?.some((lang) =>
//     current.title?.[lang]?.trim(),
//   );

//   if (!isTitleFilled) return;

//   const currentDataString = JSON.stringify(current);

//   if (lastSavedFormRef.current !== currentDataString) {
//     // const payload = {
//     //   ...current,
//     //   timeline: current.timeline?.map(({ venueKey, ...rest }) => rest),
//     // };
//     // mutate(buildPayload(payload));
//     mutate(buildPayload(current));
//     lastSavedFormRef.current = currentDataString;
//   }
// };

// initial={{ opacity: 0, y: 40 }}
// whileInView={{ opacity: 1, y: 0 }}
// transition={{ duration: 0.5 }}
// viewport={{ once: true, margin: "0px 0px -100px 0px" }}
