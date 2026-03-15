import { SeoLandingPage } from "@/app/_components/seo-landing-page";
import { getMetadata, seoPages } from "@/app/seo-page-content";

const content = seoPages["virtual-birth-doula"];

export const metadata = getMetadata(content);

export default function VirtualBirthDoulaPage() {
  return <SeoLandingPage content={content} />;
}
