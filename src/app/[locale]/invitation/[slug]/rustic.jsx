"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useMutateAuthTanstack } from "@/hooks/useTanstack";
import { formatRusticTitle, paletteToVars } from "@/utils/formatters";
import { Language } from "@/components/invitation/language";
import { getInvitationForm, pickLang } from "@/utils/helpers";
import {
  Box,
  Button,
  Center,
  Container,
  createListCollection,
  Flex,
  For,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
  Link as ChakraLink,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  bottle,
  bottomPin,
  heart,
  heartsLeft,
  heartsRight,
  topPin,
  view,
} from "@/assets/svgs";
import { CountdownTimer } from "@/components/invitation/countdownTimer";
import img from "@/assets/imgs/invitations/rustic/main_img.png";
import loveBg from "@/assets/imgs/invitations/rustic/love_bg.png";
import ring from "@/assets/imgs/invitations/rustic/ring.png";
import mainImagesBg from "@/assets/imgs/invitations/rustic/main_images_bg.png";
import mainImagesBgMobile from "@/assets/imgs/invitations/rustic/main_images_bg_mobile.png";
import coupleBg from "@/assets/imgs/invitations/rustic/couple_bg.png";
import coupleBgMobile from "@/assets/imgs/invitations/rustic/couple_bg_mobile.png";
import img1 from "@/assets/imgs/invitations/rustic/img_1.png";
import img2 from "@/assets/imgs/invitations/rustic/img_2.png";
import img3 from "@/assets/imgs/invitations/rustic/img_3.jpg";
import img4 from "@/assets/imgs/invitations/rustic/img_4.png";
import screp from "@/assets/imgs/invitations/rustic/screp.png";
import dream from "@/assets/imgs/invitations/rustic/dream.png";
import galleryBg from "@/assets/imgs/invitations/rustic/gallery_bg.png";
import moments from "@/assets/imgs/invitations/rustic/moments.png";
import timingBg from "@/assets/imgs/invitations/rustic/test.png";
import timingImg from "@/assets/imgs/invitations/rustic/timing_img.png";
import dresscodeBg from "@/assets/imgs/invitations/rustic/dresscode_bg.png";
import dresscodeImg from "@/assets/imgs/invitations/rustic/dresscode_img.png";
import dresscodePin from "@/assets/imgs/invitations/rustic/dresscode_pin.png";
import storyBg from "@/assets/imgs/invitations/rustic/story_bg.png";
import storyBgMobile from "@/assets/imgs/invitations/rustic/story_bg_mobile.png";
import story1 from "@/assets/imgs/invitations/rustic/story_1.png";
import screp2 from "@/assets/imgs/invitations/rustic/screp_2.png";
import story2 from "@/assets/imgs/invitations/rustic/story_2.png";
import always from "@/assets/imgs/invitations/rustic/always.png";
import storyFlowers from "@/assets/imgs/invitations/rustic/story_flowers.png";
import story3 from "@/assets/imgs/invitations/rustic/story_3.png";
import storyFlower from "@/assets/imgs/invitations/rustic/story_flower.png";
import { FALLBACK, GUEST_COUNT, TIMELINE } from "@/utils/constants";
import { Link } from "@/i18n/routing";
import { error, success } from "@/components/ui/alerts";
import "react-image-gallery/styles/image-gallery.css";
import { Rsvp } from "@/components/invitation/rsvp";
import { Calendar } from "@/components/invitation/calendar";

