import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiteHeader } from "@/components/site-header";
import { FeatureCard } from "@/components/feature-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { PricingCard } from "@/components/pricing-card";
import {
	Users,
	CreditCard,
	BarChart,
	Shield,
	Settings,
	MessageSquare,
	Globe,
	Zap,
	Clock,
} from "lucide-react";
import { PaymentSection } from "@/components/payment-section";

export default function Page() {
	return (
		<>
			<SiteHeader />
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				<section className="container grid items-center gap-12 pb-8 pt-6 md:grid-cols-2 md:py-10">
					<div className="flex flex-col gap-4">
						<div className="inline-flex w-fit items-center rounded-full border bg-background px-3 py-1 text-sm">
							<Badge
								variant="secondary"
								className="mr-2 rounded-sm bg-[#65B5A0] text-white"
							>
								Novo
							</Badge>
							Vamos te ajudar a migrar seus pagamentos para a Circle
						</div>
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
							Centralize seus pagamentos, conteúdo e membros em um só lugar.
						</h1>
						<p className="text-xl text-muted-foreground">
							Aumente sua receita com pagamentos flexíveis e convenientes, tudo
							dentro da Circle.
						</p>
						<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
							<Input
								type="email"
								placeholder="Insira seu endereço de e-mail"
								className="max-w-sm border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<Button
								size="lg"
								className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
							>
								Inicie seu teste gratuito de 14 dias
							</Button>
						</div>
						<div className="flex items-center gap-4">
							<div className="flex items-center gap-2">
								<div className="rounded-full bg-[#FF4E4E] p-1">
									<span className="sr-only">G2 Rating</span>
								</div>
								<div className="flex flex-col">
									<div className="flex">★★★★★</div>
									<span className="text-sm">4.9</span>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<div className="rounded-full bg-[#4255FF] p-1">
									<span className="sr-only">Capterra Rating</span>
								</div>
								<div className="flex flex-col">
									<div className="flex">★★★★★</div>
									<span className="text-sm">4.8</span>
								</div>
							</div>
						</div>
					</div>
					<div className="relative aspect-video overflow-hidden rounded-lg bg-[#65B5A0]">
						<Image
							src="/placeholder.svg"
							alt="Circle Platform Preview"
							className="object-cover"
							fill
							priority
						/>
					</div>
				</section>

				<section className="border-t bg-slate-50 py-20">
					<div className="container grid gap-12 md:grid-cols-3">
						<FeatureCard
							title="Evite a complicação de integração com outros"
							description="Simplifique sua operação com uma solução completa e integrada."
						/>
						<FeatureCard
							title="Crie uma experiência de assinatura fácil e transparente"
							description="Ofereça uma jornada de compra simples e clara para seus membros."
						/>
						<FeatureCard
							title="Controle total sobre como você restringe e cobra pelo acesso"
							description="Defina suas próprias regras de acesso e monetização do conteúdo."
						/>
					</div>
				</section>

				<section className="py-20">
					<div className="container">
						<h2 className="mb-12 text-center text-3xl font-bold">
							O que nossos clientes dizem
						</h2>
						<div className="grid gap-6 md:grid-cols-3">
							<TestimonialCard
								quote="A Circle revolucionou a forma como gerenciamos nossa comunidade e pagamentos."
								author="Ana Silva"
								role="Fundadora"
								company="Escola Digital"
							/>
							<TestimonialCard
								quote="Interface intuitiva e suporte excepcional. Melhor decisão que tomamos."
								author="Pedro Santos"
								role="CEO"
								company="Tech Academy"
							/>
							<TestimonialCard
								quote="Aumentamos nossa receita em 40% desde que migramos para a Circle."
								author="Maria Costa"
								role="Diretora"
								company="Comunidade Dev"
							/>
						</div>
					</div>
				</section>

				<section className="border-t bg-slate-50 py-20">
					<div className="container">
						<h2 className="mb-12 text-center text-3xl font-bold">
							Tudo que você precisa para crescer sua comunidade
						</h2>
						<div className="grid gap-8 md:grid-cols-3">
							<div className="flex gap-4">
								<Users className="h-6 w-6 text-[#4255FF]" />
								<div>
									<h3 className="mb-2 font-semibold">Gestão de Membros</h3>
									<p className="text-muted-foreground">
										Controle total sobre seus membros e suas permissões.
									</p>
								</div>
							</div>
							<div className="flex gap-4">
								<CreditCard className="h-6 w-6 text-[#4255FF]" />
								<div>
									<h3 className="mb-2 font-semibold">Pagamentos Flexíveis</h3>
									<p className="text-muted-foreground">
										Aceite diferentes formas de pagamento e moedas.
									</p>
								</div>
							</div>
							<div className="flex gap-4">
								<BarChart className="h-6 w-6 text-[#4255FF]" />
								<div>
									<h3 className="mb-2 font-semibold">Analytics Detalhado</h3>
									<p className="text-muted-foreground">
										Acompanhe métricas importantes em tempo real.
									</p>
								</div>
							</div>
							<div className="flex gap-4">
								<Shield className="h-6 w-6 text-[#4255FF]" />
								<div>
									<h3 className="mb-2 font-semibold">Segurança Avançada</h3>
									<p className="text-muted-foreground">
										Proteção total para seus dados e pagamentos.
									</p>
								</div>
							</div>
							<div className="flex gap-4">
								<Settings className="h-6 w-6 text-[#4255FF]" />
								<div>
									<h3 className="mb-2 font-semibold">Personalização Total</h3>
									<p className="text-muted-foreground">
										Adapte a plataforma à sua marca e necessidades.
									</p>
								</div>
							</div>
							<div className="flex gap-4">
								<MessageSquare className="h-6 w-6 text-[#4255FF]" />
								<div>
									<h3 className="mb-2 font-semibold">Suporte 24/7</h3>
									<p className="text-muted-foreground">
										Assistência especializada sempre que precisar.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="py-20">
					<div className="container">
						<div className="mb-12 text-center">
							<h2 className="mb-4 text-3xl font-bold">
								Planos para todos os tamanhos
							</h2>
							<p className="text-xl text-muted-foreground">
								Escolha o plano ideal para o seu negócio
							</p>
						</div>
						<div className="grid gap-8 md:grid-cols-3">
							<PricingCard
								title="Iniciante"
								price="R$99"
								description="Perfeito para começar sua comunidade"
								features={[
									"Até 100 membros",
									"Pagamentos em Real",
									"Suporte por email",
									"Analytics básico",
								]}
							/>
							<PricingCard
								title="Profissional"
								price="R$299"
								description="Para comunidades em crescimento"
								features={[
									"Até 1.000 membros",
									"Múltiplas moedas",
									"Suporte prioritário",
									"Analytics avançado",
									"Personalização da marca",
								]}
								popular
							/>
							<PricingCard
								title="Enterprise"
								price="Personalizado"
								description="Para grandes organizações"
								features={[
									"Membros ilimitados",
									"Recursos personalizados",
									"Gerente dedicado",
									"API completa",
									"SLA garantido",
								]}
							/>
						</div>
					</div>
				</section>

				<section className="border-t bg-slate-50 py-20">
					<div className="container text-center">
						<h2 className="mb-4 text-3xl font-bold">
							Pronto para transformar sua comunidade?
						</h2>
						<p className="mb-8 text-xl text-muted-foreground">
							Comece seu teste gratuito de 14 dias hoje mesmo.
						</p>
						<Button
							size="lg"
							className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						>
							Começar agora
						</Button>
					</div>
				</section>

				<PaymentSection />
			</main>

			<footer className="border-t py-12">
				<div className="container">
					<div className="grid gap-8 md:grid-cols-4">
						<div>
							<h3 className="mb-4 font-semibold">Produto</h3>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li>Funcionalidades</li>
								<li>Integrações</li>
								<li>Preços</li>
								<li>Casos de Sucesso</li>
							</ul>
						</div>
						<div>
							<h3 className="mb-4 font-semibold">Recursos</h3>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li>Blog</li>
								<li>Guias</li>
								<li>Webinars</li>
								<li>API</li>
							</ul>
						</div>
						<div>
							<h3 className="mb-4 font-semibold">Empresa</h3>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li>Sobre</li>
								<li>Carreiras</li>
								<li>Contato</li>
								<li>Parceiros</li>
							</ul>
						</div>
						<div>
							<h3 className="mb-4 font-semibold">Legal</h3>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li>Privacidade</li>
								<li>Termos</li>
								<li>Segurança</li>
								<li>Cookies</li>
							</ul>
						</div>
					</div>
					<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
						<div className="flex items-center gap-4">
							<Globe className="h-5 w-5" />
							<span className="text-sm text-muted-foreground">
								Português (Brasil)
							</span>
						</div>
						<div className="flex items-center gap-4">
							<Clock className="h-5 w-5" />
							<span className="text-sm text-muted-foreground">
								Segunda a Sexta, 9h às 18h
							</span>
						</div>
						<div className="flex items-center gap-4">
							<Zap className="h-5 w-5" />
							<span className="text-sm text-muted-foreground">
								Suporte rápido via chat
							</span>
						</div>
					</div>
					<div className="mt-8 text-center text-sm text-muted-foreground">
						© 2024 Circle. Todos os direitos reservados.
					</div>
				</div>
			</footer>
		</>
	);
}
