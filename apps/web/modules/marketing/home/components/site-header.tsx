import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { Button } from "@ui/components/button";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background">
			<div className="container flex h-16 items-center justify-between">
				<div className="flex items-center gap-8">
					<Link href="/" className="font-bold">
						Circle
					</Link>
					<nav className="hidden md:flex items-center gap-6">
						<div className="flex items-center gap-1">
							Produto
							<ChevronDown className="h-4 w-4" />
						</div>
						<div className="flex items-center gap-1">
							Recursos
							<ChevronDown className="h-4 w-4" />
						</div>
						<Link
							href="/precos"
							className="text-foreground/80 hover:text-foreground"
						>
							Preços
						</Link>
					</nav>
				</div>
				<div className="flex items-center gap-4">
					<Button variant="ghost">Conecte-se</Button>
					<Button>Comece aqui</Button>
				</div>
			</div>
		</header>
	);
}
