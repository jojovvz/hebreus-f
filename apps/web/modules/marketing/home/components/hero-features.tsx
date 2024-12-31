import { Check } from "lucide-react";

export function HeroFeatures() {
	const features = [
		{
			id: 1,
			text: "Não sabe como começar? Te ajudamos da integração até a venda",
		},
		{
			id: 2,
			text: "Sem riscos: não cobramos taxa de adesão e nem mensalidades",
		},
	];

	return (
		<div className="space-y-4">
			{features.map((feature) => (
				<div key={feature.id} className="flex items-start gap-3">
					<div className="rounded-full bg-green-100 p-1">
						<Check className="h-4 w-4 text-green-600" />
					</div>
					<p className="text-gray-600">{feature.text}</p>
				</div>
			))}
		</div>
	);
}
