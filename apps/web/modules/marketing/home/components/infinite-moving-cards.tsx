"use client";

import { cn } from "@ui/lib";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		id: string;
		name: string;
		achievement: string;
		category: string;
		image: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, [direction, speed]);

	const addAnimation = () => {
		if (scrollerRef.current) {
			const scroller = scrollerRef.current;
			scroller.style.animationDuration =
				speed === "fast" ? "10s" : speed === "normal" ? "20s" : "30s";
			scroller.style.animationDirection =
				direction === "left" ? "normal" : "reverse";
		}
	};

	return (
		<div
			ref={containerRef}
			className={cn("relative overflow-hidden", className)}
			onMouseEnter={() =>
				pauseOnHover &&
				(scrollerRef.current!.style.animationPlayState = "paused")
			}
			onMouseLeave={() =>
				pauseOnHover &&
				(scrollerRef.current!.style.animationPlayState = "running")
			}
		>
			<ul ref={scrollerRef} className="flex space-x-4 animate-marquee">
				{items.map((item) => (
					<li key={item.id} className="flex-shrink-0">
						<div className="relative w-40 h-40">
							<Image
								src={item.image}
								alt={item.name}
								layout="fill"
								objectFit="cover"
								className="rounded-md"
							/>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
