import { Card, CardContent } from "@ui/components/card";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/components/avatar";

interface TestimonialCardProps {
	quote: string;
	author: string;
	role: string;
	company: string;
	avatarUrl?: string;
}

export function TestimonialCard({
	quote,
	author,
	role,
	company,
	avatarUrl,
}: TestimonialCardProps) {
	if (!quote || !quote[0]) {
		return null; // or some fallback UI
	}

	return (
		<Card className="h-full">
			<CardContent className="flex h-full flex-col gap-4 p-6">
				<div className="flex-1">
					<p className="text-lg text-muted-foreground">&ldquo;{quote}&rdquo;</p>
				</div>
				<div className="flex items-center gap-4">
					<Avatar>
						<AvatarImage src={avatarUrl} />
						<AvatarFallback>{author[0]}</AvatarFallback>
					</Avatar>
					<div>
						<p className="font-semibold">{author}</p>
						<p className="text-sm text-muted-foreground">
							{role}, {company}
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
