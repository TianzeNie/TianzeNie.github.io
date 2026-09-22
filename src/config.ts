import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Tianze 的小站",
	subtitle: "记录学习，也收藏日常",
	lang: "zh_CN",
	themeColor: { hue: 235, fixed: true },
	banner: {
		enable: true,
		src: "assets/images/demo-banner.png",
		position: "center",
		credit: { enable: false, text: "", url: "" },
	},
	toc: { enable: true, depth: 2 },
	favicon: [],
};
export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{ name: "GitHub", url: "https://github.com/TianzeNie", external: true },
	],
};
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png",
	name: "Tianze",
	bio: "记录学习，也收藏日常。",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/TianzeNie",
		},
	],
};
export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
