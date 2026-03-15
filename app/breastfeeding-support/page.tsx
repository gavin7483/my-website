import { SeoLandingPage } from "@/app/_components/seo-landing-page";
import { getMetadata, seoPages } from "@/app/seo-page-content";

const content = seoPages["breastfeeding-support"];

export const metadata = getMetadata(content);

export default function BreastfeedingSupportPage() {
  return <SeoLandingPage content={content} />;
}
