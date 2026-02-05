"use client";

import { useRouter } from "@/i18n/routing";
import { useRef, useState, useEffect } from "react";
import { useNuqs } from "@/hooks/useNuqs";
import { detailsForm } from "@/utils/constants";
import apiClient from "@/lib/apiClient";
import { Box, Container, Stack } from "@chakra-ui/react";
import { LngSelector } from "@/components/builder/lngSelector";
import { TitleCreator } from "@/components/builder/titleCreator";
import { EventDate } from "@/components/builder/eventDate";
import { Timeline } from "@/components/builder/timeline";
// import { Counter } from "@/components/builder/counter";
import { Contact } from "@/components/builder/contact";
import { Dresscode } from "@/components/builder/dresscode";
import { AlbumLink } from "@/components/builder/albumLink";
import { Story } from "@/components/builder/story";
import { TextAreaField } from "@/components/builder/textareaField";
import { Photos } from "@/components/builder/photos";
import { Expire } from "@/components/builder/expire";
import { error } from "@/components/ui/alerts";
import { Venue } from "@/components/builder/venue";
import { Rsvp } from "@/components/builder/rsvp";
import { useGetTanstack } from "@/hooks/useTanstack";

export const DetailsClient = () => {
  const router = useRouter();

  const hiddenFieldsRef = useRef({});

  const [template] = useNuqs("template");
  const [palette] = useNuqs("palette");

  const { data } = useGetTanstack("templates");

  const defaults = data?.find((item) => item.id === template)?.defaults || {};

  const [form, setForm] = useState({
    ...detailsForm,
    templateId: template,
    colorPaletteId: palette,
  });
  console.log(form); //

  useEffect(() => {
    if (defaults?.ourStoryText) {
      setForm((prev) => ({
        ...prev,
        ourStory: {
          ...prev.ourStory,
          text: defaults?.ourStoryText,
        },
      }));
    }
    if (defaults?.description) {
      setForm((prev) => ({
        ...prev,
        description: {
          ...defaults?.description,
        },
      }));
    }
    if (defaults?.dressCodeDescription) {
      setForm((prev) => ({
        ...prev,
        dressCode: {
          ...prev.dressCode,
          description: defaults?.dressCodeDescription,
        },
      }));
    }
  }, [defaults]);

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

  // single language
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // multi language
  // const handleLngChange = (name, lang, value) => {
  //   setForm((prev) => ({
  //     ...prev,
  //     [name]: {
  //       ...(prev[name] || { hy: "", ru: "", en: "" }),
  //       [lang]: value,
  //     },
  //   }));
  // };
  // mixed with handleChange
  const handleLngChange = (field, lang, value, nestedKey) => {
    setForm((prev) => {
      if (!nestedKey) {
        return {
          ...prev,
          [field]: {
            ...(prev[field] || { hy: "", ru: "", en: "" }),
            [lang]: value,
          },
        };
      }

      return {
        ...prev,
        [field]: {
          ...(prev[field] || {}),
          [nestedKey]: {
            ...(prev[field]?.[nestedKey] || { hy: "", ru: "", en: "" }),
            [lang]: value,
          },
        },
      };
    });
  };

  // for timeline updates (array)
  const handleTimelineChange = (newTimeline) => {
    setForm((prev) => ({
      ...prev,
      timeline: newTimeline,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await apiClient.post(`/invitations`, form);

      if (data.status === "ok") {
        success("Basic Wedding Information Completed.");
        setForm(detailsForm);
        router.push(`/preview`);
      }
    } catch (err) {
      error(`Error - ${err}`);
    }
  };

  return (
    <Box pt="32px" pb="65px">
      <Container maxW="1360px" px={0}>
        {/* VStack */}
        <Stack gap="24px" w="748px" mx="auto">
          <Stack
            id="details"
            as="form"
            gap="24px"
            autoComplete="on"
            onSubmit={submit}
          >
            <LngSelector
              name="languages"
              value={form.languages}
              onChange={handleChange}
              required={true}
            />
            <TitleCreator
              name="title"
              value={form.title}
              onChange={handleLngChange}
              setForm={setForm}
              required={true}
              languages={form.languages}
            />
            <EventDate
              name="eventDate"
              value={form.eventDate}
              onChange={handleChange}
              required={true}
            />
            <TextAreaField
              name="description"
              value={form.description}
              onChange={handleLngChange}
              required={true}
              text="description"
              placeholder="description_placeholder"
              languages={form.languages}
            />
            <Photos
              // onFileSelect={(file) =>
              //   setForm((prev) => ({ ...prev, mainImages: file }))
              // }
              name="mainImages"
              onChange={handleChange}
              required={true}
            />
            <Rsvp name="rsvp" hide={handleHide} text="rsvp" />
            <Venue
              name="venue"
              value={form.venue}
              onChange={handleChange}
              required={true}
            />
            <Timeline
              data={defaults?.agendaTitles}
              name="timeline"
              value={form.timeline}
              hide={handleHide}
              onChange={handleTimelineChange}
              required={false}
            />
            {/* <Counter
              name="countDown"
              value={form.eventDate}
              hide={handleHide}
              required={false}
            /> */}
            <Dresscode
              name="dressCode"
              value={form.dressCode}
              onChange={handleLngChange}
              hide={handleHide}
              required={false}
              languages={form.languages}
            />
            <AlbumLink
              name="albumLink"
              value={form.albumLink}
              onChange={handleChange}
              hide={handleHide}
              required={false}
            />
            <Story
              name="ourStory"
              value={form.ourStory}
              onChange={handleLngChange}
              hide={handleHide}
              required={false}
              languages={form.languages}
            />
            <Contact
              name="connectWithUs"
              value={form.connectWithUs}
              onChange={handleChange}
              hide={handleHide}
              required={false}
            />
          </Stack>
          <Expire />
        </Stack>
      </Container>
    </Box>
  );
};
