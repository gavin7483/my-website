import { SeoLandingPage } from "@/app/_components/seo-landing-page";
import { getMetadata, seoPages } from "@/app/seo-page-content";

const content = seoPages["virtual-vs-in-person-doula"];

export const metadata = getMetadata(content);

export default function VirtualVsInPersonDoulaPage() {
  return <SeoLandingPage content={content} />;
}
