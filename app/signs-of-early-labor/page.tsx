import { SeoLandingPage } from "@/app/_components/seo-landing-page";
import { getMetadata, seoPages } from "@/app/seo-page-content";

const content = seoPages["signs-of-early-labor"];

export const metadata = getMetadata(content);

export default function SignsOfEarlyLaborPage() {
  return <SeoLandingPage content={content} />;
}
