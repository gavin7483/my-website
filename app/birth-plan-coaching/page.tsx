import { SeoLandingPage } from "@/app/_components/seo-landing-page";
import { getMetadata, seoPages } from "@/app/seo-page-content";

const content = seoPages["birth-plan-coaching"];

export const metadata = getMetadata(content);

export default function BirthPlanCoachingPage() {
  return <SeoLandingPage content={content} />;
}
