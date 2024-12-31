"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import { cn } from "@ui/lib";

interface Tab {
	id: string;
	label: string;
	content: Section[];
}

interface Section {
	id: string;
	title: string;
	features: string[];
	image: string;
}

export function WhyChooseSection() {
	const [activeTab, setActiveTab] = useState("sell");
	const [expandedSection, setExpandedSection] = useState("checkout");

	const tabs: Tab[] = [
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

	const activeContent = tabs.find((tab) => tab.id === activeTab)?.content || [];

	return (
		<section className="py-16 bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<p className="text-yellow-500 text-sm font-medium mb-2">
						VENDA MAIS, VENDA MELHOR
					</p>
					<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
						Por que escolher a HEBREUS
					</h2>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="flex mb-8 bg-white dark:bg-gray-800 rounded-full p-1 shadow-sm">
						{tabs.map((tab) => (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={cn(
									"flex-1 py-3 px-4 rounded-full text-sm font-medium transition-colors",
									activeTab === tab.id
										? "bg-orange-500 text-white"
										: "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100",
								)}
							>
								{tab.label}
							</button>
						))}
					</div>

					<div className="space-y-4">
						{activeContent.map((section) => (
							<div
								key={section.id}
								className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
							>
								<button
									onClick={() =>
										setExpandedSection(
											expandedSection === section.id ? "" : section.id,
										)
									}
									className="w-full flex items-center justify-between p-6 text-left text-gray-900 dark:text-gray-100"
								>
									<h3 className="text-lg font-medium">{section.title}</h3>
									<ChevronDown
										className={cn(
											"w-5 h-5 text-gray-400 dark:text-gray-500 transition-transform",
											expandedSection === section.id ? "rotate-180" : "",
										)}
									/>
								</button>

								{expandedSection === section.id && (
									<div className="px-6 pb-6">
										<div className="grid md:grid-cols-2 gap-8">
											<div className="space-y-4">
												{section.features.map((feature, index) => (
													<div key={index} className="flex gap-3">
														<div className="rounded-full bg-green-100 dark:bg-green-900 p-1 h-6 w-6 flex items-center justify-center flex-shrink-0">
															<Check className="h-4 w-4 text-green-600 dark:text-green-400" />
														</div>
														<p className="text-gray-600 dark:text-gray-300 text-sm">
															{feature}
														</p>
													</div>
												))}
											</div>
											<div className="relative h-[300px]">
												<Image
													src={section.image}
													alt=""
													fill
													className="object-contain"
												/>
											</div>
										</div>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
