# Kimberly Zoltek Virtual Birth Doula Website

A premium single-page Next.js website for Kimberly Zoltek, offering virtual birth doula support for families across New England.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build for production with:

```bash
npm run build
```

## Site Structure

- `app/page.tsx`: Homepage with About, Services, Testimonials, FAQ, and Contact sections
- `app/layout.tsx`: Global layout and SEO metadata
- `app/globals.css`: Tailwind import and global theme variables

## Content Notes

- Testimonials are placeholder copy and should be replaced with real client feedback before launch.
- The contact form is styled and ready for integration with a form handling solution such as Formspree, Basin, or a custom API route.

## Deploy on Vercel

This project is ready for Vercel deployment.

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Use the default Next.js build settings.
4. Add a form provider or server action before launch if you want the contact form to submit real inquiries.

For a production-ready contact workflow, connect the form to an API route or third-party form backend after deployment.
