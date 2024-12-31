import Image from "next/image";
import Link from "next/link";
import { Button } from "@ui/components/button";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
	id: string;
	title: string;
	excerpt: string;
	image: string;
	date: string;
	readTime: string;
	category: string;
}

const posts: BlogPost[] = [
	{
		id: "1",
		title: "Como aumentar suas vendas em 300% com marketing de afiliados",
		excerpt:
			"Descubra as estratégias comprovadas que podem triplicar suas vendas através de um programa de afiliados bem estruturado.",
		image: "/placeholder.svg?height=400&width=600",
		date: "12 Jan 2024",
		readTime: "5 min",
		category: "Marketing Digital",
	},
	{
		id: "2",
		title: "Guia completo: Como criar um produto digital de sucesso",
		excerpt:
			"Aprenda o passo a passo para criar, precificar e lançar seu produto digital com as melhores práticas do mercado.",
		image: "/placeholder.svg?height=400&width=600",
		date: "10 Jan 2024",
		readTime: "8 min",
		category: "Produtos Digitais",
	},
	{
		id: "3",
		title: "As tendências de e-commerce para 2024",
		excerpt:
			"Fique por dentro das principais tendências que vão moldar o futuro do comércio eletrônico nos próximos anos.",
		image: "/placeholder.svg?height=400&width=600",
		date: "8 Jan 2024",
		readTime: "6 min",
		category: "E-commerce",
	},
];

export function BlogSection() {
	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center mb-12">
					<div>
						<h2 className="text-3xl font-bold mb-2">Blog HEBREUS</h2>
						<p className="text-gray-600">
							Conteúdo exclusivo para impulsionar seu negócio digital
						</p>
					</div>
					<Button
						variant="outline"
						className="hidden md:flex items-center gap-2"
					>
						Ver todos os artigos
						<ArrowRight className="w-4 h-4" />
					</Button>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
					{posts.map((post) => (
						<article
							key={post.id}
							className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
						>
							<Link href={`/blog/${post.id}`}>
								<div className="relative aspect-[16/9]">
									<Image
										src={post.image}
										alt={post.title}
										fill
										className="object-cover"
									/>
								</div>
								<div className="p-6">
									<div className="flex items-center gap-4 mb-4">
										<span className="inline-flex items-center text-sm text-gray-500">
											<CalendarDays className="w-4 h-4 mr-1" />
											{post.date}
										</span>
										<span className="inline-flex items-center text-sm text-gray-500">
											<Clock className="w-4 h-4 mr-1" />
											{post.readTime}
										</span>
									</div>
									<span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-600 mb-3">
										{post.category}
									</span>
									<h3 className="text-xl font-semibold mb-2 line-clamp-2">
										{post.title}
									</h3>
									<p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
								</div>
							</Link>
						</article>
					))}
				</div>

				<div className="text-center md:hidden">
					<Button variant="outline" className="w-full">
						Ver todos os artigos
					</Button>
				</div>
			</div>
		</section>
	);
}
