import Image from "next/image";
import Link from "next/link";
import { Button } from "@ui/components/button";
import { Input } from "@ui/components/input";

export function SignUpForm() {
	return (
		<div className="bg-white p-8 rounded-2xl shadow-lg z-20">
			<div className="space-y-6">
				<div>
					<h2 className="text-2xl font-semibold mb-2">
						Comece na HEBREUS{" "}
						<span className="text-yellow-500">gratuitamente</span>
					</h2>
					<p className="text-gray-600 text-sm dark:text-zinc-600">
						Cadastre-se com uma das contas abaixo
					</p>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<Button variant="outline" className="w-full">
						<Image
							src="/placeholder.svg?height=20&width=20"
							alt="Apple"
							width={20}
							height={20}
							className="mr-2"
						/>
						Apple
					</Button>
					<Button variant="outline" className="w-full">
						<Image
							src="/placeholder.svg?height=20&width=20"
							alt="Google"
							width={20}
							height={20}
							className="mr-2"
						/>
						Google
					</Button>
				</div>

				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-gray-200" />
					</div>
					<div className="relative flex justify-center text-sm">
						<span className="px-2 bg-white text-gray-500">Ou</span>
					</div>
				</div>

				<div className="space-y-4">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700"
						>
							Nome
						</label>
						<Input
							id="name"
							name="name"
							type="text"
							placeholder="Seu nome completo"
							className="mt-1"
						/>
					</div>

					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							Email
						</label>
						<Input
							id="email"
							name="email"
							type="email"
							placeholder="Seu email principal"
							className="mt-1"
						/>
					</div>

					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Senha
						</label>
						<Input
							id="password"
							name="password"
							type="password"
							placeholder="Insira uma senha"
							className="mt-1"
						/>
					</div>

					<Button className="w-full">Cadastre-se agora</Button>
				</div>

				<p className="text-xs text-gray-500">
					Ao clicar em "Cadastre-se agora", você concorda com nossos{" "}
					<Link href="/termos" className="text-yellow-600 hover:underline">
						Termos de Uso
					</Link>{" "}
					e{" "}
					<Link href="/privacidade" className="text-yellow-600 hover:underline">
						Política de Privacidade
					</Link>
				</p>

				<div className="text-center">
					<p className="text-sm text-gray-600">
						Já possui uma conta?{" "}
						<Link href="/login" className="text-yellow-600 hover:underline">
							Faça Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
