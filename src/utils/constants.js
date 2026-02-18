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

export const currentYear = new Date().getFullYear();

export const today = new Date();

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
  // { path: "/digital-invitations", name: "digital-invitations" },
  // { path: "/favorite-vendors", name: "favorite-vendors" },
  // { path: "/about-us", name: "about" },
  // { path: "/contacts", name: "contacts" },

  "digital-invitations", "event-vendors", "about-us", "contacts"
]

export const socialPages = ["policies/privacy-policy", "policies/terms-of-service", "tech", "blog"]

export const buildPages = [
  { path: "/build/templates", name: "themes" },
  { path: "/build/customisations", name: "customisations" },
  { path: "/build/details", name: "details" },
  { path: "/build/preview", name: "preview" },
  { path: "/build/confirm", name: "confirm" },
  { path: "/build/payment", name: "payment" },
];

export const authPages = ["profile", "invitations", "favorite-vendors", "logout"]

export const steps = {
  "/build/templates": 1,
  "/build/customisations": 2,
  "/build/details": 3,
  "/build/preview": 4,
  "/build/confirm": 5,
};

export const totalSteps = 4;


export const contentMap = {
  "/build/templates": {
    title: "template_title",
    text: "template_text",
  },
  "/build/details": {
    title: "details_title",
    text: "details_text",
  },
  "/build/preview": {
    title: "preview_title",
    text: "preview_text",
  },
  "/build/confirm": {
    title: "confirm_title",
    text: "confirm_text",
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

export const invitationTabs = [
  {
    id: 1,
    name: "active"
  },
  {
    id: 2,
    name: "drafts"
  },
  {
    id: 3,
    name: "expired"
  },
]

import { fb, insta, twitter, youtube, tiktok, pinterest } from "../assets/svgs";

export const social = [
  {
    href: "https://",
    icon: fb
  },
  {
    href: "https://",
    icon: insta
  },
  {
    href: "https://",
    icon: twitter
  },
  {
    href: "https://",
    icon: youtube
  },
  {
    href: "https://",
    icon: tiktok
  },
  {
    href: "https://",
    icon: pinterest
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