export default function Rustic({
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
  const { name1, name2 } = formatRusticTitle(data?.title, language);
  const [form, setForm] = useState(getInvitationForm(id));
  const [guests, setGuests] = useState([`${t("classic_count")}`]);

  const heroImage = data?.mainImages?.[0] || (!isLive && img.src);
  const coupleImage1 = data?.mainImages?.[1] || (!isLive && img1.src);
  const coupleImage2 = data?.mainImages?.[2] || (!isLive && img2.src);
  const coupleImage3 = data?.mainImages?.[3] || (!isLive && img3.src);
  const coupleImage4 = data?.mainImages?.[4] || (!isLive && img4.src);
  const storyImage1 = data?.ourStory?.photoUrls?.[0] || (!isLive && story1.src);
  const storyImage2 = data?.ourStory?.photoUrls?.[1] || (!isLive && story2.src);
  const storyImage3 = data?.ourStory?.photoUrls?.[2] || (!isLive && story3.src);

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
      bg="#F6F5F4"
      color="#111"
      overflow="hidden"
    >
      {locales && <Language locales={locales} />}

      {/* ————— HERO ————— */}
      <Flex
        justify={"space-between"}
        gap={"60px"}
        p={r("0px", "75px 63px 85px 80px")}
        flexDirection={r("column", "row")}
      >
        <Stack position="relative">
          <Image
            src={heroImage}
            alt="img"
            w={r("100%", "428px")}
            h={r("525px", "427px")}
            borderRadius={r("0px", "5px")}
          />

          <Image
            position={"absolute"}
            bottom={r("-35px", "-25px")}
            left={r("50%", "auto")}
            right={r("auto", "-80px")}
            transform={r("translateX(-50%)", "none")}
            src={loveBg.src}
            alt="img"
            w={r("220px", "288px")}
            h={r("128px", "167px")}
            objectFit={"contain"}
            borderRadius={"5px"}
          />
        </Stack>

        <VStack align={r("center", "start")} gap={r("32px", "80px")}>
          <Flex
            w="100%"
            gap="70px"
            justify={r("center", "space-between")}
            align={"center"}
          >
            <Text
              fontFamily="var(--font-shk)"
              color="var(--c-primary)"
              fontSize={r("42px", "64px")}
              lineHeight="50px"
              fontWeight="400"
            >
              {t("rustic_title")}
            </Text>

            <Box
              bgColor="var(--c-accent)"
              borderRadius={"100%"}
              pb="25px"
              pl="20px"
              pr="20px"
              display={r("none", "block")}
            >
              <Icon mt={"-45px"}>{bottle.icon}</Icon>
            </Box>
          </Flex>
          <Text
            w={r("90%", "500px")}
            fontSize={r("16px", "20px")}
            lineHeight="28px"
            fontWeight="400"
            color="var(--c-primary)"
            textAlign={r("center", "unset")}
          >
            {description}
          </Text>

          <Text
            fontFamily="var(--font-shk)"
            color="var(--c-primary)"
            fontSize={r("36px", "74px")}
            fontWeight={"400"}
            lineHeight={"24px"}
          >
            {name1 + " + " + name2 + " = "}{" "}
            <Icon w={r("35px", "fit-content")}>{heart.icon}</Icon>
          </Text>
        </VStack>
      </Flex>

      {/* ————— COUNTDOWN ————— */}
      <Box
        bgColor="var(--c-accent)"
        position="relative"
        w="full"
        h={r("229px", "263px")}
        overflow="visible"
        mt={r("42px", "132px")}
        mb={r("535px", "187px")}
        p={r("0 31px 0 20px", "0 70px")}
      >
        <Image
          src={ring.src}
          alt="ring"
          position="absolute"
          top={r("25px", "-40px")}
          zIndex={1}
        />

        <Flex
          h="full"
          align="center"
          justify={"space-between"}
          direction={r("column", "row")}
        >
          <VStack
            gap={r("32px", "60px")}
            align="center"
            p={r("42px 0 28px 0", "unset")}
          >
            <Text
              color="var(--c-primary)"
              w={r("40%", "fit-content")}
              textAlign={r("center", "unset")}
            >
              {t("rustic_journey")}
            </Text>
            {data?.countDown !== false && (
              <CountdownTimer
                template={data?.templateId || template}
                eventDate={data?.eventDate}
                r={r}
              />
            )}
          </VStack>

          <VStack position="relative" alignSelf="center" flexShrink={0}>
            <Icon color="var(--c-accent)" mb={"-35px"} zIndex={2}>
              {topPin.icon}
            </Icon>
            <Calendar value={data?.eventDate} zIndex={1} />
            <Icon color="var(--c-accent)" mt={"-35px"} zIndex={2}>
              {bottomPin.icon}
            </Icon>
          </VStack>
        </Flex>
      </Box>

      {/* ————— MAIN IMAGES ————— */}
      {/* <Container pb="288px" maxW="1440px" px={{ base: "24px", md: "80px" }}> */}
      <VStack
        w="100%"
        h={r("407px", "802px")}
        bgImage={r(
          `url(${mainImagesBgMobile.src})`,
          `url(${mainImagesBg.src})`,
        )}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        justifyContent="center"
        alignItems="center"
        position="relative"
        mb={r("127px", "288px")}
      >
        <Box
          position="relative"
          w={r("165px", "491px")}
          h={r("105px", "282px")}
          zIndex={2}
        >
          <Box
            w="100%"
            h="100%"
            bgImage={r(`url(${coupleBgMobile.src})`, `url(${coupleBg.src})`)}
            bgSize="contain"
            bgPosition="center"
            bgRepeat="no-repeat"
          />
          <Text
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex={3}
            textAlign="center"
            fontFamily="var(--font-shk)"
            fontWeight="400"
            fontSize={r("14px", "32px")}
            lineHeight={r("22px", "42px")}
          >
            {t("rustic_couple")}
            <br />
            {t("rustic_happy")}
          </Text>
        </Box>
        {coupleImage1 && (
          <Box position="absolute" top="80px" left="103px" zIndex={1}>
            <Image
              position="relative"
              src={coupleImage1}
              alt="img 1"
              maxW={r("163px", "294px")}
              h={r("237px", "422px")}
              objectFit="cover"
              bg="white"
              p="12px"
            />
            <Image
              src={screp.src}
              h="63px"
              alt="screp"
              position="absolute"
              top="-35px"
              left="50%"
              transform="translateX(-50%)"
            />
          </Box>
        )}
        {coupleImage2 && (
          <Image
            position="absolute"
            top="60px"
            right="153px"
            src={coupleImage2}
            alt="img 2"
            maxW={r("172px", "328px")}
            h={r("172px", "328px")}
            objectFit="cover"
            bg="white"
            p="20px 20px 72px 20px"
            zIndex={1}
          />
        )}
        {coupleImage3 && (
          <Box
            position="absolute"
            bottom={r("-80px", "0px")}
            left={r("115px", "200px")}
            zIndex={1}
          >
            <Image
              position="relative"
              src={coupleImage3}
              alt="img 3"
              maxW={r("160px", "234px")}
              h={r("160px", "234px")}
              objectFit="cover"
              bg="white"
              p="17px 17px 53px 17px"
              transform="rotate(-10deg)"
            />
            <Image
              src={dream.src}
              h="63px"
              alt="dream"
              position="absolute"
              top={r("-30px", "-10px")}
              left={r("-10px", "-90px")}
            />
          </Box>
        )}
        {coupleImage4 && (
          <Image
            position="absolute"
            bottom="-50px"
            right="103px"
            src={coupleImage4}
            alt="img 4"
            maxW={r("154px", "259px")}
            h={r("163px", "249px")}
            objectFit="cover"
            bg="white"
            p="29px 25px 29px 25px"
            zIndex={1}
          />
        )}
      </VStack>

      {/* ————— TIMING ————— */}
      {timeline?.length > 0 && (
        <Center>
          <Stack
            bgImage={`url(${timingBg.src})`}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            minH={r("852px", "1164px")}
            h="100%"
            minW="1086px"
            align={"center"}
            justify={"center"}
            gap={r("24px", "60px")}
          >
            <Text
              fontWeight="800"
              fontSize={r("20px", "34px")}
              lineHeight="24px"
              textTransform="uppercase"
              color="var(--c-primary)"
            >
              {t("classic_timing")}
            </Text>

            <Stack gap={r("20px", "40px")} align={"center"}>
              {timeline?.map((item, i) => (
                <VStack
                  key={i}
                  align="center"
                  gap={r("12px", "24px")}
                  minW="160px"
                >
                  <Text
                    fontSize={r("24px", "34px")}
                    fontWeight="800"
                    lineHeight={"24px"}
                  >
                    {item.time || "00:00"}
                  </Text>

                  <Text
                    fontSize={r("18px", "24px")}
                    fontWeight="500"
                    lineHeight={"34px"}
                    textTransform="uppercase"
                    color="var(--c-primary)"
                  >
                    {pickLang(item.venueName, language) || item.venueName}
                  </Text>

                  {item.venueLocation && (
                    <ChakraLink
                      as={Link}
                      href={item.venueLocation}
                      target="_blank"
                      fontSize="14px"
                      color="var(--c-primary)"
                      textDecoration="underline"
                    >
                      {t("classic_map")}
                    </ChakraLink>
                  )}
                </VStack>
              ))}
            </Stack>
          </Stack>
        </Center>
      )}

      {/* ————— RSVP ————— */}
      {(!isLive || data?.confirmationEnabled) && (
        <Container maxW="1440px" px={{ base: "0", md: "80px" }}>
          <Flex align={"center"} justify="center" gap="60px">
            <Icon
              position={r("absolute", "unset")}
              top="0"
              left="0"
              zIndex={1}
              color="var(--c-accent)"
            >
              {heartsLeft.icon}
            </Icon>
            <Rsvp
              r={r}
              color="var(--c-primary)"
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
            <Icon display={r("none", "block")} color="var(--c-accent)">
              {heartsRight.icon}
            </Icon>
          </Flex>
        </Container>
      )}

      {/* ————— DRESS CODE ————— */}
      {(!isLive || data?.dressCode) && (
        <Center mt={!data?.confirmationEnabled && "100px"}>
          <VStack
            maxW={r("540px", "736px")}
            minH={r("569px", "775px")}
            gap={r("24px", "60px")}
            textAlign="center"
            justify={"center"}
            bgImage={`url(${dresscodeBg.src})`}
            bgSize="cover"
            bgPos="center"
            bgRepeat={"no-repeat"}
            position={"relative"}
          >
            <Stack gap="32px" px="102px" position={"relative"}>
              <Image
                src={dresscodeImg.src}
                alt="dresscode img"
                position={"absolute"}
                right="-280px"
                top="155px"
                boxSize={"423px"}
              />
              <Text
                fontSize={r("20px", "34px")}
                lineHeight="24px"
                fontWeight="800"
                color="var(--c-primary)"
                textTransform={"uppercase"}
              >
                {t("dresscode")}
              </Text>
              <Text
                fontSize={r("14px", "18px")}
                lineHeight="28px"
                color="#6F786C"
              >
                {dressCodeDesc}
              </Text>
            </Stack>

            <Stack gap={"32px"}>
              <VStack gap={r("15px", "20px")}>
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
                    color="#6B7280"
                  >
                    {dressCodeAbout}
                  </Text>
                )}
              </VStack>
            </Stack>

            <Image
              src={dresscodePin.src}
              alt="pin"
              position={"absolute"}
              top="-34px"
              right="0"
              boxSize={r("97px", "197px")}
            />
          </VStack>
        </Center>
      )}

      {/* ————— WEDDING GALLERY ————— */}
      {(!isLive || !data?.albumLink) && (
        <Center pt="60px">
          <VStack
            bgImage={`url(${galleryBg.src})`}
            bgSize="contain"
            bgPos="center"
            bgRepeat="no-repeat"
            minW="735px"
            w="fit-content"
            h="541px"
            position={"relative"}
            align={"center"}
            justify={"center"}
          >
            <Image
              src={moments.src}
              alt="moments"
              position={"absolute"}
              top={r("-20px", "55px")}
              left={r("150px", "-110px")}
              boxSize={r("113px", "198px")}
            />
            <Text
              fontSize={"12px"}
              fontWeight={400}
              lineHeight={"22px"}
              color="var(--c-primary)"
            >
              {t("classic_look")}
            </Text>
            <Text
              w={r("350px", "560px")}
              textAlign={"center"}
              fontSize={r("24px", "34px")}
              fontWeight={500}
              lineHeight={"48px"}
              color="var(--c-primary)"
              textTransform="uppercase"
            >
              {t("classic_gallery")}
            </Text>
            <VStack>
              <Button
                variant={"plain"}
                p="23px"
                bg="#B7ADA0"
                borderRadius={"100%"}
                w={r("91px", "64px")}
                h={r("91px", "64px")}
                mt="20px"
              >
                <Icon>{view.icon}</Icon>
              </Button>
              <Text
                fontSize={"12px"}
                fontWeight={400}
                lineHeight={"22px"}
                color="var(--c-primary)"
                mb="20px"
              >
                {t("classic_view")}
              </Text>
            </VStack>
            <Text
              fontSize={r("12px", "14px")}
              fontWeight="400"
              lineHeight="22px"
              color="var(--c-primary)"
              maxW={r("380px", "440px")}
              textAlign={"center"}
              dangerouslySetInnerHTML={{
                __html: t("classic_soon").replace(/\n/g, "<br />"),
              }}
            />
          </VStack>
        </Center>
      )}

      {/* ————— OUR LOVE STORY ————— */}
      {/* <Container maxW="1440px" px={{ base: "24px", md: "80px" }}> */}
      {(!isLive || data?.ourStory) && (
        <Flex
          w="100%"
          justify={"space-between"}
          align={"center"}
          p={r("60px 30px 50px 30px", "106px 0 50px 80px")}
          direction={r("column", "row")}
          gap={r("60px", "0")}
        >
          <Stack gap={r("16px", "40px")} align={r("center", "unset")}>
            <Text
              color="var(--c-primary)"
              fontSize={r("20px", "34px")}
              lineHeight="48px"
              fontWeight="500"
              textTransform="uppercase"
            >
              {t("classic_story")}
            </Text>
            <Text
              maxW={r("100%", "877px")}
              fontSize={r("14px", "18px")}
              lineHeight="28px"
              color="var(--c-primary)"
              whiteSpace="pre-line"
              fontWeight="400"
              textAlign={r("center", "unset")}
            >
              {storyText}
            </Text>
          </Stack>

          <Box
            w="100%"
            minH={r("662px", "488px")}
            bgImage={r(`url(${storyBgMobile.src})`, `url(${storyBg.src})`)}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            position="relative"
          >
            {storyImage1 && (
              <Box
                position="absolute"
                top="58px"
                left={r("unset", "118px")}
                right={r("0", "unset")}
                zIndex={1}
              >
                <Image
                  position="relative"
                  src={storyImage1}
                  alt="story 1"
                  w={r("267px", "278px")}
                  h={r("187px", "194px")}
                  objectFit="cover"
                  bg="white"
                  p="8px"
                />
                <Image
                  src={screp2.src}
                  h="49px"
                  alt="screp 2"
                  position="absolute"
                  top="-25px"
                  left="50%"
                  transform="translateX(-50%)"
                />

                <Image
                  position="absolute"
                  top={r("80px", "30px")}
                  right={r("150px", "100px")}
                  src={storyFlowers.src}
                  alt="story flowers"
                  maxW={r("257px", "391px")}
                  h={r("264px", "414px")}
                  objectFit="cover"
                  zIndex={1}
                />
              </Box>
            )}
            {storyImage2 && (
              <Box
                position="absolute"
                top={r("580px", "-12px")}
                right={r("-10px", "90px")}
                zIndex={1}
              >
                <Image
                  position="relative"
                  src={storyImage2}
                  alt="story 2"
                  w={r("224px", "194px")}
                  h={r("224px", "194px")}
                  objectFit="cover"
                  bg="white"
                  p="12px 12px 42px 12px"
                />
                <Image
                  src={always.src}
                  h="63px"
                  alt="always"
                  position="absolute"
                  top="-30px"
                  left="-105px"
                />
              </Box>
            )}

            {storyImage3 && (
              <Box
                position="absolute"
                bottom={r("120px", "30px")}
                left="35%"
                transform="translateX(-35%)"
                zIndex={2}
              >
                <Image
                  position="relative"
                  src={storyImage3}
                  alt="story 3"
                  w={r("224px", "194px")}
                  h={r("224px", "194px")}
                  objectFit="cover"
                  bg="white"
                  p="12px 12px 42px 12px"
                />
                <Image
                  src={storyFlower.src}
                  boxSize={r("135px", "84px")}
                  alt="story flower"
                  position="absolute"
                  top={r("40px", "-40px")}
                  left={r("170px", "40px")}
                />
              </Box>
            )}
            <Image
              src={storyFlower.src}
              boxSize="144px"
              alt="story flower"
              position="absolute"
              bottom={r("-150px", "-70px")}
              right={r("160px", "90px")}
            />
          </Box>
        </Flex>
      )}
      {/* </Container> */}

      {/* ————— CONTACT ————— */}
      {(!isLive || data?.connectWithUs) && (
        <Flex
          pt={r("210px", "120px")}
          pb={r("90px", "75px")}
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
            color="var(--c-primary)"
          >
            {t("classic_contact")}
          </Text>
          <Text
            fontSize={r("16px", "24px")}
            lineHeight="24px"
            fontWeight={r("400", "800")}
            color="var(--c-primary)"
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
              color="var(--c-primary)"
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
              color="var(--c-primary)"
            >
              {email}
            </Text>
          )}
        </Flex>
      )}
    </Box>
  );
}
