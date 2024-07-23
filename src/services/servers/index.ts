
import { dispatch } from "@/setup/store";
import { setFooterLinksAction } from "@/_slice/layout,slice";
import { footerLinks } from "./mock";

export * from "./mock";

export const getHomePageData = async () => {

};

export const initializeAppData = () => {
  getHomePageData();
};
