# Weather App using OpenWeatherMap API

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[![BuildFrm](./public/form-builder.png)](https://form-builder-jun-edris.vercel.app/)

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **User Management:** [Clerk](https://clerk.com)
- **ORM:** [Prisma ORM](https://www.prisma.io/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)
- **Drag and Drop:** [DND Kit](https://dndkit.com/)

## Features to be implemented

- [x] Authentication with **Clerk**
- [x] ORM using **Prisma ORM**
- [x] Database on **Vercel Postgres**
- [x] Validation with **Zod**

## Running Locally

1. Clone the repository

   ```
   git clone https://github.com/sadmann7/form-builder.git
   ```

2. Install dependencies using pnpm

   ```
   npm install
   ```

3. Create an `.env` file and paste your secrets from Vercel Postgres and Clerk.
4. Start the development server

   ```
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

Licensed under the MIT License. Check the [LICENSE](./LICENSE.md) file for details.
