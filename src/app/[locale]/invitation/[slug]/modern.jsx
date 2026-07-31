"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useMutateAuthTanstack } from "@/hooks/useTanstack";
import { formatDateByLang, paletteToVars, formatTime, sortByTime } from "@/utils/formatters";
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

export default function Modern({
  viewport = "pc",
  template,
  palette,
  data,
  live,
}) {
  const { slug } = useParams();

  const t = useTranslations();
  const language = useLocale();
  const isLive = Boolean(slug) || live;
  const isRealMobile = useBreakpointValue({ base: true, lg: false });
  const isMobile = isLive
    ? Boolean(isRealMobile)
    : viewport === "mobile" || viewport === "laptop";
  // const isMobile =
  //   Boolean(isRealMobile) || viewport === "mobile" || viewport === "laptop";
  // const isMobile = viewport === "mobile" || viewport === "laptop";
  const r = (base, lg) => (isMobile ? base : lg);
  const swiperPadding = r("40px 0", "100px 0");
  const slideWidth = r("283px", "448px");
  const slideHeight = r("350px", "556px");

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

  const heroImage = data?.mainImages?.[0] || mainBg.src;
  const storyImgOne = data?.ourStory?.photoUrls?.[0] || (!isLive && story1.src);
  const storyImgTwo = data?.ourStory?.photoUrls?.[1] || (!isLive && story2.src);
  const slideImages = data?.mainImages || (!isLive && MODERN_FALLBACKS);
  const initialSlide =
    slideImages?.length > 2 ? Math.floor(slideImages.length / 2) : 0;

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

  return (
    <Box
      data-viewport={viewport}
      style={vars}
      bg="#F3F3F3"
      color="#111"
      overflow="hidden"
    >
      {locales && <Language locales={locales} />}

      {/* ————— HERO ————— */}
      <Box
        position="relative"
        w="100%"
        h={r("565px", "650px")}
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
          textAlign="center"
        >
          <Text
            fontFamily="var(--font-allegrou)"
            fontSize={r("54px", "123px")}
            lineHeight="40px"
            fontWeight="400"
            color="#323232"
          >
            {title}
          </Text>
        </VStack>
      </Box>

      {/* ————— DATE ————— */}
      <Flex
        gap={r("8px", "12px")}
        align="baseline"
        justify="center"
        py={r("50px", "100px")}
      >
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
          color="#323232"
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
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
          }}
        />
        <VStack
          align={"center"}
          justify={"center"}
          minH={r("1017px", "1931px")}
          h="100%"
          pt={r("150px", "0")}
          pb={r("120px", "0")}
        >
          <Stack
            position={"relative"}
            w="100%"
            align={"center"}
            justify={"center"}
            gap={r("32px", "60px")}
            px={r("30px", "0")}
          >
            <Icon
              color="var(--c-accent)"
              position="absolute"
              left={r("11%", "8%")}
              top="20%"
              w={r("34px", "108px")}
              h={r("77px", "252px")}
            >
              {guestLeft.icon}
            </Icon>
            <Icon
              color="var(--c-accent)"
              position="absolute"
              right={r("11%", "8%")}
              top="20%"
              w={r("34px", "108px")}
              h={r("77px", "252px")}
            >
              {guestRight.icon}
            </Icon>
            <Text
              fontFamily="var(--font-allegrou)"
              fontWeight="400"
              fontSize={r("46px", "123px")}
              lineHeight={r("1.3", "1.1")}
              color="#F3F3F3"
              textAlign={"center"}
            >
              {t("dear_guest")}
            </Text>
            <Text
              textAlign="center"
              fontSize={r("14px", "20px")}
              lineHeight="28px"
              fontWeight="400"
              color="#F3F3F3"
              w={r("70%", "60%")}
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
            {data?.countDown !== false && (
              <CountdownTimer
                template={data?.templateId || template}
                eventDate={data?.eventDate}
                r={r}
              />
            )}
            {/* </VStack> */}
            <Text
              fontWeight="500"
              fontSize={r("14px", "20px")}
              lineHeight={"28px"}
              color="#F3F3F3"
              textAlign="center"
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
              speed={500}
              spaceBetween={0}
              pagination={true}
              initialSlide={initialSlide}
              modules={[EffectCoverflow, Pagination]}
              coverflowEffect={{
                rotate: 18,
                stretch: r(0, 60),
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
        {timeline?.length > 0 && (
          <Center pt="90px" position="relative">
            <Icon
              color="var(--c-accent)"
              position="absolute"
              left="5%"
              top={r("80%", "50%")}
              transform="translateY(-30%)"
              w={r("55px", "243px")}
              h={r("77px", "340px")}
            >
              {timingLeft.icon}
            </Icon>
            <VStack
              gap={r("40px", "60px")}
              px="160px"
              align={"center"}
              justify={"center"}
            >
              <Text
                fontWeight="800"
                fontSize={r("24px", "34px")}
                lineHeight="24px"
                textTransform="uppercase"
                color="#323232"
                textAlign="center"
              >
                {t("classic_timing")}
              </Text>
              <Stack
                gap={r("24px", "40px")}
                align={"center"}
                justify={"center"}
              >
                {sortByTime(timeline)?.map((item, i) => (
                  <Flex
                    key={i}
                    justify={"space-between"}
                    align={"center"}
                    gap="20px"
                  >
                    <VStack gap={r("16px", "24px")} minW="160px">
                      <Text
                        fontSize={r("24px", "34px")}
                        fontWeight="800"
                        lineHeight={"24px"}
                        color="#323232"
                      >
                        {formatTime(item.time)}
                      </Text>
                      <Text
                        fontSize={isMobile ? "15px" : "24px"}
                        fontWeight="500"
                        lineHeight={"24px"}
                        textTransform="uppercase"
                        color="#323232"
                        textAlign="center"
                      >
                        {pickLang(item.venueName, language) || item.venueName}
                      </Text>
                      {item.venueLocation && (
                        <ChakraLink
                          as={Link}
                          href={item.venueLocation}
                          target="_blank"
                          fontSize="14px"
                          color="var(--c-secondary)"
                          textDecoration="underline"
                        >
                          {t("classic_map")}
                        </ChakraLink>
                      )}
                    </VStack>
                  </Flex>
                ))}
              </Stack>
            </VStack>
            <Icon
              color="var(--c-accent)"
              position="absolute"
              right="5%"
              top={r("40%", "10%")}
              transform="translateY(-10%)"
              w={r("55px", "243px")}
              h={r("77px", "340px")}
            >
              {timingRight.icon}
            </Icon>
          </Center>
        )}

        {/* ————— RSVP ————— */}
        {(!isLive || data?.confirmationEnabled) && (
          <Box position="relative">
            {!isRealMobile && (
              <Icon
                color="var(--c-accent)"
                position="absolute"
                left="10%"
                bottom="10%"
              >
                {rsvpRight.icon}
              </Icon>
            )}
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
            <Icon
              color="var(--c-accent)"
              position="absolute"
              right="15%"
              top="20%"
            >
              {rsvpLeft.icon}
            </Icon>
          </Box>
        )}

        {/* ————— DRESS CODE ————— */}
        {(!isLive || data?.dressCode) && (
          <Center
            position="relative"
            mt={!data?.confirmationEnabled && "100px"}
            pb="50px"
            px={r("30px", "0")}
          >
            <Icon
              color="var(--c-accent)"
              position="absolute"
              left="15%"
              top={r("-20%", "20%")}
            >
              {rsvpLeft.icon}
            </Icon>
            <Stack gap="32px">
              <Stack
                gap={r("16px", "32px")}
                px={r("0px", "102px")}
                position={"relative"}
                align={"center"}
                justify={"center"}
              >
                <Text
                  fontSize={r("24px", "34px")}
                  lineHeight="24px"
                  fontWeight="800"
                  color="#323232"
                  textTransform={"uppercase"}
                  textAlign={"center"}
                >
                  {t("dresscode")}
                </Text>
                <Text
                  w="70%"
                  textAlign={"center"}
                  fontSize={r("14px", "18px")}
                  lineHeight="28px"
                  color="var(--c-secondary)"
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
                    color="var(--c-primary)"
                  >
                    {dressCodeName}
                  </Text>
                  {dressCodeAbout && (
                    <Text
                      fontSize="16px"
                      fontWeight="400"
                      lineHeight={"22px"}
                      color="var(--c-secondary)"
                      textAlign={"center"}
                    >
                      {dressCodeAbout}
                    </Text>
                  )}
                </VStack>
              </Stack>
            </Stack>
            {!isMobile && (
              <Icon
                color="var(--c-accent)"
                position="absolute"
                right="10%"
                bottom="10%"
              >
                {rsvpRight.icon}
              </Icon>
            )}
          </Center>
        )}

        {/* ————— WEDDING GALLERY ————— */}
        {(!isLive || data?.albumLink) && (
          <Center p="50px 0 50px 0">
            <Stack
              bg="var(--c-accent)"
              minW={r("100%", "748px")}
              w="fit-content"
              align={"center"}
              justify={"center"}
              gap={r("12px", "16px")}
              borderRadius={r("0", "220px")}
              position="relative"
              py="32px"
              px={r("30px", "0")}
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
                textAlign={"center"}
                fontSize={r("24px", "34px")}
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
                my="20px"
                boxShadow="0px 4px 4px 0px #00000040 inset"
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

        {/* ————— OUR LOVE STORY ————— */}
        {(!isLive || data?.ourStory) && (
          <Flex
            w="90%"
            justify={"space-between"}
            align={"center"}
            direction={r("column", "row")}
            gap={r("40px", "0")}
            margin="0 auto"
            pt={r("10px", "50px")}
          >
            <VStack gap={r("16px", "40px")} order={r(1, 2)}>
              <Text
                textAlign="center"
                color="#323232"
                fontSize={r("24px", "34px")}
                lineHeight="48px"
                fontWeight="800"
              >
                {t("classic_story")}
              </Text>
              <Text
                textAlign="center"
                fontSize={isMobile ? "15px" : "18px"}
                lineHeight="28px"
                color="var(--c-secondary)"
                whiteSpace="pre-line"
                fontWeight="400"
              >
                {storyText}
              </Text>
            </VStack>
            {storyImgOne && (
              <Image
                order={r(2, 1)}
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
            )}
            {storyImgTwo && (
              <Image
                order={r(1, 2)}
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
            )}
          </Flex>
        )}

        {/* ————— CONTACT ————— */}
        {(!isLive || data?.connectWithUs) && (
          <Stack
            pt="78px"
            pb="78px"
            align={"center"}
            justify={"center"}
            gap={r("24px", "32px")}
          >
            <Text
              fontSize={r("24px", "34px")}
              lineHeight="24px"
              fontWeight="800"
              textTransform={"uppercase"}
              color="#323232"
            >
              {t("classic_contact")}
            </Text>
            <Text
              fontSize="18px"
              lineHeight="24px"
              fontWeight="400"
              color="var(--c-secondary)"
            >
              {name}
            </Text>
            {phone && (
              <Text
                as="a"
                href={`tel:${phone}`}
                fontSize="18px"
                lineHeight="24px"
                fontWeight="400"
                color="var(--c-secondary)"
              >
                {phone}
              </Text>
            )}
            {email && (
              <Text
                as="a"
                href={`mailto:${email}`}
                fontSize="18px"
                lineHeight="24px"
                fontWeight="400"
                color="var(--c-secondary)"
              >
                {email}
              </Text>
            )}
          </Stack>
        )}
      </Box>
    </Box>
  );
}
