import { Check } from "lucide-react";

interface FeatureCardProps {
	title: string;
	description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
	return (
		<div className="flex flex-col items-center text-center">
			<div className="mb-4 rounded-full bg-[#65B5A0] p-2 text-white">
				<Check className="h-6 w-6" />
			</div>
			<h3 className="mb-2 text-xl font-semibold">{title}</h3>
			<p className="text-muted-foreground">{description}</p>
		</div>
	);
}
