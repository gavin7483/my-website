import { SeoLandingPage } from "@/app/_components/seo-landing-page";
import { getMetadata, seoPages } from "@/app/seo-page-content";

const content = seoPages["what-does-a-virtual-doula-do"];

export const metadata = getMetadata(content);

export default function WhatDoesAVirtualDoulaDoPage() {
  return <SeoLandingPage content={content} />;
}
