import { motion } from "framer-motion";
import { Button } from "@ui/components/button";
import { goldGradient, goldText } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BlogPostLayoutProps {
	children: React.ReactNode;
	frontmatter: {
		title: string;
		date: string;
		category: string;
		readTime: string;
	};
}

export function BlogPostLayout({ children, frontmatter }: BlogPostLayoutProps) {
	return (
		<div className="min-h-screen bg-background">
			<main className="container mx-auto px-4 py-12">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<Link href="/blog" passHref>
						<Button
							variant="link"
							className="mb-6 text-gray-400 hover:text-gray-300"
						>
							<ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o Blog
						</Button>
					</Link>
					<h1
						className={`text-4xl md:text-5xl font-bold mb-4 ${goldText} bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600`}
					>
						{frontmatter.title}
					</h1>
					<div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-400">
						<span>{frontmatter.date}</span>
						<span>•</span>
						<span>{frontmatter.category}</span>
						<span>•</span>
						<span>{frontmatter.readTime} de leitura</span>
					</div>
					<div className="prose prose-invert max-w-none">{children}</div>
				</motion.div>
			</main>
		</div>
	);
}
