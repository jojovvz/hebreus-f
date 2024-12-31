import { Button } from "@ui/components/button";
import { DollarSign, Hash, Code } from "lucide-react";

const benefits = [
	{
		id: "1",
		icon: DollarSign,
		title: "Não precisa de investimento inicial",
		description: "Na HEBREUS você não paga nada pra começar.",
	},
	{
		id: "2",
		icon: Hash,
		title: "Não precisa de muitos seguidores",
		description: "A maioria dos produtores começa assim.",
	},
	{
		id: "3",
		icon: Code,
		title: "Não precisa de desenvolvedores",
		description: "Nada de programação. Fácil, intuitivo e com auxílio de AI.",
	},
];

export function StartNowSection() {
	return (
		<section className="bg-black text-white py-24">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
					Quanto antes você começar, melhor
				</h2>

				<div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
					{benefits.map((benefit) => (
						<div key={benefit.id} className="text-center">
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 mb-6">
								<benefit.icon className="w-8 h-8 text-yellow-500" />
							</div>
							<h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
							<p className="text-gray-400">{benefit.description}</p>
						</div>
					))}
				</div>

				<div className="text-center">
					<Button
						size="lg"
						className="bg-yellow-500 hover:bg-orange-600 text-white px-8"
					>
						Comece agora
						<svg
							className="ml-2 w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</Button>
				</div>
			</div>
		</section>
	);
}
