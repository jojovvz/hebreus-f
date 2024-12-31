"use client";

import { Check } from "lucide-react";
import { HeroFeatures } from "./hero-features";
import { SignUpForm } from "./sign-up-form";
import { StatsSection } from "./stats-section";
import BlurFade from "@ui/components/blur-fade";
import AnimatedShinyText from "@ui/components/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@ui/lib";
import { BackgroundBeams } from "@ui/components/background-beams";
import { Spotlight } from "@ui/components/spotlight";

export function HeroSection() {
	return (
		<div className="relative mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
			<BackgroundBeams className="z-0" />
			<div className="relative z-10 mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
				<Spotlight
					className="-top-40 left-0 md:left-60 md:-top-20"
					fill="white"
				/>
				<div className="space-y-8">
					<div className="z-10 flex items-center justify-left">
						<div
							className={cn(
								"group rounded-full border border-black/5 bg-neutral-100 text-base text-black transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
							)}
						>
							<AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-black-300 hover:duration-300 hover:dark:text-white">
								<span>
									A Solução de Pagamentos Inteligente para o Mercado Digital
								</span>
								<ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
							</AnimatedShinyText>
						</div>
					</div>
					<BlurFade delay={0.25} inView>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
							Centralize seus pagamentos, conteúdo e membros{" "}
							<span className="bg-gradient-to-r from-yellow-600 to-yellow-600 bg-clip-text text-transparent">
								em um só lugar
							</span>
						</h1>
					</BlurFade>
					<HeroFeatures />

					<div className="flex items-center gap-2">
						<div className="flex">
							{[1, 2, 3, 4].map((star) => (
								<svg
									key={star}
									className="h-5 w-5 text-yellow-400"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
								</svg>
							))}
							<svg
								className="h-5 w-5 text-yellow-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						</div>
						<span className="text-sm text-gray-600">
							4.8 • baseado em +500 avaliações
						</span>
					</div>
				</div>
			</div>
			<SignUpForm />
		</div>
	);
}
