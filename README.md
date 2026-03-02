# Allset

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It includes features such as **Auth0 authentication**, **AWS S3 image uploads**, **Chakra UI components**, **React Query state management**, and **multi-language support with next-intl**.

---

## Features

- **User Authentication** via [Auth0](https://auth0.com/docs/quickstart/spa/react)
- **Invitation management** with create/edit functionality
- **Image upload per invitation** directly to AWS S3 (`invitations/{id}/` folder)
- **Image lifecycle management**: images remain until invitation expiration; cleaned up later via cron job
- **Responsive UI** using [Chakra UI](https://chakra-ui.com)
- **Data fetching & caching** with [React Query](https://tanstack.com/query)
- **Date handling** via [date-fns](https://date-fns.org)
- **Interactive components** like sliders and day pickers
- **Animations** via [Framer Motion](https://www.framer.com/motion/)
- **Multi-language support** with [next-intl](https://next-intl-docs.vercel.app)

---

## Getting Started

### Install Dependencies

npm install
#### or
yarn install
#### or
pnpm install

### Local Run

npm run dev
#### or
yarn dev
#### or
pnpm dev

### Build

npm run build
#### or
yarn build
#### or
pnpm build