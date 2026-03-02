# Allset

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). 
It is built as a Next.js App Router application with SSR (Server-Side Rendering) and SSG (Static Site Generation) support, and includes multi-language support via [`next-intl`](https://next-intl.dev/)

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

npm install || yarn install || pnpm install

### Local Run

npm run dev || yarn dev || pnpm dev

### Build

npm run build || yarn build || pnpm build