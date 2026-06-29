"use client";

import { useState, useRef, useMemo } from "react";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useMutateAuthTanstack } from "@/hooks/useTanstack";
import { formatEventDate, paletteToVars } from "@/utils/formatters";
import { Language } from "@/components/invitation/language";
import { getInvitationForm, pickLang } from "@/utils/helpers";
import {
  Box,
  Button,
  createListCollection,
  Flex,
  For,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { leftBrace, map, rightBrace } from "@/assets/svgs";
import { CountdownTimer } from "@/components/invitation/countdownTimer";
import mainBg from "@/assets/imgs/invitations/classic/main_bg.png";
import timingBg from "@/assets/imgs/invitations/classic/timing_bg.jpg";
import storyBg from "@/assets/imgs/invitations/classic/story_bg.jpg";
import dresscodeBg from "@/assets/imgs/invitations/classic/dresscode_bg.jpg";
import {
  GUEST_COUNT,
  CLASSIC_FALLBACKS,
  FALLBACK,
  TIMELINE,
} from "@/utils/constants";
import { Link } from "@/i18n/routing";
import { error, success } from "@/components/ui/alerts";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import { Rsvp } from "@/components/invitation/rsvp";

export default function Classic({ viewport = "pc", palette, data }) {
  const { slug } = useParams();

  const t = useTranslations();
  const language = useLocale();
  const galleryRef = useRef(null);
  const isLive = Boolean(slug);
  const isMobile = viewport === "mobile";

  const { mutate } = useMutateAuthTanstack("confirmations/guest", "post", {
    onSuccess: () => {
      setForm(getInvitationForm(id));
      setGuests([`${t("classic_count")}`]);
      success("Confirmation has been sent.");
    },
    onError: (err) =>
      error(err?.response?.data?.error || "Guest list adding error!"),
  });

  const id = data?.id;
  const locales = data?.languages;
  const vars = paletteToVars(
    palette?.colors ?? data?.template?.paletteKeyword?.colors,
  );

  const [form, setForm] = useState(getInvitationForm(id));
  const [guests, setGuests] = useState([`${t("classic_count")}`]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const heroImage = data?.mainImages?.[0] || (!isLive && mainBg.src);
  const coupleImage = data?.mainImages?.[1] || (!isLive && timingBg.src);
  const gallery = data?.ourStory?.photoUrls?.length
    ? data.ourStory.photoUrls
    : !isLive
      ? CLASSIC_FALLBACKS
      : [];

  const galleryItems = useMemo(
    () =>
      gallery.map((src) => {
        return { original: src, thumbnail: src };
      }),
    [gallery],
  );

  const title =
    pickLang(data?.title, language) || (!isLive && "Henry & Mariam");
  const eventDateText = formatEventDate(data?.eventDate);
  const description =
    pickLang(data?.description, language) || (!isLive && t("classic_title"));
  const timeline = data?.timeline || (!isLive && TIMELINE);
  const dressCodeDesc =
    pickLang(data?.dressCode?.description, language) ||
    (!isLive && t("dresscode_desc"));
  const dressCodeColors =
    data?.dressCode?.colorPalette?.colors || (!isLive && FALLBACK);
  const dressCodeName =
    pickLang(data?.dressCode?.colorPalette?.name, language) ||
    palette?.name?.[language]; // needs checking after ||
  const dressCodeAbout =
    pickLang(data?.dressCode?.colorPalette?.description, language) ||
    pickLang(palette?.description, language); // needs checking after ||
  const storyText =
    pickLang(data?.ourStory?.text, language) ||
    (!isLive && t("classic_story_desc"));
  const contact = data?.connectWithUs || {};
  const name = contact.name || (!isLive && "username");
  const phone = contact.phone || (!isLive && "+374 99 XXXXXX");
  const email = contact.email || (!isLive && "username@gmail.com");
  const guestCount = createListCollection({
    items: GUEST_COUNT,
  });

  const openFullscreen = (index) => {
    setSelectedIndex(index);
    setIsFullscreen(true);

    setTimeout(() => {
      galleryRef.current?.fullScreen();
    }, 50);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSecondaryGuestChange = (index, value) => {
    setForm((prev) => {
      const updated = [...prev.secondaryGuests];
      updated[index] = value;

      return {
        ...prev,
        secondaryGuests: updated,
      };
    });
  };

  const handleGuestCountChange = ({ value }) => {
    const count = Number(value[0]) || 0;

    setGuests(value);
    setForm((prev) => ({
      ...prev,
      secondaryGuests:
        count === 0
          ? []
          : Array.from(
              { length: count },
              (_, i) => prev.secondaryGuests[i] ?? "",
            ),
    }));
  };

  const handleSubmit = (status) => (e) => {
    e.preventDefault();

    if (!form.mainGuest) return error(t("classic_type"));
    if (!form.guestSide) return error(t("invitor"));

    if (status === "CONFIRMED") {
      const hasEmptyGuest = form.secondaryGuests.some((g) => !g.trim());
      if (hasEmptyGuest) return error(t("accompanying_name"));
    }

    mutate({
      ...form,
      status,
    });
  };

  console.log(data);

  return (
    <Box
      data-viewport={viewport}
      style={vars}
      // w={`${width}px`}
      bg="#F6F5F4"
      color="#111"
      overflow="hidden"
      // position={"relative"}
    >
      {locales && <Language locales={locales} />}

      {/* ————— HERO ————— */}
      <Box
        position="relative"
        w="100%"
        h={isMobile ? "520px" : "750px"}
        bgImage={`linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.45) 100%), url(${heroImage})`}
        bgSize="contain"
        bgRepeat={"no-repeat"}
        bgPos="center"
      >
        <VStack
          position="absolute"
          bottom={isMobile ? "40px" : "80px"}
          left="0"
          right="0"
          gap={isMobile ? "8px" : "100px"}
          color="white"
          textAlign="center"
        >
          <Text
            fontFamily="var(--font-sosbanff)"
            // fontFamily={sosBanff.style.fontFamily}
            fontSize={isMobile ? "54px" : "103px"}
            lineHeight="24px"
            fontWeight="400"
          >
            {title}
          </Text>
          <Text
            fontFamily="var(--font-sosbanff)"
            fontSize={isMobile ? "26px" : "63px"}
            lineHeight="24px"
            fontWeight="400"
          >
            {eventDateText}
          </Text>
        </VStack>
      </Box>

      {/* ————— INTRO + COUNTDOWN ————— */}
      <VStack
        py={isMobile ? "40px" : "60px"}
        px={isMobile ? "24px" : "100px"}
        gap={isMobile ? "24px" : "100px"}
      >
        <Text
          textAlign="center"
          maxW="942px"
          fontSize={isMobile ? "15px" : "20px"}
          lineHeight="28px"
          fontWeight="400"
          color="#3E433C"
        >
          {description}
        </Text>

        <Stack gap="40px">
          {data?.countDown !== false && (
            <CountdownTimer
              template={data?.templateId}
              eventDate={data?.eventDate}
              isMobile={isMobile}
            />
          )}

          <Text
            textAlign="center"
            color="#3E433C"
            fontSize={isMobile ? "13px" : "18px"}
            lineHeight={"24px"}
          >
            {t("classic_journey")}
          </Text>
        </Stack>
      </VStack>

      {/* ————— TIMING ————— */}
      <Flex
        bg="var(--c-secondary)"
        color="white"
        direction={isMobile ? "column" : "row"}
        align={isMobile ? "stretch" : "center"}
        gap={isMobile ? "32px" : "60px"}
      >
        <VStack align="flex-start" gap="40px" flex="1" p="100px 0 100px 160px">
          <Text
            fontWeight="800"
            fontSize={isMobile ? "22px" : "34px"}
            lineHeight="50px"
            textTransform="uppercase"
            color="#FFFFFF"
            // dangerouslySetInnerHTML={{
            //   __html: t("classic_timing").replace(/\n/g, "<br />"),
            // }}
          >
            {t("classic_timing")}
          </Text>
          {/* <Text
            fontWeight="400"
            fontSize={isMobile ? "13px" : "18px"}
            lineHeight="28px"
            color="#FFFFFF"
            maxW="440px"
          >
            Lorem ipsum dolor sit amet consectetur. Ut enim scelerisque
            consequat a justo diam adipiscing velit tincidunt.
          </Text> */}

          <Stack gap="40px" minW={"361px"}>
            {timeline.map((item, i) => (
              <Flex
                key={i}
                justify={"space-between"}
                align={"center"}
                gap="20px"
              >
                <VStack align="flex-start" gap="24px" minW="160px">
                  <Text
                    fontSize={isMobile ? "20px" : "34px"}
                    fontWeight="800"
                    lineHeight={"24px"}
                  >
                    {item.time || "00:00"}
                  </Text>
                  <Text
                    fontSize={isMobile ? "15px" : "22px"}
                    fontWeight="500"
                    lineHeight={"34px"}
                    textTransform="uppercase"
                    color="#FFFFFF"
                  >
                    {pickLang(item.venueName, language) || item.venueName}
                  </Text>
                </VStack>
                <Button
                  as={Link}
                  href={item.venueLocation}
                  target="_blank"
                  // variant="ghost"
                  color="#FFFFFF"
                  // _hover={{ bg: "rgba(255,255,255,0.08)" }}
                  fontSize="14px"
                  bg="var(--c-primary)"
                  borderRadius="10px"
                  h="44px"
                >
                  <Icon>{map.icon}</Icon> {t("classic_map")}
                </Button>
              </Flex>
            ))}
          </Stack>
        </VStack>

        {!isMobile && (
          <Box
            flex="0 0 auto"
            w="652px"
            h="972px"
            // borderRadius="200px"
            borderTopLeftRadius="470px"
            borderBottomLeftRadius="470px"
            overflow="hidden"
            bgImage={`url(${coupleImage})`}
            bgSize="cover"
            bgRepeat={"no-repeat"}
            bgPos="center"
          />
        )}
      </Flex>

      {/* ————— RSVP ————— */}
      {data?.confirmationEnabled && (
        <Rsvp
          isMobile={isMobile}
          color="var(--c-secondary)"
          data={data?.rsvp}
          note={data?.template?.hasConfirmationNote}
          guestCount={guestCount}
          form={form}
          setForm={setForm}
          guests={guests}
          handleChange={handleChange}
          handleGuestCountChange={handleGuestCountChange}
          handleSecondaryGuestChange={handleSecondaryGuestChange}
          handleSubmit={handleSubmit}
        />
      )}

      {/* ————— DRESS CODE ————— */}
      <VStack
        bg="var(--c-secondary)"
        color="white"
        py={isMobile ? "48px" : "60px"}
        px={isMobile ? "24px" : "131px"}
        gap={"60px"}
        textAlign="center"
        bgImage={`linear-gradient(var(--c-secondary)), url(${dresscodeBg.src})`}
        bgSize="cover"
        bgPos="center"
        bgBlendMode={"overlay"}
      >
        <Stack gap="32px">
          <Text
            fontSize={isMobile ? "20px" : "34px"}
            lineHeight="24px"
            fontWeight="800"
            color="#FFFFFF"
            textTransform={"uppercase"}
          >
            {t("dresscode")}
          </Text>
          <Text
            fontSize={isMobile ? "13px" : "18px"}
            lineHeight="28px"
            color="#FFFFFF"
            maxW="720px"
          >
            {dressCodeDesc}
          </Text>
        </Stack>

        <Stack gap={"32px"}>
          <VStack gap="20px">
            {dressCodeColors && (
              <HStack gap="0">
                <For each={dressCodeColors}>
                  {(item, index) => (
                    <Box
                      key={index}
                      w="32px"
                      h="32px"
                      borderRadius="50%"
                      ml="-10px"
                      bg={item}
                    />
                  )}
                </For>
              </HStack>
            )}
            <Text
              fontSize="18px"
              lineHeight={"22px"}
              fontWeight="500"
              color="#FFFFFF"
            >
              {dressCodeName}
            </Text>
            {dressCodeAbout && (
              <Text
                fontSize="16px"
                fontWeight="400"
                lineHeight={"22px"}
                color="#FFFFFF"
              >
                {dressCodeAbout}
              </Text>
            )}
          </VStack>
        </Stack>
      </VStack>

      {/* ————— Wedding Gallery ————— */}
      {data?.albumLink && (
        <VStack
          py={isMobile ? "48px" : "100px"}
          gap="24px"
          textAlign="center"
          position="relative"
        >
          {!isMobile && (
            <>
              <Icon
                position="absolute"
                left="261px"
                top="50%"
                transform="translateY(-50%)"
                color="var(--c-secondary)"
              >
                {leftBrace.icon}
              </Icon>
              <Icon
                position="absolute"
                right="261px"
                top="50%"
                transform="translateY(-50%)"
                color="var(--c-secondary)"
              >
                {rightBrace.icon}
              </Icon>
            </>
          )}
          <Text
            fontSize="12px"
            lineHeight="22px"
            color="var(--c-secondary)"
            textTransform="uppercase"
          >
            {t("classic_look")}
          </Text>
          <Text
            fontSize={isMobile ? "22px" : "34px"}
            lineHeight="48px"
            fontWeight="500"
            color="var(--c-secondary)"
          >
            {t("classic_gallery")}
          </Text>
          <Text
            fontSize="16px"
            fontWeight="400"
            color="var(--c-secondary)"
            maxW="440px"
            dangerouslySetInnerHTML={{
              __html: t("classic_soon").replace(/\n/g, "<br />"),
            }}
          />
          <Button
            mt="8px"
            px="40px"
            h="40px"
            fontSize="13px"
            boxShadow="xl"
            bg="var(--c-secondary)"
            color="white"
            _hover={{
              bg: "transparent",
              color: "var(--c-secondary)",
              borderColor: "var(--c-secondary)",
            }}
            transition="all 0.3s ease"
            as={data?.albumLink ? "a" : "button"}
            {...(data?.albumLink
              ? { href: data.albumLink, target: "_blank" }
              : {})}
          >
            {t("classic_view")}
          </Button>
        </VStack>
      )}

      {/* ————— OUR LOVE STORY ————— */}
      <Box
        position="relative"
        w="100%"
        py={isMobile ? "60px" : "112px"}
        // px={isMobile ? "24px" : "120px"}
        bgImage={`linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.82)), url(${storyBg.src})`}
        bgSize="cover"
        bgRepeat={"no-repeat"}
        bgPos="center"
        // h="451px"
      >
        <VStack gap="40px" textAlign="center">
          <Text
            color="var(--c-secondary)"
            fontSize={isMobile ? "20px" : "34px"}
            lineHeight="48px"
            fontWeight="500"
          >
            {t("classic_story")}
          </Text>
          <Text
            maxW="877px"
            fontSize={isMobile ? "15px" : "18px"}
            lineHeight="28px"
            color="var(--c-secondary)"
            whiteSpace="pre-line"
            fontWeight="400"
            // dangerouslySetInnerHTML={{
            //   __html: storyText.replace(/\n/g, "<br />"),
            // }}
          >
            {storyText}
          </Text>
        </VStack>
      </Box>

      {/* ————— PHOTO STRIP ————— */}
      <Flex
        w="100%"
        // h={isMobile ? "180px" : "260px"}
        my="100px"
        px="56px"
        gap="10px"
        justify={"center"}
      >
        {gallery.map((src, i) => {
          return (
            <Box
              key={i}
              flex="1"
              maxW="320px"
              h="320px"
              bgImage={`url(${src})`}
              bgSize="cover"
              bgPos="center"
              filter={i === 1 || i === 3 ? "grayscale(100%)" : "none"}
              cursor="zoom-in"
              onClick={() => openFullscreen(i)}
            />
          );
        })}
      </Flex>

      {/* Hidden fullscreen gallery */}
      {isFullscreen && (
        <Box position="fixed" inset="0" zIndex="9999">
          <ImageGallery
            key={selectedIndex}
            startIndex={selectedIndex}
            ref={galleryRef}
            items={galleryItems}
            showPlayButton={false}
            showThumbnails={false}
            onScreenChange={(isFull) => {
              if (!isFull) setIsFullscreen(false);
            }}
          />
        </Box>
      )}

      {/* ————— CONTACT ————— */}
      <Flex
        // bg="var(--c-primary)"
        // color="white"
        // py={isMobile ? "28px" : "40px"}
        pb="100px"
        align={"center"}
        justify={"center"}
        gap="90px"
      >
        <Text
          fontSize="30px"
          lineHeight="24px"
          fontWeight="800"
          textTransform={"uppercase"}
          color="var(--c-secondary)"
        >
          {t("classic_contact")}
        </Text>
        <Text
          fontSize="24px"
          lineHeight="24px"
          fontWeight="800"
          color="var(--c-secondary)"
        >
          {name}
        </Text>
        <Text
          as="a"
          href={`tel:${phone}`}
          fontSize="24px"
          lineHeight="24px"
          fontWeight="800"
          color="var(--c-secondary)"
        >
          {phone}
        </Text>
        <Text
          as="a"
          href={`mailto:${email}`}
          fontSize="24px"
          lineHeight="24px"
          fontWeight="800"
          color="var(--c-secondary)"
        >
          {email}
        </Text>
      </Flex>
    </Box>
  );
}

// const handleConfirm = (e) => {
//   e.preventDefault();

//   if (!form.mainGuest) return error(t("add_guest"));
//   if (!form.guestSide) return error(t("invitor"));

//   const hasEmptyGuest = form.secondaryGuests.some((guest) => !guest.trim());
//   if (hasEmptyGuest) return error(t("accompanying_name"));

//   mutate({ ...form, status: "CONFIRMED" });
// };

// const handleDecline = (e) => {
//   e.preventDefault();

//   if (!form.mainGuest) return error(t("add_guest"));
//   if (!form.guestSide) return error(t("invitor"));

//   mutate({ ...form, status: "DECLINED" });
// };
