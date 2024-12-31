import { Check } from "lucide-react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@ui/components/card";
import { Button } from "@ui/components/button";

interface PricingCardProps {
	title: string;
	price: string;
	description: string;
	features: string[];
	popular?: boolean;
}

export function PricingCard({
	title,
	price,
	description,
	features,
	popular,
}: PricingCardProps) {
	return (
		<Card className={popular ? "border-[#4255FF] shadow-lg" : ""}>
			{popular && (
				<div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#4255FF] px-3 py-1 text-sm text-white">
					Mais popular
				</div>
			)}
			<CardHeader>
				<CardTitle className="text-xl">{title}</CardTitle>
				<div className="mt-4">
					<span className="text-4xl font-bold">{price}</span>
					{price !== "Personalizado" && (
						<span className="text-muted-foreground">/mês</span>
					)}
				</div>
				<p className="mt-2 text-sm text-muted-foreground">{description}</p>
			</CardHeader>
			<CardContent>
				<ul className="space-y-2">
					{features.map((feature, i) => (
						<li key={i} className="flex items-center gap-2">
							<Check className="h-4 w-4 text-[#65B5A0]" />
							<span className="text-sm">{feature}</span>
						</li>
					))}
				</ul>
			</CardContent>
			<CardFooter>
				<Button className="w-full" variant={popular ? "default" : "outline"}>
					Comece agora
				</Button>
			</CardFooter>
		</Card>
	);
}
