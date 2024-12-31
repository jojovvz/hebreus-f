"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@ui/lib";

const tools = [
	{
		id: "1",
		name: "Área de Membros",
		description: "Crie uma experiência exclusiva para seus alunos",
		image: "/placeholder.svg?height=300&width=400",
	},
	{
		id: "2",
		name: "Checkout Inteligente",
		description: "Aumente suas conversões com nosso checkout otimizado",
		image: "/placeholder.svg?height=300&width=400",
	},
	{
		id: "3",
		name: "Gestão de Afiliados",
		description: "Gerencie sua rede de afiliados de forma simples",
		image: "/placeholder.svg?height=300&width=400",
	},
	{
		id: "4",
		name: "Analytics Avançado",
		description: "Tome decisões baseadas em dados reais",
		image: "/placeholder.svg?height=300&width=400",
	},
	{
		id: "5",
		name: "Automação de Marketing",
		description: "Automatize suas campanhas e aumente suas vendas",
		image: "/placeholder.svg?height=300&width=400",
	},
];

export function ToolsSection() {
	const [selectedIndex, setSelectedIndex] = useState(0);

	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">
						Ferramentas poderosas para seu negócio digital
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Descubra todas as ferramentas que a HEBREUS oferece para impulsionar
						seu negócio digital e maximizar seus resultados.
					</p>
				</div>

				<div className="max-w-5xl mx-auto">
					<div className="relative">
						<div className="overflow-hidden">
							<div
								className="flex transition-transform duration-500"
								style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
							>
								{tools.map((tool, index) => (
									<div key={tool.id} className="w-full flex-shrink-0 px-4">
										<div
											className={cn(
												"relative rounded-2xl overflow-hidden transition-all duration-500",
												selectedIndex === index
													? "scale-100 opacity-100"
													: "scale-90 opacity-50",
											)}
											onClick={() => setSelectedIndex(index)}
										>
											<div className="relative aspect-[16/9]">
												<Image
													src={tool.image}
													alt={tool.name}
													fill
													className="object-cover"
												/>
											</div>
											<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
												<div className="text-white">
													<h3 className="text-xl font-semibold mb-2">
														{tool.name}
													</h3>
													<p className="text-white/80">{tool.description}</p>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="flex justify-center gap-2 mt-6">
							{tools.map((tool, index) => (
								<button
									key={tool.id}
									className={cn(
										"w-2.5 h-2.5 rounded-full transition-colors",
										selectedIndex === index ? "bg-yellow-500" : "bg-gray-300",
									)}
									onClick={() => setSelectedIndex(index)}
									aria-label={`Ir para o slide ${index + 1}`}
								/>
							))}
						</div>

						<button
							className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/80 backdrop-blur p-2 rounded-full shadow-lg hover:bg-white transition-colors"
							onClick={() =>
								setSelectedIndex((prev) =>
									prev > 0 ? prev - 1 : tools.length - 1,
								)
							}
							aria-label="Slide anterior"
						>
							{"<"}
						</button>
						<button
							className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/80 backdrop-blur p-2 rounded-full shadow-lg hover:bg-white transition-colors"
							onClick={() =>
								setSelectedIndex((prev) =>
									prev < tools.length - 1 ? prev + 1 : 0,
								)
							}
							aria-label="Próximo slide"
						>
							{">"}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
