import { Button } from "@ui/components/button";
import { Input } from "@ui/components/input";

export function CtaSection() {
	return (
		<section className="bg-primary py-24">
			<div className="container max-w-4xl">
				<div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
					<div className="max-w-2xl mx-auto text-center space-y-6">
						<h2 className="text-3xl font-bold">
							Pronto para criar sua comunidade?
						</h2>
						<p className="text-muted-foreground">
							Comece hoje mesmo e veja como podemos ajudar sua comunidade a
							crescer.
						</p>

						<form className="flex flex-col md:flex-row gap-4">
							<Input
								type="email"
								placeholder="Seu melhor e-mail"
								className="flex-1"
								required
							/>
							<Button type="submit" size="lg">
								Começar agora
							</Button>
						</form>

						<p className="text-sm text-muted-foreground">
							Ao se inscrever, você concorda com nossos Termos de Serviço e
							Política de Privacidade.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
