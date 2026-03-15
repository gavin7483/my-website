import { SeoLandingPage } from "@/app/_components/seo-landing-page";
import { getMetadata, seoPages } from "@/app/seo-page-content";

const content = seoPages["postpartum-doula-support"];

export const metadata = getMetadata(content);

export default function PostpartumDoulaSupportPage() {
  return <SeoLandingPage content={content} />;
}
