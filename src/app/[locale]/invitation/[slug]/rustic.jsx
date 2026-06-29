"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useMutateAuthTanstack } from "@/hooks/useTanstack";
import {
  formatEventDate,
  formatRusticTitle,
  paletteToVars,
} from "@/utils/formatters";
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
import coupleBg from "@/assets/imgs/invitations/rustic/couple_bg.png";
import img1 from "@/assets/imgs/invitations/rustic/img_1.png";
import img2 from "@/assets/imgs/invitations/rustic/img_2.png";
import img3 from "@/assets/imgs/invitations/rustic/img_3.jpg";
import img4 from "@/assets/imgs/invitations/rustic/img_4.png";
import screp from "@/assets/imgs/invitations/rustic/screp.png";
import dream from "@/assets/imgs/invitations/rustic/dream.png";
import galleryBg from "@/assets/imgs/invitations/rustic/gallery_bg.png";
import moments from "@/assets/imgs/invitations/rustic/moments.png";
import timingBg from "@/assets/imgs/invitations/rustic/timing_bg.png";
import timingImg from "@/assets/imgs/invitations/rustic/timing_img.png";
import dresscodeBg from "@/assets/imgs/invitations/rustic/dresscode_bg.png";
import dresscodeImg from "@/assets/imgs/invitations/rustic/dresscode_img.png";
import dresscodePin from "@/assets/imgs/invitations/rustic/dresscode_pin.png";
import storyBg from "@/assets/imgs/invitations/rustic/story_bg.png";
import story1 from "@/assets/imgs/invitations/rustic/story_1.png";
import screp2 from "@/assets/imgs/invitations/rustic/screp_2.png";
import story2 from "@/assets/imgs/invitations/rustic/story_2.png";
import always from "@/assets/imgs/invitations/rustic/always.png";
import storyFlowers from "@/assets/imgs/invitations/rustic/story_flowers.png";
import story3 from "@/assets/imgs/invitations/rustic/story_3.png";
import storyFlower from "@/assets/imgs/invitations/rustic/story_flower.png";
// import storyBg from "@/assets/imgs/invitations/rustic/story_bg.jpg";
import { FALLBACK, GUEST_COUNT, TIMELINE } from "@/utils/constants";
import { Link } from "@/i18n/routing";
import { error, success } from "@/components/ui/alerts";
import "react-image-gallery/styles/image-gallery.css";
import { Rsvp } from "@/components/invitation/rsvp";
import { Calendar } from "@/components/invitation/calendar";

