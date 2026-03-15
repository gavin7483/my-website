import { SeoLandingPage } from "@/app/_components/seo-landing-page";
import { getMetadata, seoPages } from "@/app/seo-page-content";

const content = seoPages["online-labor-support"];

export const metadata = getMetadata(content);

export default function OnlineLaborSupportPage() {
  return <SeoLandingPage content={content} />;
}
