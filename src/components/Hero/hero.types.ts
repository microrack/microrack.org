export type HeroProps = {
	className?: string;
	children: React.ReactNode;
	formUrl: string;
	texts: {
		heroTitle: string;
		heroDescription: string;
		imgAlt: string;
		kickstarterUrl?: string;
		kickstarterButton?: string;
		formButton: string;
		instButton: string;
	};
};