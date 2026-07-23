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
  useBreakpointValue,
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

export default function Classic({
  viewport = "pc",
  template,
  palette,
  data,
  live,
}) {
  const { slug } = useParams();
  const t = useTranslations();
  const language = useLocale();
  const galleryRef = useRef(null);
  const isLive = Boolean(slug) || live;
  const isRealMobile = useBreakpointValue({ base: true, lg: false });
  const isMobile = isLive
    ? Boolean(isRealMobile)
    : viewport === "mobile" || viewport === "laptop";
  const r = (base, lg) => (isMobile ? base : lg);

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

  return (
    <Box
      data-viewport={viewport}
      style={vars}
      bg="#F6F5F4"
      color="#111"
      overflow="hidden"
    >
      {locales && <Language locales={locales} />}

      {/* ————— HERO ————— */}
      <Box
        position="relative"
        w="100%"
        h={r("640px", "750px")}
        bgImage={`linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.45) 100%), url(${heroImage})`}
        bgSize="contain"
        bgRepeat={"no-repeat"}
        bgPos="center"
      >
        <VStack
          position="absolute"
          bottom={r("48px", "60px")}
          left="0"
          right="0"
          gap={r("48px", "80px")}
          color="white"
          textAlign="center"
        >
          <Text
            fontFamily="var(--font-sosbanff)"
            fontSize={r("54px", "103px")}
            lineHeight="40px"
            fontWeight="400"
            color="#FFFFFF"
          >
            {title}
          </Text>
          <Text
            fontFamily="var(--font-sosbanff)"
            fontSize={r("43px", "63px")}
            lineHeight="24px"
            fontWeight="400"
            color="#FFFFFF"
          >
            {eventDateText}
          </Text>
        </VStack>
      </Box>

      {/* ————— INTRO + COUNTDOWN ————— */}
      <VStack
        p={r("42px 24px 64px 24px", "60px 0 100px 0")}
        gap={r("64px", "100px")}
      >
        <Text
          textAlign="center"
          maxW="942px"
          fontSize={r("16px", "20px")}
          lineHeight="28px"
          fontWeight="400"
          color="#3E433C"
        >
          {description}
        </Text>

        <Stack gap="40px">
          {data?.countDown !== false && (
            <CountdownTimer
              template={data?.templateId || template}
              eventDate={data?.eventDate}
              r={r}
            />
          )}

          <Text
            textAlign="center"
            color="#3E433C"
            fontSize={r("14px", "18px")}
            lineHeight={"24px"}
          >
            {t("classic_journey")}
          </Text>
        </Stack>
      </VStack>

      {/* ————— TIMING ————— */}
      {timeline?.length > 0 && (
        <Flex
          bg="var(--c-secondary)"
          color="white"
          direction={isMobile ? "column" : "row"}
          align={isMobile ? "stretch" : "center"}
          gap={"64px"}
          flexDirection={r("column-reverse", "row")}
        >
          <VStack
            align={r("center", "flex-start")}
            gap="40px"
            flex="1"
            p={r("0 24px 64px 24px", "0 0 0 160px")}
          >
            <Text
              fontWeight="800"
              fontSize={r("24px", "34px")}
              lineHeight={r("24px", "50px")}
              textTransform="uppercase"
              color="#FFFFFF"
            >
              {t("classic_timing")}
            </Text>

            <Stack gap={r("32px", "40px")} minW={"361px"}>
              {timeline?.map((item, i) => (
                <Flex
                  key={i}
                  justify={"space-between"}
                  align={"center"}
                  gap="24px"
                  flexDirection={r("column", "row")}
                >
                  <VStack
                    align={r("center", "flex-start")}
                    gap={r("16px", "24px")}
                    minW="160px"
                  >
                    <Text
                      fontSize={r("28px", "34px")}
                      fontWeight="800"
                      lineHeight={"24px"}
                    >
                      {item.time}
                    </Text>
                    <Text
                      fontSize={r("20px", "22px")}
                      fontWeight="500"
                      lineHeight={r("24px", "34px")}
                      textTransform="uppercase"
                      color="#FFFFFF"
                    >
                      {pickLang(item.venueName, language) || item.venueName}
                    </Text>
                  </VStack>
                  {item.venueLocation && (
                    <Button
                      as={Link}
                      href={item.venueLocation}
                      target="_blank"
                      color="#FFFFFF"
                      fontSize="14px"
                      bg="var(--c-primary)"
                      borderRadius="10px"
                      h="44px"
                    >
                      <Icon>{map.icon}</Icon> {t("classic_map")}
                    </Button>
                  )}
                </Flex>
              ))}
            </Stack>
          </VStack>

          <Box
            flex="0 0 auto"
            w={r("100%", "652px")}
            h={r("236px", "972px")}
            borderRadius={r("0px 0px 470px 470px", "470px 0 0 470px")}
            overflow="hidden"
            bgImage={`url(${coupleImage})`}
            bgSize="cover"
            bgRepeat={"no-repeat"}
            bgPos="center"
          />
        </Flex>
      )}

      {/* ————— RSVP ————— */}
      {(!isLive || data?.confirmationEnabled) && (
        <Rsvp
          r={r}
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
      {(!isLive || data?.dressCode) && (
        <VStack
          bg="var(--c-secondary)"
          color="white"
          py={"60px"}
          px={r("24px", "131px")}
          gap={r("32px", "60px")}
          textAlign="center"
          bgImage={`linear-gradient(var(--c-secondary)), url(${dresscodeBg.src})`}
          bgSize="cover"
          bgPos="center"
          bgBlendMode={"overlay"}
        >
          <Stack gap={r("16px", "32px")}>
            <Text
              fontSize={r("24px", "34px")}
              lineHeight="24px"
              fontWeight="800"
              color="#FFFFFF"
              textTransform={"uppercase"}
            >
              {t("dresscode")}
            </Text>
            <Text
              fontSize={r("14px", "18px")}
              lineHeight="28px"
              color="#FFFFFF"
              maxW="720px"
            >
              {dressCodeDesc}
            </Text>
          </Stack>

          <Stack gap={"32px"}>
            <VStack
              gap={r("32px", "20px")}
              flexDirection={r("column-reverse", "column")}
            >
              {dressCodeColors && (
                <HStack gap="0">
                  <For each={dressCodeColors}>
                    {(item, index) => (
                      <Box
                        key={index}
                        w="58px"
                        h="58px"
                        borderRadius="50%"
                        ml="-16px"
                        bg={item}
                        border="1px solid #ffffff"
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
      )}

      {/* ————— Wedding Gallery ————— */}
      {(!isLive || data?.albumLink) && (
        <VStack
          py={r("64px", "100px")}
          gap="24px"
          textAlign="center"
          position="relative"
          width={"fit-content"}
          margin={"0 auto"}
          px={r("44px", "0")}
        >
          <>
            <Icon
              position="absolute"
              left={r("4%", "-30%")}
              top="50%"
              transform="translateY(-50%)"
              color="var(--c-secondary)"
            >
              {leftBrace.icon}
            </Icon>
            <Icon
              position="absolute"
              right={r("4%", "-30%")}
              top="50%"
              transform="translateY(-50%)"
              color="var(--c-secondary)"
            >
              {rightBrace.icon}
            </Icon>
          </>
          <Text
            fontSize="12px"
            lineHeight="22px"
            color="var(--c-secondary)"
            textTransform="uppercase"
          >
            {t("classic_look")}
          </Text>
          <Text
            fontSize={r("24px", "34px")}
            lineHeight={r("32px", "48px")}
            fontWeight="500"
            color="var(--c-secondary)"
          >
            {t("classic_gallery")}
          </Text>
          <Text
            fontSize={r("14px", "16px")}
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
      {(!isLive || data?.ourStory) && (
        <Box
          position="relative"
          w="100%"
          py={r("64px", "112px")}
          px={r("24px", "unset")}
          bgImage={`linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.82)), url(${storyBg.src})`}
          bgSize="cover"
          bgRepeat={"no-repeat"}
          bgPos="center"
        >
          <VStack gap={r("16px", "40px")} textAlign="center">
            <Text
              color="var(--c-secondary)"
              fontSize={r("24px", "34px")}
              lineHeight={r("24px", "48px")}
              fontWeight="500"
            >
              {t("classic_story")}
            </Text>
            <Text
              maxW="877px"
              fontSize={r("14px", "18px")}
              lineHeight="28px"
              color="var(--c-secondary)"
              whiteSpace="pre-line"
              fontWeight="400"
            >
              {storyText}
            </Text>
          </VStack>
        </Box>
      )}

      {/* ————— PHOTO STRIP ————— */}
      {(!isLive || data?.ourStory) && (
        <Flex
          direction={r("column", "row")}
          w="100%"
          my={r("64px", "100px")}
          px={r("24px", "65px")}
          gap={r("15px", "10px")}
          align="center"
          justify={"center"}
        >
          {gallery.map((src, i) => (
            <Box
              key={i}
              w={r("100%", "320px")}
              h={r("240px", "320px")}
              bgImage={`url(${src})`}
              bgSize="cover"
              bgPos="center"
              filter={i === 1 || i === 3 ? "grayscale(100%)" : "none"}
              cursor="zoom-in"
              onClick={() => openFullscreen(i)}
            />
          ))}
        </Flex>
      )}

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
      {(!isLive || data?.connectWithUs) && (
        <Flex
          pb={r("56px", "100px")}
          align={"center"}
          justify={"center"}
          gap={r("20px", "90px")}
          direction={r("column", "row")}
        >
          <Text
            fontSize={r("24px", "30px")}
            lineHeight="24px"
            fontWeight="800"
            textTransform={"uppercase"}
            color="var(--c-secondary)"
          >
            {t("classic_contact")}
          </Text>
          <Text
            fontSize={r("16px", "24px")}
            lineHeight="24px"
            fontWeight={r("400", "800")}
            color="var(--c-secondary)"
          >
            {name}
          </Text>
          {phone && (
            <Text
              as="a"
              href={`tel:${phone}`}
              fontSize={r("16px", "24px")}
              lineHeight="24px"
              fontWeight={r("400", "800")}
              color="var(--c-secondary)"
            >
              {phone}
            </Text>
          )}
          {email && (
            <Text
              as="a"
              href={`mailto:${email}`}
              fontSize={r("16px", "24px")}
              lineHeight="24px"
              fontWeight={r("400", "800")}
              color="var(--c-secondary)"
            >
              {email}
            </Text>
          )}
        </Flex>
      )}
    </Box>
  );
}