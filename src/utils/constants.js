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
  // "digital_invitations", "about-us", "contacts"
  {
    name: "digital_invitations",
    path: "build/templates"
  },
  {
    name: "about",
    path: "about-us"
  },
  {
    name: "contacts",
    path: "contacts"
  },
]

export const socialPages = [
  { name: "privacy_policy", path: "policies/privacy-policy" },
  { name: "terms_of_service", path: "policies/terms-of-service" },
  { name: "guides", path: "guides" },
  { name: "blog", path: "blog" },
]

export const buildPages = [
  { path: "/build/templates", name: "themes" },
  { path: "/build/customisations", name: "customisations" },
  { path: "/build/details", name: "details" },
  { path: "/build/preview", name: "preview" },
  { path: "/build/confirm", name: "confirm" },
  { path: "/build/payment", name: "payment" },
];

export const authPages = ["profile", "invitations", "logout"]

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

import { create, manage, check } from '../assets/svgs';
export const available = [
  {
    id: 1,
    bg: "#8D6F49",
    icon: create,
    iconBg: "#AC8A5F",
    title: "available_one_title",
    description: "available_one_desc"
  },
  {
    id: 2,
    bg: "#AC8A5F",
    icon: manage,
    iconBg: "#A17F54",
    title: "available_two_title",
    description: "available_two_desc"
  },
  {
    id: 3,
    bg: "#C2A989",
    icon: check,
    iconBg: "#AC8A5F",
    title: "available_three_title",
    description: "available_three_desc"
  }
]

export const features = [
  {
    id: 1,
    title: "feature_one_title",
    description: "feature_one_desc"
  },
  {
    id: 2,
    title: "feature_two_title",
    description: "feature_two_desc"
  },
  {
    id: 3,
    title: "feature_three_title",
    description: "feature_three_desc"
  }
]

export const choose = [
  {
    id: 1,
    title: "choose_one_title",
    description: "choose_one_desc"
  },
  {
    id: 2,
    title: "choose_two_title",
    description: "choose_two_desc"
  },
  {
    id: 3,
    title: "choose_three_title",
    description: "choose_three_desc"
  },
  {
    id: 4,
    title: "choose_four_title",
    description: "choose_four_desc",
  },
  {
    id: 5,
    title: "choose_five_title",
    description: "choose_five_desc"
  }
]

export const instruction = [
  {
    id: 1,
    title: "create_one_title",
    description: "create_one_desc"
  },
  {
    id: 2,
    title: "create_two_title",
    description: "create_two_desc"
  },
  {
    id: 3,
    title: "create_three_title",
    description: "create_three_desc"
  }
]

import templateOne from "@/assets/imgs/template_one.png";
import templateTwo from "@/assets/imgs/template_two.png";
import templateThree from "@/assets/imgs/template_three.png";

export const templates = [
  {
    id: 1,
    img: templateOne.src,
    href: "",
  },
  {
    id: 2,
    img: templateTwo.src,
    href: "",
  },
  {
    id: 3,
    img: templateThree.src,
    href: "",
  },
  {
    id: 4,
    img: "https://i.pravatar.cc/150?img=44",
    href: "",
  },
  {
    id: 5,
    img: "https://i.pravatar.cc/150?img=2",
    href: "",
  },
  {
    id: 6,
    img: "https://i.pravatar.cc/150?img=13",
    href: "",
  },
  {
    id: 7,
    img: "https://i.pravatar.cc/150?img=10",
    href: "",
  },
]

export const feedback = [
  {
    id: 1,
    name: "Անի Հակոբյան",
    invitations: 2,
    stars: 4,
    feedback:
      "Մեր փորձը անհավանական էր։ Հիմնարկը շատ արագ և պարզ էր — մենք ստացանք մեր գեղեցիկ թվային հրավիրատոմսը ընդամենը մի քանի ժամում։ Մեր բոլոր հյուրերը դա շատ սիրեցին։",
  },
  {
    id: 2,
    name: "Luiza Abrahamyan",
    invitations: 2,
    stars: 5,
    feedback:
      "Մեր փորձը անհավանական էր։ Հիմնարկը շատ արագ և պարզ էր — մենք ստացանք մեր գեղեցիկ թվային հրավիրատոմսը ընդամենը մի քանի ժամում։ Մեր բոլոր հյուրերը դա շատ սիրեցին։",
  },
  {
    id: 3,
    name: "Anna Ayvazyan",
    invitations: 8,
    stars: 4,
    feedback:
      "Մեր փորձը անհավանական էր։ Հիմնարկը շատ արագ և պարզ էր — մենք ստացանք մեր գեղեցիկ թվային հրավիրատոմսը ընդամենը մի քանի ժամում։ Մեր բոլոր հյուրերը դա շատ սիրեցին։",
  },
  {
    id: 4,
    name: "Alina Avagyan",
    invitations: 1,
    stars: 5,
    feedback:
      "Մեր փորձը անհավանական էր։ Հիմնարկը շատ արագ և պարզ էր — մենք ստացանք մեր գեղեցիկ թվային հրավիրատոմսը ընդամենը մի քանի ժամում։ Մեր բոլոր հյուրերը դա շատ սիրեցին։",
  },
];

export const faqs = [
  {
    value: "1",
    title: "faqs_one_title",
    text: "faqs_one_text",
  },
  {
    value: "2",
    title: "faqs_two_title",
    text: "faqs_two_text",
  },
  {
    value: "3",
    title: "faqs_three_title",
    text: "faqs_three_text",
  },
  {
    value: "4",
    title: "faqs_four_title",
    text: "faqs_four_text",
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
