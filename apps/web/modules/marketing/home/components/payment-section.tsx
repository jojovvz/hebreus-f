"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@ui/components/avatar";
import { Badge } from "@ui/components/badge";
import { Button } from "@ui/components/button";
import { Card, CardContent } from "@ui/components/card";
import { Input } from "@ui/components/input";
import { Label } from "@ui/components/label";
import { RadioGroup, RadioGroupItem } from "@ui/components/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui/components/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/components/tabs";
import { Switch } from "@ui/components/switch";
import {
	MoreHorizontal,
	Lock,
	ChevronLeft,
	ChevronRight,
	HelpCircle,
} from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@ui/components/dropdown-menu";

export function PaymentSection() {
	return (
		<section className="py-20">
			<div className="container max-w-5xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-12">
					Pagamentos simples, maior retorno financeiro.
				</h2>

				<Tabs defaultValue="checkout">
					<TabsList className="grid w-full grid-cols-3 mb-8">
						<TabsTrigger value="checkout">Checkout</TabsTrigger>
						<TabsTrigger value="assinaturas">Assinaturas</TabsTrigger>
						<TabsTrigger value="opcoes">Opções de pagamento</TabsTrigger>
					</TabsList>

					<TabsContent value="checkout">
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-xl font-semibold mb-6">CoachClub</h3>
								<Card>
									<CardContent className="pt-6">
										<h4 className="text-lg font-semibold mb-2">Coaching VIP</h4>
										<p className="text-sm text-muted-foreground mb-6">
											Coaching Executivo Personalizado 1:1
										</p>

										<RadioGroup defaultValue="mensal" className="space-y-4">
											<div className="flex items-center justify-between space-x-2 border rounded-lg p-4">
												<div className="flex items-center space-x-2">
													<RadioGroupItem value="mensal" id="mensal" />
													<Label htmlFor="mensal">
														<div>Assinatura mensal</div>
														<div className="text-sm text-muted-foreground">
															R$8/mês
														</div>
													</Label>
												</div>
												<div className="font-medium">R$8</div>
											</div>

											<div className="flex items-center justify-between space-x-2 border rounded-lg p-4">
												<div className="flex items-center space-x-2">
													<RadioGroupItem value="anual" id="anual" />
													<Label htmlFor="anual">
														<div>Assinatura anual</div>
														<div className="text-sm text-muted-foreground">
															R$100/ano
														</div>
													</Label>
												</div>
												<div className="font-medium">R$100</div>
											</div>

											<div className="flex items-center justify-between space-x-2 border rounded-lg p-4">
												<div className="flex items-center space-x-2">
													<RadioGroupItem value="trimestral" id="trimestral" />
													<Label htmlFor="trimestral">
														<div>Pagamento trimestral</div>
														<div className="text-sm text-muted-foreground">
															4 pagamentos trimestrais de R$25
														</div>
													</Label>
												</div>
												<div className="font-medium">R$100</div>
											</div>

											<div className="flex items-center justify-between space-x-2 border rounded-lg p-4">
												<div className="flex items-center space-x-2">
													<RadioGroupItem value="unico" id="unico" />
													<Label htmlFor="unico">
														<div>Pagamento único de R$200</div>
													</Label>
												</div>
												<div className="font-medium">R$200</div>
											</div>
										</RadioGroup>
									</CardContent>
								</Card>
							</div>

							<div>
								<h3 className="text-xl font-semibold mb-6">
									Complete seu pagamento
								</h3>
								<p className="text-sm text-muted-foreground mb-6">
									Por gentileza, forneça suas informações de conta e pagamento.
								</p>

								<div className="space-y-6">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<Avatar className="h-8 w-8">
												<AvatarImage src="/placeholder.svg" alt="RS" />
												<AvatarFallback>RS</AvatarFallback>
											</Avatar>
											<div className="text-sm">
												<div>Rosetta Stoney</div>
												<div className="text-muted-foreground">
													rose_23@gmail.com
												</div>
											</div>
										</div>
										<Button variant="outline" size="sm">
											Sair
										</Button>
									</div>

									<div className="space-y-4">
										<div>
											<Label htmlFor="card-details">Dados do Cartão</Label>
											<div className="grid gap-4">
												<Input
													id="card-number"
													placeholder="Número do Cartão"
												/>
												<div className="grid grid-cols-2 gap-4">
													<Input id="card-expiry" placeholder="MM / YY" />
													<Input id="card-cvc" placeholder="CVC" />
												</div>
											</div>
										</div>

										<div>
											<Label htmlFor="card-name">Nome no cartão</Label>
											<Input id="card-name" placeholder="Jane Cooper" />
										</div>

										<div>
											<Label htmlFor="country">País ou região</Label>
											<Select>
												<SelectTrigger id="country">
													<SelectValue placeholder="Selecione um país" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="br">Brasil</SelectItem>
													<SelectItem value="de">Alemanha</SelectItem>
													<SelectItem value="us">Estados Unidos</SelectItem>
												</SelectContent>
											</Select>
										</div>

										<div>
											<Label htmlFor="coupon">Código do cupom</Label>
											<Input id="coupon" placeholder="Digite seu código" />
										</div>

										<div className="space-y-4">
											<div className="flex justify-between text-sm">
												<span className="text-muted-foreground">Subtotal</span>
												<span>R$8 BRL</span>
											</div>
											<div className="flex justify-between text-sm">
												<span className="text-muted-foreground">Imposto</span>
												<span>R$2 BRL</span>
											</div>
											<div className="flex justify-between font-medium">
												<span>Total a pagar hoje</span>
												<span>R$10 BRL</span>
											</div>
										</div>

										<Button className="w-full">Pagar R$120 BRL</Button>

										<div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
											<Lock className="h-4 w-4" />
											Os pagamentos são seguros e criptografados
										</div>
									</div>
								</div>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="assinaturas">
						<div className="mb-4 flex items-center justify-between">
							<div className="flex gap-4">
								<div>
									Todas <span className="text-muted-foreground">80</span>
								</div>
								<div>
									Ativas <span className="text-muted-foreground">0</span>
								</div>
								<div>
									Canceladas <span className="text-muted-foreground">0</span>
								</div>
							</div>
							<Input placeholder="Pesquisar" className="max-w-xs" />
						</div>

						<div className="rounded-md border">
							<div className="grid grid-cols-[1fr,100px,200px,80px,100px,120px,120px] gap-4 p-4 text-sm font-medium">
								<div>CLIENTE</div>
								<div>STATUS</div>
								<div>ASSINATURA</div>
								<div>TRANSAÇÕES</div>
								<div>CICLO</div>
								<div>DATA DE INÍCIO</div>
								<div>DATA DE RENOVAÇÃO</div>
							</div>

							<div className="divide-y">
								{[
									{
										name: "Shandra Bryant",
										email: "shandra.me@gmail.com",
										status: "Ativo",
										transactions: "3",
										cycle: "Mensal",
										startDate: "Mar 22, 2022",
										renewalDate: "Abr 22, 2022",
									},
									{
										name: "Duante Robinson",
										email: "d.robinson@gmail.com",
										status: "Ativo",
										transactions: "16",
										cycle: "Mensal",
										startDate: "Mar 22, 2022",
										renewalDate: "Abr 22, 2022",
									},
									{
										name: "Emery Clarke",
										email: "emmy-clarke71@yahoo.com",
										status: "Ativo",
										transactions: "2",
										cycle: "Mensal",
										startDate: "Mar 22, 2022",
										renewalDate: "Abr 22, 2022",
									},
								].map((subscription, i) => (
									<div
										key={i}
										className="grid grid-cols-[1fr,100px,200px,80px,100px,120px,120px] gap-4 p-4 items-center"
									>
										<div className="flex items-center gap-2">
											<Avatar className="h-8 w-8">
												<AvatarImage
													src={`/placeholder.svg?text=${subscription.name[0]}`}
												/>
												<AvatarFallback>{subscription.name[0]}</AvatarFallback>
											</Avatar>
											<div>
												<div className="font-medium">{subscription.name}</div>
												<div className="text-sm text-muted-foreground">
													{subscription.email}
												</div>
											</div>
										</div>
										<div>
											<span
												className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
													subscription.status === "Ativo"
														? "bg-green-100 text-green-700"
														: subscription.status === "Cancelado"
															? "bg-red-100 text-red-700"
															: "bg-yellow-100 text-yellow-700"
												}`}
											>
												{subscription.status}
											</span>
										</div>
										<div>Campanha de assinatura Pro</div>
										<div>{subscription.transactions}</div>
										<div>{subscription.cycle}</div>
										<div>{subscription.startDate}</div>
										<div>{subscription.renewalDate}</div>
									</div>
								))}
							</div>
						</div>

						<div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
							<div>Mostrando 1-10 de 80</div>
							<div className="flex gap-2">
								<Button variant="outline" size="icon" disabled>
									<ChevronLeft className="h-4 w-4" />
								</Button>
								<Button variant="outline" size="icon">
									<ChevronRight className="h-4 w-4" />
								</Button>
							</div>
						</div>
					</TabsContent>
					<TabsContent value="opcoes">
						<div className="space-y-6">
							<div className="flex items-center justify-between">
								<h3 className="text-2xl font-semibold">Criar assinatura</h3>
								<Select defaultValue="rascunho">
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Status" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="rascunho">Rascunho</SelectItem>
										<SelectItem value="publicado">Publicado</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="border-b">
								<nav className="flex gap-6">
									{["Detalhes", "Preços", "Acesso", "Pós-compra"].map(
										(tab, i) => (
											<button
												key={tab}
												className={`border-b-2 pb-2 px-1 ${
													i === 1
														? "border-primary font-medium"
														: "border-transparent text-muted-foreground"
												}`}
											>
												{tab}
											</button>
										),
									)}
								</nav>
							</div>

							<div className="space-y-8">
								<h4 className="text-xl font-semibold">Preços</h4>

								<div className="flex items-center gap-2">
									<Switch id="allow-repurchase" />
									<div className="flex items-center gap-2">
										<Label htmlFor="allow-repurchase">
											Permitir que membros adquiram esta assinatura novamente
										</Label>
										<HelpCircle className="h-4 w-4 text-muted-foreground" />
									</div>
								</div>

								<div className="rounded-lg bg-slate-50 p-6">
									<p className="mb-4 text-sm text-muted-foreground">
										Adicione até 6 opções de preços diferentes para esta
										assinatura. Por exemplo, uma opção de preço mensal e uma
										anual.
									</p>
									<Button variant="outline">Adicionar preço</Button>
								</div>

								<div className="space-y-4">
									<div className="flex items-center gap-6">
										<div className="flex items-center gap-2">
											<Switch defaultChecked />
											<div className="flex items-center gap-2">
												<span>Atualizar grupo de assinatura</span>
												<HelpCircle className="h-4 w-4 text-muted-foreground" />
											</div>
										</div>
										<div className="flex items-center gap-2">
											<Switch />
											<div className="flex items-center gap-2">
												<span>Oferecer um teste de assinatura</span>
												<HelpCircle className="h-4 w-4 text-muted-foreground" />
											</div>
										</div>
									</div>

									<div className="flex gap-4">
										<Select defaultValue="gold">
											<SelectTrigger className="w-[200px]">
												<SelectValue placeholder="Selecione o plano" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="gold">Plano Gold</SelectItem>
												<SelectItem value="premium">Plano Premium</SelectItem>
											</SelectContent>
										</Select>

										<div className="flex items-center gap-2">
											<Input type="number" className="w-20" placeholder="0" />
											<span className="text-muted-foreground">Dias</span>
										</div>
									</div>
								</div>

								<div className="rounded-lg border">
									<div className="grid grid-cols-2 gap-4 p-4 font-medium text-muted-foreground">
										<div>TIPO DE PAGAMENTO</div>
										<div>PREÇOS</div>
									</div>
									<div className="divide-y">
										{[
											{ type: "Anual", price: "R$100 BRL / ano" },
											{ type: "Mensal", price: "R$10 BRL / mês" },
											{ type: "Pagamento único", price: "R$250 BRL" },
											{
												type: "Parcelamento",
												price: "R$50 BRL + 4x R$25 BRL Mensal",
											},
										].map((item, i) => (
											<div key={i} className="grid grid-cols-2 gap-4 p-4">
												<div className="flex items-center gap-2">
													<span className="font-medium">{item.type}</span>
													{i === 0 && (
														<Badge variant="outline" className="rounded-sm">
															Preferido
														</Badge>
													)}
												</div>
												<div className="flex items-center justify-between">
													<span>{item.price}</span>
													<DropdownMenu>
														<DropdownMenuTrigger asChild>
															<Button variant="ghost" size="sm">
																<MoreHorizontal className="h-4 w-4" />
															</Button>
														</DropdownMenuTrigger>
														<DropdownMenuContent align="end">
															<DropdownMenuItem>Editar</DropdownMenuItem>
															<DropdownMenuItem>
																Definir como preferido
															</DropdownMenuItem>
															<DropdownMenuItem className="text-destructive">
																Remover
															</DropdownMenuItem>
														</DropdownMenuContent>
													</DropdownMenu>
												</div>
											</div>
										))}
									</div>
								</div>

								<div className="flex items-center justify-between pt-4">
									<div className="text-sm text-muted-foreground">Etapa 2/4</div>
									<Button>Próxima</Button>
								</div>
							</div>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
}
