import NumberTicker from "@ui/components/number-ticker";
import { cn } from "@ui/lib";

interface Stat {
	id: number;
	sufixo: string;
	prefixo: string;
	value: string;
	label: string;
}

export function StatsSection({ className }: { className?: string }) {
	const stats: Stat[] = [
		{
			id: 1,
			sufixo: "Mil",
			prefixo: "+",
			value: "200",
			label: "PRODUTORES VENDENDO AQUI",
		},
		{
			id: 2,
			sufixo: "Mi",
			prefixo: "R$",
			value: "50",
			label: "EM VENDAS",
		},
		{
			id: 3,
			sufixo: "Mi",
			prefixo: "+",
			value: "25",
			label: "DE COMPRADORES",
		},
	];

	return (
		<div
			className={cn(
				"text-center text-black py-12 bg-gradient-to-tr from-slate-50 to-slate-100",
				className,
			)}
		>
			<p className="text-sm font-medium text-yellow-600 mb-4">
				A MAIOR PLATAFORMA DO MUNDO DE PRODUTOS DIGITAIS
			</p>
			<div className="flex flex-col items-center max-w-screen-md mx-auto">
				<div className="grid md:grid-cols-3 gap-8 justify-items-center w-full">
					{stats.map((stat) => (
						<div key={stat.id} className="text-center">
							<h3 className="text-4xl font-bold mb-2">
								{stat.prefixo}
								<NumberTicker value={Number(stat.value)} />
								{stat.sufixo}
							</h3>
							<p className="text-sm text-gray-600">{stat.label}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
