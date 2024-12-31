"use client";

import { InfiniteMovingCards } from "@ui/components/infinite-moving-cards";

const customers = [
	{
		id: "1",
		name: "Daniel Penin",
		achievement: "+80 Milhões Faturados",
		category: "Nutraceuticos",
		image: "/placeholder.svg?height=400&width=400",
	},
	{
		id: "2",
		name: "Fernando",
		achievement: "6 dígitos em 7 dias",
		category: "Nutraceuticos",
		image: "/placeholder.svg?height=400&width=400",
	},
	{
		id: "3",
		name: "Ana C. Fernandes",
		achievement: "Fez +1 milhão de reais",
		category: "DNI",
		image: "/placeholder.svg?height=400&width=400",
	},
	{
		id: "4",
		name: "Mariana Torres",
		achievement: "+2.500 alunas",
		category: "Artesanato",
		image: "/placeholder.svg?height=400&width=400",
	},
	{
		id: "5",
		name: "Priscilla Zillo",
		achievement: "+R$350 lançamentos",
		category: "Marketing",
		image: "/placeholder.svg?height=400&width=400",
	},
	{
		id: "6",
		name: "Peter Jordan",
		achievement: "Fez +R$500 milhões",
		category: "Marketing Digital",
		image: "/placeholder.svg?height=400&width=400",
	},
];
export const CustomersSection = () => {
	return (
		<div className="container mx-auto py-20">
			<div className="text-center">
				<h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
					Nossos clientes
				</h2>
				<p className="text-lg text-neutral-500 dark:text-neutral-400">
					Conheça alguns dos nossos clientes e seus resultados
				</p>
			</div>
			<InfiniteMovingCards
				items={customers}
				direction="left"
				speed="normal"
				pauseOnHover
				className="mt-10"
			/>
		</div>
	);
};
