"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@ui/lib";
import Image from "next/image";

interface Step {
	id: string;
	number: string;
	title: string;
	description: string;
	image: string;
}

const steps: Step[] = [
	{
		id: "1",
		number: "01",
		title: "Entregue seu conteúdo",
		description:
			"Crie plataformas de streaming com uma área de membros totalmente personalizada.",
		image: "/placeholder.svg?height=300&width=400",
	},
	{
		id: "2",
		number: "02",
		title: "Decida com os dados",
		description:
			"Identifique oportunidades de crescimento com relatórios e dashboards.",
		image: "/placeholder.svg?height=300&width=400",
	},
	{
		id: "3",
		number: "03",
		title: "Venda de novo para seus clientes",
		description:
			"Ofereça novos produtos para seus alunos e aumente sua recorrência.",
		image: "/placeholder.svg?height=300&width=400",
	},
];

export function GrowthStepsSection() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "start",
		slidesToScroll: 1,
		breakpoints: {
			"(min-width: 640px)": { slidesToScroll: 2 },
			"(min-width: 1024px)": { slidesToScroll: 3 },
		},
	});

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<section className="py-16 bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto text-center mb-12">
					<h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
						Growth Steps
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300">
						Follow these steps to grow your business.
					</p>
				</div>

				<div className="relative">
					<div className="overflow-hidden" ref={emblaRef}>
						<div className="flex gap-6">
							{steps.map((step) => (
								<div
									key={step.id}
									className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
								>
									<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
										<img
											src={step.image}
											alt={step.title}
											className="w-full h-40 object-cover rounded-md mb-4"
										/>
										<h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100">
											{step.number}. {step.title}
										</h3>
										<p className="text-gray-600 dark:text-gray-300">
											{step.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<button
						onClick={scrollPrev}
						className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
						aria-label="Previous slide"
					>
						<ChevronLeft className="w-6 h-6" />
					</button>

					<button
						onClick={scrollNext}
						className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
						aria-label="Next slide"
					>
						<ChevronRight className="w-6 h-6" />
					</button>
				</div>
			</div>
		</section>
	);
}
