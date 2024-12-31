import Image from "next/image";
import React from "react";
import { Timeline } from "@ui/components/timeline";

const whyChooseContent = [
	{
		id: "sell",
		label: "Para vender mais",
		content: [
			{
				id: "checkout",
				title: "Converta mais vendas com nosso checkout inteligente",
				features: [
					"Maior taxa de aprovação no cartão de crédito para produtos digitais",
					"Checkout com carregamento ultra-rápido mais veloz do mercado",
					"Incrível: garanta o faturamento do seu lançamento sem se preocupar com quedas do checkout",
				],
				image: "/placeholder.svg?height=400&width=400",
			},
			{
				id: "recovery",
				title: "Recupere suas vendas perdidas",
				features: [
					"O Recuperador de vendas inteligente mais avançado do mercado, podendo aumentar 13% de suas vendas",
					"Recuperação disponível em todos os canais de pagamento: PIX, Boleto (incluindo o Parcelex) e cartão de crédito",
				],
				image: "/placeholder.svg?height=400&width=400",
			},
			{
				id: "more-sales",
				title: "Venda mais para seus clientes",
				features: [
					"Sistema de recomendação inteligente",
					"Aumente seu ticket médio com cross-sell e upsell",
				],
				image: "/placeholder.svg?height=400&width=400",
			},
		],
	},
	{
		id: "delight",
		label: "Para encantar seu cliente",
		content: [
			{
				id: "experience",
				title: "Experiência excepcional para seus clientes",
				features: [
					"Interface intuitiva e moderna",
					"Suporte 24/7 em português",
					"Área do cliente personalizada",
				],
				image: "/placeholder.svg?height=400&width=400",
			},
		],
	},
	{
		id: "manage",
		label: "Para gerir seu negócio",
		content: [
			{
				id: "management",
				title: "Gestão completa do seu negócio",
				features: [
					"Dashboard completo com métricas em tempo real",
					"Relatórios detalhados de vendas e conversão",
					"Integração com principais ferramentas do mercado",
				],
				image: "/placeholder.svg?height=400&width=400",
			},
		],
	},
];

export function TimelineDemo() {
	const data = whyChooseContent.flatMap((section) =>
		section.content.map((item) => ({
			title: item.title,
			content: (
				<div>
					<p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
						{item.features.join(", ")}
					</p>
					<div className="grid grid-cols-1 gap-4">
						<Image
							src={item.image}
							alt={item.title}
							width={500}
							height={500}
							className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
						/>
					</div>
				</div>
			),
		})),
	);

	return (
		<div className="w-full">
			<Timeline data={data} />
		</div>
	);
}
