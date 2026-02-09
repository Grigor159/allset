export const locales = ["hy", "en", "ru"]

export const prefixes = {
  'hy': '/hy',
  'en': '/en',
  'ru': '/ru'
}

export const languages = [
  {
    code: "hy",
    flag: "am",
  },
  {
    code: "en",
    flag: "gb",
  },
  {
    code: "ru",
    flag: "ru",
  },
]

export const localesMap = {
  hy: "am",
  en: "gb",
  ru: "ru",
}

export const days = (difference) => Math.floor(difference / (1000 * 60 * 60 * 24));
export const hours = (difference) => Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
export const minutes = (difference) => Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

export const expired = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  expired: true,
}

import { enUS, ru, hy } from "react-day-picker/locale";

export const calendarLocales = {
  en: enUS,
  hy: hy,
  ru: ru,
};

export const mainPages = [
  { path: "/digital-invitations", name: "Digital Invitations" },
  // { path: "/builder/templates", name: "Digital Invitations" },
  { path: "/event-vendors", name: "Event Vendors" },
  { path: "/about-us", name: "About Us" },
  { path: "/contacts", name: "Contacts" },
]

export const builderPages = [
  { path: "/builder/templates", name: "themes" },
  { path: "/builder/customisations", name: "customisations" },
  { path: "/builder/details", name: "details" },
  { path: "/builder/preview", name: "preview" },
  { path: "/builder/confirm", name: "confirm" },
  { path: "/builder/payment", name: "payment" },
];

export const authPages = ["profile", "invitations", "vendors", "logout"]

export const steps = {
  "/builder/templates": 1,
  "/builder/customisations": 2,
  "/builder/details": 3,
  "/builder/preview": 4,
  "/builder/confirm": 5,
};

export const totalSteps = 4;

import allset from '@/assets/imgs/allset.png'
import details from '@/assets/imgs/details.png'
import preview from '@/assets/imgs/preview.png'
import confirm from '@/assets/imgs/confirm.png'

export const contentMap = {
  "/builder/templates": {
    title: "template_title",
    text: "template_text",
    img: allset,
  },
  "/builder/details": {
    title: "details_title",
    text: "details_text",
    img: details,
  },
  "/builder/preview": {
    title: "preview_title",
    text: "preview_text",
    img: preview,
  },
  "/builder/confirm": {
    title: "confirm_title",
    text: "confirm_text",
    img: confirm,
  },
};


import { Icon } from '@chakra-ui/react';
import { laptop, mobile, pc } from '../assets/svgs';

export const responsive = [
  {
    id: 1,
    name: "pc",
    icon: <Icon>{pc.icon}</Icon>
  },
  {
    id: 2,
    name: "laptop",
    icon: <Icon>{laptop.icon}</Icon>
  },
  {
    id: 3,
    name: "mobile",
    icon: <Icon>{mobile.icon}</Icon>
  },
]

export const styles = [
  { label: "Casual", value: "casual" },
  { label: "Formal", value: "formal" },
  { label: "Black Tie", value: "black_tie" },
]

export const schemes = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "Colorful", value: "colorful" },
]

export const detailsForm = {
  templateId: "",
  colorPaletteId: "",
  title: {
    hy: "",
    en: "",
    ru: ""
  },
  urlExtension: "",
  eventDate: "",
  description: {
    hy: "",
    en: "",
    ru: ""
  },
  mainImages: [],
  rsvp: true,
  // closingText: {
  //   hy: "",
  //   en: "",
  //   ru: ""
  // },
  venue: {
    location: "",
    link: ""
  },
  timeline: [],
  countDown: true,
  connectWithUs: {
    // description: "",
    name: "",
    phone: "",
    email: "",
  },
  dressCode: {
    description: {
      hy: "",
      en: "",
      ru: ""
    },
    style: "",
    colorPaletteId: "",
  },
  albumLink: "",
  ourStory: {
    text: {
      hy: "",
      en: "",
      ru: ""
    },
    photoUrls: [],
  },
  languages: []
}

import visa from "@/assets/imgs/visa.png";
import idram from "@/assets/imgs/idram.png";

export const paymentMethods = [
  {
    value: "visa",
    src: visa,
  },
  {
    value: "idram",
    src: idram,
  },
]

// templates page local data
// import one from '../assets/template1.png'
// import two from '../assets/template2.png'
// import three from '../assets/template3.png'

// export const templates = [
//   {
//     id: 1,
//     img: one,
//     bg: "rgba(250, 245, 255, 1)",
//     name: "Classic Elegance",
//     text: "Timeless and sophisticated design with rich colors and traditional typography. Perfect for formal ceremonies.",
//     features: []
//   },
//   {
//     id: 2,
//     img: two,
//     bg: "rgba(255, 241, 242, 1)",
//     name: "Modern Romance",
//     text: "Clean and contemporary design with soft colors and modern typography. Perfect for modern couples.",
//     features: []
//   },
//   {
//     id: 3,
//     img: three,
//     bg: "rgba(255, 251, 235, 1)",
//     name: "Rustic Charm",
//     text: "Warm and natural design with earthy colors and organic elements. Perfect for outdoor and rustic weddings.",
//     features: []
//   },
// ]
