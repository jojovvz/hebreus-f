"use client";

import Image from "next/image";
import { Button } from "@ui/components/button";
import { AnimatedBeamDemo } from "./Integracoes";

const integrations = [
	{
		id: "1",
		name: "WordPress",
		icon: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "2",
		name: "Shopify",
		icon: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "3",
		name: "WooCommerce",
		icon: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "4",
		name: "Magento",
		icon: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "5",
		name: "PrestaShop",
		icon: "/placeholder.svg?height=40&width=40",
	},
];

export function IntegrationsSection() {
	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-6">
						Integre com as principais plataformas do mercado
					</h2>
					<p className="text-gray-600 mb-8">
						A HEBREUS se conecta com as principais plataformas de e-commerce e
						gerenciamento de conteúdo, permitindo que você mantenha seus
						processos atuais enquanto aproveita nossos recursos avançados.
					</p>
					<AnimatedBeamDemo />
					<Button size="lg">Ver todas as integrações</Button>
				</div>
			</div>
		</section>
	);
}
