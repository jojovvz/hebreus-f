import { BlogSection } from "@marketing/home/components/blog-section";
import { CustomersSection } from "@marketing/home/components/customers-section";
import { FAQSection } from "@marketing/home/components/faq-section";
import { Features } from "@marketing/home/components/Features copy";
import { GrowthStepsSection } from "@marketing/home/components/growth-steps-section";
import { HeroSection } from "@marketing/home/components/hero-section";
import { Hero } from "@marketing/home/components/Hero2";
import { IntegrationsSection } from "@marketing/home/components/integrations-section";
import { Newsletter } from "@marketing/home/components/Newsletter";
import { PaymentSection } from "@marketing/home/components/payment-section";
import { StartNowSection } from "@marketing/home/components/start-now-section";
import { StatsSection } from "@marketing/home/components/stats-section";
import { TimelineDemo } from "@marketing/home/components/timeline";
import { ToolsSection } from "@marketing/home/components/tools-section";


export default function Home() {
	return (
		<>
			<HeroSection />
			<StatsSection className="bg-slate-50" />
			<TimelineDemo />
			<GrowthStepsSection />
			<IntegrationsSection />
			<PaymentSection />
			<ToolsSection />
			<StartNowSection />
			<CustomersSection />
			<FAQSection />
			<Features />
			<BlogSection />
		</>
	);
}
