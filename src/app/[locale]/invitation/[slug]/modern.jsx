"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useMutateAuthTanstack } from "@/hooks/useTanstack";
import { formatDateByLang, paletteToVars } from "@/utils/formatters";
import { Language } from "@/components/invitation/language";
import { getInvitationForm, pickLang } from "@/utils/helpers";
import {
  Box,
  Button,
  Center,
  createListCollection,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
  Link as ChakraLink,
  Image,
  For,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  timingLeft,
  timingRight,
  rsvpLeft,
  rsvpRight,
  guestRight,
  guestLeft,
  weddingImg,
  view,
} from "@/assets/svgs";
import { CountdownTimer } from "@/components/invitation/countdownTimer";
import mainBg from "@/assets/imgs/invitations/modern/main_bg.png";
import borderBg from "@/assets/imgs/invitations/modern/border_bg.png";
import sliderBg from "@/assets/imgs/invitations/modern/slider_bg.png";
import story1 from "@/assets/imgs/invitations/modern/story_1.jpg";
import story2 from "@/assets/imgs/invitations/modern/story_2.jpg";
import story1Bg from "@/assets/imgs/invitations/modern/story_1_bg.png";
import story2Bg from "@/assets/imgs/invitations/modern/story_2_bg.png";
import {
  GUEST_COUNT,
  MODERN_FALLBACKS,
  FALLBACK,
  TIMELINE,
} from "@/utils/constants";
import { Link } from "@/i18n/routing";
import { error, success } from "@/components/ui/alerts";
import "react-image-gallery/styles/image-gallery.css";
import { Rsvp } from "@/components/invitation/rsvp";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Modern({ viewport = "pc", palette, data, live }) {
  const { slug } = useParams();

  const t = useTranslations();
  const language = useLocale();
  // adaptive
  const isLive = Boolean(slug) || live;
  // TODO: if live is undefiend but isLive is true its invitation page 
  console.log(live);
  console.log(isLive);
  // const isMobile = viewport === "mobile" || viewport === "laptop";
  const isRealMobile = useBreakpointValue({ base: true, lg: false });
  const isMobile = isLive
    ? Boolean(isRealMobile)
    : viewport === "mobile" || viewport === "laptop";
  const r = (base, lg) => (isMobile ? base : lg);
  const swiperPadding = r("40px 0", "100px 0");
  const slideWidth = r("283px", "448px");
  const slideHeight = r("350px", "556px");
  // const swiperPadding = useBreakpointValue({ base: "40px 0", lg: "100px 0" });
  // const slideWidth = useBreakpointValue({ base: "283px", lg: "448px" });
  // const slideHeight = useBreakpointValue({ base: "350px", lg: "556px" });
  //

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

  const { year, day, monthName, dayName } = formatDateByLang(
    data?.eventDate,
    language,
  );

  const [form, setForm] = useState(getInvitationForm(id));
  const [guests, setGuests] = useState([`${t("classic_count")}`]);

  const initialSlide = Math.floor((data?.mainImages?.length || 0) / 2);
  const heroImage = data?.mainImages?.[0] || mainBg.src;
  const storyImgOne = data?.ourStory?.photoUrls?.[0] || (!isLive && story1.src);
  const storyImgTwo = data?.ourStory?.photoUrls?.[1] || (!isLive && story2.src);
  const slideImages = data?.mainImages || (!isLive && MODERN_FALLBACKS);

  const title =
    pickLang(data?.title, language) || (!isLive && "Henry & Mariam");
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
      bg="#F3F3F3"
      color="#111"
      overflow="hidden"
    // position={"relative"}
    >
      {locales && <Language locales={locales} />}

      {/* ————— HERO ————— */}
      <Box
        position="relative"
        w="100%"
        h={r("565px", "650px")}
        // bgImage={`linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.45) 100%), url(${heroImage})`}
        bgImage={`linear-gradient(180deg, rgba(0,0,0,0.05) 50%, #F3F3F3 99.43%), url(${heroImage})`}
        bgSize="cover"
        bgPos="center"
      >
        <VStack
          position="absolute"
          bottom={r("40px", "50px")}
          left="0"
          right="0"
          gap={r("8px", "114px")}
          // color="white"
          textAlign="center"
        >
          <Text
            fontFamily="var(--font-allegrou)"
            // fontFamily={sosBanff.style.fontFamily}
            fontSize={r("54px", "123px")}
            lineHeight="24px"
            fontWeight="400"
            color="#323232"
          >
            {title}
          </Text>
        </VStack>
      </Box>

      {/* ————— DATE ————— */}
      <Flex gap="12px" align="baseline" justify="center" py="100px">
        <Text
          textAlign="center"
          fontSize={r("18px", "24px")}
          lineHeight="24px"
          fontWeight="600"
          minW={r("142px", "177px")}
          border="2px solid"
          borderBottomColor="#323232"
          borderTopColor="#323232"
          borderLeftColor="transparent"
          borderRightColor="transparent"
          py="12px"
          color="#323232" // TODO: add this for every text
        >
          {dayName}
        </Text>
        <Stack gap="12px" align={"center"}>
          <Text
            fontSize={r("42px", "50px")}
            lineHeight="24px"
            fontWeight="1000"
            color="var(--c-accent)"
          >
            {day}
          </Text>
          <Text fontSize={"16px"} lineHeight="25px" fontWeight="800">
            {year}
          </Text>
        </Stack>
        <Text
          textAlign="center"
          fontSize={r("18px", "24px")}
          lineHeight="24px"
          fontWeight="600"
          minW={r("142px", "177px")}
          border="2px solid"
          borderBottomColor="#323232"
          borderTopColor="#323232"
          borderLeftColor="transparent"
          borderRightColor="transparent"
          py="12px"
        >
          {monthName}
        </Text>
      </Flex>

      {/* ————— MAIN ————— */}
      <Box position="relative" minH={r("1017px", "1931px")} w="100%">
        <Box
          position="absolute"
          inset="0"
          bg="var(--c-secondary)"
          style={{
            WebkitMaskImage: `url(${sliderBg.src})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskImage: `url(${sliderBg.src})`,
            maskRepeat: "no-repeat",
            maskPosition: "center",
            // WebkitMaskSize: "contain",
            // maskSize: "contain",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
          }}
        />
        <VStack
          // position={"relative"}
          align={"center"}
          justify={"center"}
          minH={r("1017px", "1931px")}
          h="100%"
          pt="100px"
        >
          <Stack
            position={"relative"}
            w="100%"
            align={"center"}
            justify={"center"}
            gap={r("32px", "60px")}
          >
            <Icon
              color="var(--c-accent)"
              position="absolute"
              left="12%"
              top="0%"
              w={r("108px", "34px")}
              h={r("77px", "252px")}
            >
              {guestLeft.icon}
            </Icon>
            <Icon
              color="var(--c-accent)"
              position="absolute"
              right="12%"
              top="0%"
              w={r("108px", "34px")}
              h={r("77px", "252px")}
            >
              {guestRight.icon}
            </Icon>
            <Text
              fontFamily="var(--font-allegrou)"
              fontWeight="400"
              fontSize={r("64px", "123px")}
              lineHeight="1.1"
              color="#F3F3F3"
            >
              {t("dear_guest")}
            </Text>
            <Text
              // maxW="942px"
              textAlign="center"
              // fontSize={isMobile ? "15px" : "20px"}
              fontSize={r("14px", "20px")}
              lineHeight="28px"
              fontWeight="400"
              color="#F3F3F3"
              w="60%"
            >
              {description}
            </Text>
            <Text
              textAlign="center"
              fontWeight="500"
              fontSize={r("14px", "20px")}
              lineHeight={"28px"}
              color="#F3F3F3"
            >
              {t("classic_journey")}
            </Text>
            {/* ————— COUNTDOWN ————— */}
            {/* <VStack gap={isMobile ? "24px" : "100px"}> */}
            {data?.countDown !== false && (
              <CountdownTimer
                template={data?.templateId}
                eventDate={data?.eventDate}
                r={r}
              />
            )}
            {/* </VStack> */}
            <Text
              fontWeight="500"
              fontSize={isMobile ? "15px" : "20px"}
              lineHeight={"28px"}
              color="#F3F3F3"
            >
              {t("rustic_journey")}
            </Text>
          </Stack>

          <Box w="100%" display="flex" justifyContent="center">
            <Swiper
              style={{ padding: swiperPadding }}
              effect={"coverflow"}
              slidesPerView={"auto"}
              centeredSlides={true}
              grabCursor={true}
              // watchOverflow={false}
              speed={500}
              spaceBetween={0}
              pagination={true}
              initialSlide={initialSlide}
              modules={[EffectCoverflow, Pagination]}
              coverflowEffect={{
                rotate: 18,
                stretch: 60,
                depth: 120,
                modifier: 1,
                slideShadows: false,
              }}
            >
              {slideImages?.map((el, index) => {
                return (
                  <SwiperSlide key={index} style={{ width: slideWidth }}>
                    <Stack
                      cursor={"pointer"}
                      w={slideWidth}
                      h={slideHeight}
                      alignItems={"center"}
                    >
                      <Image
                        src={el}
                        w={slideWidth}
                        h={slideHeight}
                        objectFit="cover"
                        transition="all 0.3s ease"
                        borderRadius={"10px"}
                      />
                    </Stack>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </VStack>
      </Box>

      <Box
        w="100%"
        bgImage={`url(${borderBg.src})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        {/* ————— TIMING ————— */}
        <Center pt="90px" position="relative">
          <Icon
            color="var(--c-accent)"
            position="absolute"
            left="5%"
            top="30%"
            transform="translateY(-30%)"
          >
            {timingLeft.icon}
          </Icon>
          <VStack gap="60px" px="160px" align={"center"} justify={"center"}>
            <Text
              fontWeight="800"
              fontSize={isMobile ? "22px" : "34px"}
              lineHeight="24px"
              textTransform="uppercase"
              color="var(--c-primary)"
            // dangerouslySetInnerHTML={{
            //   __html: t("classic_timing").replace(/\n/g, "<br />"),
            // }}
            >
              {t("classic_timing")}
            </Text>
            <Stack gap="40px" align={"center"} justify={"center"}>
              {timeline?.map((item, i) => (
                <Flex
                  key={i}
                  justify={"space-between"}
                  align={"center"}
                  gap="20px"
                >
                  <VStack gap="24px" minW="160px">
                    <Text
                      fontSize={isMobile ? "20px" : "34px"}
                      fontWeight="800"
                      lineHeight={"24px"}
                    >
                      {item.time || "00:00"}
                    </Text>
                    <Text
                      fontSize={isMobile ? "15px" : "24px"}
                      fontWeight="500"
                      lineHeight={"24px"}
                      textTransform="uppercase"
                      color="var(--c-primary)"
                    >
                      {pickLang(item.venueName, language) || item.venueName}
                    </Text>
                    {item.venueLocation && <ChakraLink
                      as={Link}
                      href={item.venueLocation}
                      target="_blank"
                      fontSize="14px"
                      color="var(--c-primary)"
                      textDecoration="underline"
                    >
                      {t("classic_map")}
                    </ChakraLink>}
                  </VStack>
                </Flex>
              ))}
            </Stack>
          </VStack>
          <Icon
            color="var(--c-accent)"
            position="absolute"
            right="5%"
            top="10%"
            transform="translateY(-10%)"
          >
            {timingRight.icon}
          </Icon>
        </Center>

        {/* ————— RSVP ————— */}
        {data?.confirmationEnabled && (
          <Box position="relative">
            <Icon
              color="var(--c-accent)"
              position="absolute"
              left="10%"
              bottom="10%"
            // transform="translateY(-10%)"
            >
              {rsvpRight.icon}
            </Icon>
            <Rsvp
              isModern={true}
              isMobile={isMobile}
              color="var(--c-secondary)" // needs checking
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
            <Icon
              color="var(--c-accent)"
              position="absolute"
              right="15%"
              top="20%"
            // transform="translateY(-10%)"
            >
              {rsvpLeft.icon}
            </Icon>
          </Box>
        )}

        {/* ————— DRESS CODE ————— */}
        <Center position="relative" mt={!data?.confirmationEnabled && "100px"}>
          <Icon
            color="var(--c-accent)"
            position="absolute"
            left="15%"
            top="20%"
          // transform="translateY(-10%)"
          >
            {rsvpLeft.icon}
          </Icon>
          <Stack gap="32px">
            <Stack
              gap="32px"
              px="102px"
              position={"relative"}
              align={"center"}
              justify={"center"}
            >
              <Text
                fontSize={isMobile ? "20px" : "34px"}
                lineHeight="24px"
                fontWeight="800"
                color="var(--c-primary)"
                textTransform={"uppercase"}
                textAlign={"center"}
              >
                {t("dresscode")}
              </Text>
              <Text
                w="70%"
                textAlign={"center"}
                fontSize={isMobile ? "13px" : "18px"}
                lineHeight="28px"
                color="#6F786C"
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
                  color="var(--c-primary)"
                >
                  {dressCodeName}
                </Text>
                {dressCodeAbout && (
                  <Text
                    fontSize="16px"
                    fontWeight="400"
                    lineHeight={"22px"}
                    color="#6B7280"
                  >
                    {dressCodeAbout}
                  </Text>
                )}
              </VStack>
            </Stack>
          </Stack>
          <Icon
            color="var(--c-accent)"
            position="absolute"
            right="10%"
            bottom="10%"
          // transform="translateY(-10%)"
          >
            {rsvpRight.icon}
          </Icon>
        </Center>

        {/* ————— WEDDING GALLERY ————— */}
        {data?.albumLink && (
          <Center py="100px">
            <Stack
              bg="var(--c-accent)"
              minW="748px"
              w="fit-content"
              align={"center"}
              justify={"center"}
              gap="16px"
              borderRadius="220px"
              position="relative"
              py="32px"
            >
              <Icon
                position="absolute"
                top="50%"
                right="10%"
                transform="translateY(-50%)"
                color="var(--c-primary)"
              >
                {weddingImg.icon}
              </Icon>
              <Text
                fontSize={"12px"}
                fontWeight={400}
                lineHeight={"22px"}
                color="#FFFFFF"
              >
                {t("classic_look")}
              </Text>
              <Text
                w="560px"
                textAlign={"center"}
                fontSize={"34px"}
                fontWeight={500}
                lineHeight={"48px"}
                color="#FFFFFF"
              >
                {t("classic_gallery")}
              </Text>
              <Button
                variant={"plain"}
                p="23px"
                bg="#3E433C"
                borderRadius={"100%"}
                w="64px"
                h="64px"
                mt="20px"
              >
                <Icon>{view.icon}</Icon>
              </Button>
              <Text
                fontSize="14px"
                fontWeight="400"
                lineHeight="22px"
                color="#FFFFFF"
                maxW="440px"
                textAlign={"center"}
                dangerouslySetInnerHTML={{
                  __html: t("classic_soon").replace(/\n/g, "<br />"),
                }}
              />
            </Stack>
          </Center>
        )}

        {/* // TODO: connect with gallery */}
        {/* ————— OUR LOVE STORY ————— */}
        <Center>
          <Flex w="90%" justify={"space-between"} align={"center"}>
            <Image
              src={storyImgOne}
              alt="story 1"
              minW="260px"
              maxW="260px"
              h="260px"
              objectFit="cover"
              style={{
                WebkitMaskImage: `url(${story1Bg.src})`,
                WebkitMaskSize: "100% 100%",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskImage: `url(${story1Bg.src})`,
                maskSize: "100% 100%",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />
            <VStack gap="40px">
              <Text
                textAlign="center"
                color="var(--c-primary)"
                fontSize={isMobile ? "20px" : "34px"}
                lineHeight="48px"
                fontWeight="800"
              >
                {t("classic_story")}
              </Text>
              <Text
                // maxW="877px"
                // w="50%" //
                textAlign="center"
                fontSize={isMobile ? "15px" : "18px"}
                lineHeight="28px"
                color="var(--c-primary)"
                whiteSpace="pre-line"
                fontWeight="400"
              >
                {storyText}
              </Text>
            </VStack>
            <Image
              src={storyImgTwo}
              alt="story 2"
              minW="260px"
              maxW="260px"
              h="260px"
              objectFit="cover"
              style={{
                WebkitMaskImage: `url(${story2Bg.src})`,
                WebkitMaskSize: "100% 100%",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",

                maskImage: `url(${story2Bg.src})`,
                maskSize: "100% 100%",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />
          </Flex>
        </Center>
        {/* ————— CONTACT ————— */}
        <Stack
          // bg="var(--c-primary)"
          // color="white"
          // py={isMobile ? "28px" : "40px"}
          pt="78px"
          pb="78px"
          align={"center"}
          justify={"center"}
          gap="32px"
        >
          <Text
            fontSize="34px"
            lineHeight="24px"
            fontWeight="800"
            textTransform={"uppercase"}
            color="var(--c-primary)"
          >
            {t("classic_contact")}
          </Text>
          <Text
            fontSize="18px"
            lineHeight="24px"
            fontWeight="400"
            color="var(--c-primary)"
          >
            {name}
          </Text>
          <Text
            as="a"
            href={`tel:${phone}`}
            fontSize="18px"
            lineHeight="24px"
            fontWeight="400"
            color="var(--c-primary)"
          >
            {phone}
          </Text>
          <Text
            as="a"
            href={`mailto:${email}`}
            fontSize="18px"
            lineHeight="24px"
            fontWeight="400"
            color="var(--c-primary)"
          >
            {email}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}
