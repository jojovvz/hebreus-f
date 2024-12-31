"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const solutions = [
	{ name: "Criação de Conteúdo", href: "/solucoes/criacao-de-conteudo" },
	{ name: "Vendas e Marketing", href: "/solucoes/vendas-e-marketing" },
	{ name: "Gestão de Membros", href: "/solucoes/gestao-de-membros" },
	{ name: "Pagamentos", href: "/solucoes/pagamentos" },
];

const helpItems = [
	{ name: "FAQ", href: "/ajuda/faq" },
	{ name: "Suporte", href: "/ajuda/suporte" },
	{ name: "Documentação", href: "/ajuda/documentacao" },
];

export function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	return (
		<header className="bg-white shadow-sm">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">HEBREUS</span>
						<span className="text-2xl font-bold text-yellow-500">HEBREUS</span>
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Abrir menu principal</span>
						<Menu className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					<Link
						href="/"
						className={cn(
							"text-sm font-semibold leading-6 text-gray-900",
							pathname === "/" && "text-yellow-500",
						)}
					>
						Home
					</Link>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="link"
								className="-m-1.5 p-1.5 text-sm font-semibold leading-6 text-gray-900"
							>
								Soluções{" "}
								<ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="start" className="w-56">
							{solutions.map((item) => (
								<DropdownMenuItem key={item.name} asChild>
									<Link
										href={item.href}
										className={cn(
											"block px-3 py-2 text-sm leading-6 text-gray-900",
											pathname === item.href && "bg-orange-50 text-yellow-500",
										)}
									>
										{item.name}
									</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
					<Link
						href="/educacao"
						className={cn(
							"text-sm font-semibold leading-6 text-gray-900",
							pathname === "/educacao" && "text-yellow-500",
						)}
					>
						Educação
					</Link>
					<Link
						href="/preco"
						className={cn(
							"text-sm font-semibold leading-6 text-gray-900",
							pathname === "/preco" && "text-yellow-500",
						)}
					>
						Preço
					</Link>
					<Link
						href="/comprar-curso"
						className={cn(
							"text-sm font-semibold leading-6 text-gray-900",
							pathname === "/comprar-curso" && "text-yellow-500",
						)}
					>
						Comprar um curso
					</Link>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="link"
								className="-m-1.5 p-1.5 text-sm font-semibold leading-6 text-gray-900"
							>
								Ajuda{" "}
								<ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end" className="w-56">
							{helpItems.map((item) => (
								<DropdownMenuItem key={item.name} asChild>
									<Link
										href={item.href}
										className={cn(
											"block px-3 py-2 text-sm leading-6 text-gray-900",
											pathname === item.href && "bg-orange-50 text-yellow-500",
										)}
									>
										{item.name}
									</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</nav>
			{mobileMenuOpen && (
				<div className="lg:hidden" role="dialog" aria-modal="true">
					<div className="fixed inset-0 z-50"></div>
					<div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<Link href="/" className="-m-1.5 p-1.5">
								<span className="sr-only">HEBREUS</span>
								<span className="text-2xl font-bold text-yellow-500">
									HEBREUS
								</span>
							</Link>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Fechar menu</span>
								<X className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									<Link
										href="/"
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										onClick={() => setMobileMenuOpen(false)}
									>
										Home
									</Link>
									<div className="-mx-3">
										<button
											type="button"
											className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
											aria-controls="disclosure-1"
											aria-expanded="false"
										>
											Soluções
											<ChevronDown
												className="h-5 w-5 flex-none"
												aria-hidden="true"
											/>
										</button>
										<div className="mt-2 space-y-2" id="disclosure-1">
											{solutions.map((item) => (
												<Link
													key={item.name}
													href={item.href}
													className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
													onClick={() => setMobileMenuOpen(false)}
												>
													{item.name}
												</Link>
											))}
										</div>
									</div>
									<Link
										href="/educacao"
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										onClick={() => setMobileMenuOpen(false)}
									>
										Educação
									</Link>
									<Link
										href="/preco"
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										onClick={() => setMobileMenuOpen(false)}
									>
										Preço
									</Link>
									<Link
										href="/comprar-curso"
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										onClick={() => setMobileMenuOpen(false)}
									>
										Comprar um curso
									</Link>
									<div className="-mx-3">
										<button
											type="button"
											className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
											aria-controls="disclosure-2"
											aria-expanded="false"
										>
											Ajuda
											<ChevronDown
												className="h-5 w-5 flex-none"
												aria-hidden="true"
											/>
										</button>
										<div className="mt-2 space-y-2" id="disclosure-2">
											{helpItems.map((item) => (
												<Link
													key={item.name}
													href={item.href}
													className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
													onClick={() => setMobileMenuOpen(false)}
												>
													{item.name}
												</Link>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