export default function Rustic({ viewport = "pc", palette, data }) {
  const { slug } = useParams();

  const t = useTranslations();
  const language = useLocale();
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
  // const title = pickLang(data?.title, language) || "Henry & Mariam";
  // const eventDateText = formatEventDate(data?.eventDate);
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
  // console.log(vars);

  return (
    <Box
      data-viewport={viewport}
      style={vars}
      // w={`${width}px`}
      bg="#F6F5F4"
      color="#111"
      overflow="hidden"
      pt="75px"
      // position={"relative"}
    >
      {locales && <Language locales={locales} />}

      {/* ————— HERO ————— */}
      <Container maxW="1440px" px={{ base: "24px", md: "80px" }}>
        <Flex justify={"space-between"} gap="120px">
          <Stack position="relative">
            <Image
              src={heroImage}
              alt="img"
              w="428px"
              h="427px"
              borderRadius={"5px"}
            />

            <Image
              position={"absolute"}
              bottom={"-25px"}
              right={"-80px"}
              src={loveBg.src}
              alt="img"
              w="288px"
              h="167px"
              objectFit={"contain"}
              borderRadius={"5px"}
            />
          </Stack>

          <VStack align={"start"} gap="80px">
            <Flex
              w="100%"
              gap="70px"
              justify={"space-between"}
              align={"center"}
            >
              <Text
                fontFamily="var(--font-shk)"
                color="var(--c-primary)"
                // fontFamily={sosBanff.style.fontFamily}
                fontSize={isMobile ? "54px" : "64px"}
                lineHeight="24px"
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
              >
                <Icon mt={"-45px"}>{bottle.icon}</Icon>
              </Box>
            </Flex>
            <Text
              w="500px"
              fontSize={isMobile ? "16px" : "20px"}
              lineHeight="28px"
              fontWeight="400"
              color="var(--c-primary)"
            >
              {description}
            </Text>

            <Text
              fontFamily="var(--font-shk)"
              color="var(--c-primary)"
              fontSize={"74px"}
              fontWeight={"400"}
              lineHeight={"24px"}
            >
              {name1 + " + " + name2 + " = "} <Icon>{heart.icon}</Icon>
            </Text>
          </VStack>
        </Flex>
      </Container>

      {/* ————— COUNTDOWN ————— */}
      <Box
        bgColor="var(--c-accent)"
        position="relative"
        w="full"
        h="263px"
        overflow="visible"
        mt="132px"
        mb="187px"
      >
        <Container
          maxW="1440px"
          px={{ base: "24px", md: "80px" }}
          h="full"
          overflow="visible"
          position="relative"
        >
          <Image
            src={ring.src}
            alt="ring"
            position="absolute"
            top="-40px"
            // left="0"
            zIndex={1}
          />

          <Flex
            h="full"
            align="center"
            justify="space-between"
            gap={isMobile ? "24px" : "116px"}
          >
            <VStack gap={isMobile ? "16px" : "60px"} align="center">
              <Text color="var(--c-primary)">{t("rustic_journey")}</Text>
              {data?.countDown !== false && (
                <CountdownTimer
                  template={data?.templateId}
                  eventDate={data?.eventDate}
                  isMobile={isMobile}
                />
              )}
            </VStack>

            <VStack position="relative" alignSelf="center" flexShrink={0}>
              <Icon color="var(--c-accent)" mb={"-35px"} zIndex={2}>
                {topPin.icon}
              </Icon>
              {/* <Image src={overlay.src} alt="overlay" mb={"-35px"} zIndex={2} /> */}
              <Calendar value={data?.eventDate} zIndex={1} />
              <Icon color="var(--c-accent)" mt={"-35px"} zIndex={2}>
                {bottomPin.icon}
              </Icon>
              {/* <Image src={overlay2.src} alt="overlay" mt={"-35px"} zIndex={2} /> */}
            </VStack>
          </Flex>
        </Container>
      </Box>

      {/* ————— MAIN IMAGES ————— */}
      <Container pb="288px" maxW="1440px" px={{ base: "24px", md: "80px" }}>
        <VStack
          w="100%"
          h="802px"
          bgImage={`url(${mainImagesBg.src})`}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Box position="relative" w="491px" h="282px" zIndex={2}>
            <Box
              w="100%"
              h="100%"
              bgImage={`url(${coupleBg.src})`}
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
              fontSize="32px"
              lineHeight="42px"
            >
              {t("rustic_couple")}
              <br />
              {t("rustic_happy")}
            </Text>
          </Box>
          <Box position="absolute" top="80px" left="103px" zIndex={1}>
            <Image
              position="relative"
              src={coupleImage1}
              alt="img 1"
              maxW="318px"
              h="480px"
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
          <Image
            position="absolute"
            top="60px"
            right="153px"
            src={coupleImage2}
            alt="img 2"
            maxW="368px"
            h="420px"
            objectFit="cover"
            bg="white"
            p="20px 20px 72px 20px"
            zIndex={1}
          />
          <Box position="absolute" bottom="-110px" left="200px" zIndex={1}>
            <Image
              position="relative"
              src={coupleImage3}
              alt="img 3"
              w="263px"
              h="300px"
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
              top="-10px"
              left="-90px"
            />
          </Box>
          <Image
            position="absolute"
            bottom="-50px"
            right="103px"
            src={coupleImage4}
            alt="img 4"
            maxW="308px"
            h="307px"
            objectFit="cover"
            bg="white"
            p="29px 25px 29px 25px"
            zIndex={1}
          />
        </VStack>
      </Container>

      {/* ————— TIMING ————— */}
      {/* <Center pt="90px"> */}
      <Center>
        <Box position="relative" minH="1164px" minW="1086px">
          <Box
            position="absolute"
            inset="0"
            bg="var(--c-secondary)"
            style={{
              WebkitMaskImage: `url(${timingBg.src})`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",

              maskImage: `url(${timingBg.src})`,
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
            }}
          />
          <Box
            position="absolute"
            inset="0"
            bgImage={`url(${timingBg.src})`}
            bgSize="contain"
            bgPosition="center"
            bgRepeat="no-repeat"
            mixBlendMode="multiply"
            opacity={0.9}
          />
          <VStack
            position={"relative"}
            // bgImage={`url(${timingBg.src})`}
            // bgSize="contain"
            // bgPos="center"
            // bgRepeat="no-repeat"
            minH="1164px"
            h="100%"
            minW="1086px"
            // w="fit-content"
            gap="60px"
            px="160px"
            align={"center"}
            justify={"center"}
          >
            <Image
              src={timingImg.src}
              alt="timing"
              w="391px"
              position={"absolute"}
              top="-170px"
              right="-170px"
            />
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
            <Stack gap="40px">
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
                      color="var(--c-primary)"
                    >
                      {pickLang(item.venueName, language) || item.venueName}
                    </Text>
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
                  </VStack>
                </Flex>
              ))}
            </Stack>
          </VStack>
        </Box>
      </Center>

      {/* ————— RSVP ————— */}
      {data?.confirmationEnabled && (
        <Container maxW="1440px" px={{ base: "24px", md: "80px" }}>
          <Flex align={"center"} justify="center" gap="60px">
            <Icon color="var(--c-accent)">{heartsLeft.icon}</Icon>
            <Rsvp
              isMobile={isMobile}
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
            <Icon color="var(--c-accent)">{heartsRight.icon}</Icon>
          </Flex>
        </Container>
      )}

      {/* ————— DRESS CODE ————— */}
      <Center mt={!data?.confirmationEnabled && "100px"}>
        <VStack
          maxW="736px"
          minH="775px"
          gap={"60px"}
          textAlign="center"
          justify={"center"}
          bgImage={`url(${dresscodeBg.src})`}
          bgSize="contain"
          bgPos="center"
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
              fontSize={isMobile ? "20px" : "34px"}
              lineHeight="24px"
              fontWeight="800"
              color="var(--c-primary)"
              textTransform={"uppercase"}
            >
              {t("dresscode")}
            </Text>
            <Text
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

          <Image
            src={dresscodePin.src}
            alt="pin"
            position={"absolute"}
            top="-34px"
            right="0"
            boxSize={"197px"}
          />
        </VStack>
      </Center>

      {/* ————— WEDDING GALLERY ————— */}
      {data?.albumLink && (
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
              left="-110px"
              top="55px"
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
              w="560px"
              textAlign={"center"}
              fontSize={"34px"}
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
                bg="#B7ADA0DE"
                borderRadius={"100%"}
                w="64px"
                h="64px"
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
              fontSize="14px"
              fontWeight="400"
              lineHeight="22px"
              color="var(--c-primary)"
              maxW="440px"
              textAlign={"center"}
              dangerouslySetInnerHTML={{
                __html: t("classic_soon").replace(/\n/g, "<br />"),
              }}
            />
          </VStack>
        </Center>
      )}

      {/* // TODO: connect with gallery like classic */}
      {/* ————— OUR LOVE STORY ————— */}
      {/* <Container maxW="1440px" px={{ base: "24px", md: "80px" }}> */}
      <Flex
        w="100%"
        justify={"space-between"}
        align={"center"}
        pt="106px"
        pb="50px"
        pl="80px"
      >
        <Stack gap="40px">
          <Text
            color="var(--c-primary)"
            fontSize={isMobile ? "20px" : "34px"}
            lineHeight="48px"
            fontWeight="500"
            textTransform="uppercase"
          >
            {t("classic_story")}
          </Text>
          <Text
            maxW="877px"
            fontSize={isMobile ? "15px" : "18px"}
            lineHeight="28px"
            color="var(--c-primary)"
            whiteSpace="pre-line"
            fontWeight="400"
            // dangerouslySetInnerHTML={{
            //   __html: storyText.replace(/\n/g, "<br />"),
            // }}
          >
            {storyText}
          </Text>
        </Stack>

        <Box
          w="100%"
          // maxW="830px"
          minH="488px"
          bgImage={`url(${storyBg.src})`}
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          // justifyContent="center"
          // alignItems="center"
          position="relative"
        >
          <Box position="absolute" top="58px" left="118px" zIndex={1}>
            <Image
              position="relative"
              src={storyImage1}
              alt="story 1"
              w="294px"
              h="210px"
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
          </Box>
          <Box position="absolute" top="-12px" right="90px" zIndex={1}>
            <Image
              position="relative"
              src={storyImage2}
              alt="story 2"
              w="263px"
              h="300px"
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

          <Image
            position="absolute"
            left="-90px"
            bottom="-60px"
            src={storyFlowers.src}
            alt="story flowers"
            maxW="391px"
            h="414px"
            objectFit="cover"
            zIndex={1}
          />

          <Box
            position="absolute"
            bottom="30px"
            left="35%"
            transform="translateX(-35%)"
            zIndex={2}
          >
            <Image
              position="relative"
              src={storyImage3}
              alt="story 3"
              w="263px"
              h="300px"
              objectFit="cover"
              bg="white"
              p="12px 12px 42px 12px"
            />
            <Image
              src={storyFlower.src}
              boxSize="84px"
              alt="story flower"
              position="absolute"
              top="-40px"
              left="40px"
            />
          </Box>
          <Image
            src={storyFlower.src}
            boxSize="144px"
            alt="story flower"
            position="absolute"
            bottom="-70px"
            right="90px"
          />
        </Box>
      </Flex>
      {/* </Container> */}

      {/* ————— CONTACT ————— */}
      <Flex
        // bg="var(--c-primary)"
        // color="white"
        // py={isMobile ? "28px" : "40px"}
        pt="48px"
        pb="75px"
        align={"center"}
        justify={"center"}
        gap="90px"
      >
        <Text
          fontSize="30px"
          lineHeight="24px"
          fontWeight="800"
          textTransform={"uppercase"}
          color="var(--c-primary)"
        >
          {t("classic_contact")}
        </Text>
          <Text
          fontSize="24px"
          lineHeight="24px"
          fontWeight="800"
          textTransform={"uppercase"}
          color="var(--c-primary)"
        >
          {name}
        </Text>
        <Text
          as="a"
          href={`tel:${phone}`}
          fontSize="24px"
          lineHeight="24px"
          fontWeight="800"
          color="var(--c-primary)"
        >
          {phone}
        </Text>
        <Text
          as="a"
          href={`mailto:${email}`}
          fontSize="24px"
          lineHeight="24px"
          fontWeight="800"
          color="var(--c-primary)"
        >
          {email}
        </Text>
      </Flex>
    </Box>
  );
}
