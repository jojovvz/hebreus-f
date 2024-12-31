"use client";

import { useState } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@ui/components/accordion";
import { cn } from "@ui/lib";

interface FAQItem {
	id: string;
	question: string;
	answer: string;
}

const faqs: FAQItem[] = [
	{
		id: "1",
		question: "Quanto custa usar a HEBREUS?",
		answer:
			"A HEBREUS não cobra mensalidade ou taxa de adesão. Você só paga quando vende, com uma pequena taxa por transação. Isso significa que nosso sucesso está diretamente ligado ao seu sucesso. Quanto mais você vende, mais nós crescemos juntos.",
	},
	{
		id: "2",
		question:
			"Ainda não tenho um produto digital pronto, a HEBREUS pode me ajudar?",
		answer:
			"Sim! A HEBREUS oferece suporte completo desde a concepção até o lançamento do seu produto. Temos ferramentas intuitivas e guias passo a passo para ajudá-lo a criar, precificar e lançar seu produto digital, além de uma equipe de suporte especializada para auxiliá-lo em cada etapa.",
	},
	{
		id: "3",
		question:
			"Por que só pagar quando eu vender faz mais sentido do que pagar mensalidade?",
		answer:
			"Este modelo elimina o risco inicial e garante que você possa focar em criar e promover seu produto sem se preocupar com custos fixos. Além disso, alinha nossos interesses: quanto mais você vende, mais todos ganham. É uma parceria verdadeira para o crescimento.",
	},
	{
		id: "4",
		question: "Quantos produtos posso vender pela HEBREUS?",
		answer:
			"Não há limite! Você pode vender quantos produtos quiser na plataforma. Seja um curso, e-book, mentoria ou assinatura, você pode gerenciar múltiplos produtos em um único painel, facilitando sua gestão e escalando seu negócio.",
	},
	{
		id: "5",
		question: "Como a HEBREUS pode me ajudar a crescer?",
		answer:
			"A HEBREUS oferece uma suite completa de ferramentas para crescimento: checkout otimizado, sistema de afiliados, recuperação de vendas, análise de dados em tempo real, integrações com principais plataformas de marketing e muito mais. Além disso, oferecemos suporte especializado e conteúdo educacional para ajudá-lo a escalar seu negócio.",
	},
	{
		id: "6",
		question:
			"O que faz da HEBREUS a melhor plataforma para criadores de conteúdo?",
		answer:
			"A HEBREUS se destaca por combinar tecnologia avançada com simplicidade de uso. Oferecemos as maiores taxas de aprovação do mercado, checkout ultra-rápido, proteção contra fraudes, área de membros personalizada e suporte 24/7. Nossa plataforma é construída pensando no sucesso do produtor digital.",
	},
	{
		id: "7",
		question:
			"Como posso vender para outros países usando o sistema de pagamentos da HEBREUS?",
		answer:
			"A HEBREUS possui um sistema de pagamentos internacional que aceita as principais moedas e métodos de pagamento globais. Você pode vender em diferentes moedas, com checkout localizado e suporte a múltiplos idiomas, tornando sua expansão internacional simples e eficiente.",
	},
	{
		id: "8",
		question:
			"Se estou vendendo para outros países, como funciona a conversão de moeda?",
		answer:
			"A HEBREUS gerencia automaticamente todas as conversões de moeda, garantindo as melhores taxas do mercado. Você pode receber seus pagamentos na moeda de sua preferência, e nosso sistema cuida de toda a complexidade das transações internacionais, incluindo impostos e regulamentações.",
	},
];

export function FAQSection() {
	const [openItems, setOpenItems] = useState<string[]>([]);

	return (
		<section className="py-16 bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
							Perguntas frequentes
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							Dúvidas? Nós temos as respostas!
						</p>
					</div>

					<Accordion
						type="multiple"
						value={openItems}
						onValueChange={setOpenItems}
						className="space-y-4"
					>
						{faqs.map((faq) => (
							<AccordionItem
								key={faq.id}
								value={faq.id}
								className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
							>
								<AccordionTrigger className="px-6 hover:no-underline [&[data-state=open]>div]:text-yellow-500">
									<div className="flex items-center text-left">
										<span className="text-yellow-500 font-mono mr-4 text-sm">
											{faq.id.padStart(2, "0")}
										</span>
										<span className="font-medium text-gray-900 dark:text-gray-100">
											{faq.question}
										</span>
									</div>
								</AccordionTrigger>
								<AccordionContent className="px-6 pb-6 pt-2 text-gray-600 dark:text-gray-300">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>

					<div className="text-center mt-12">
						<p className="text-gray-600 dark:text-gray-300 mb-4">
							Ainda tem dúvidas? Estamos aqui para ajudar!
						</p>
						<div className="inline-flex gap-4">
							<a
								href="mailto:suporte@hebreus.com"
								className="text-yellow-500 hover:text-orange-600 font-medium"
							>
								Entre em contato
							</a>
							<span className="text-gray-300 dark:text-gray-600">|</span>
							<a
								href="/suporte"
								className="text-yellow-500 hover:text-orange-600 font-medium"
							>
								Central de Ajuda
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
