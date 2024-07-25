export interface allProductsType {
  id: number | string;
  title: string;
  price: number;
  category?: string;
  description?: string;
  image: string;
  rating?: number | undefined;
  count?: number;
  discount?: number;
}
export interface footerLinksType {
  title: string;
  links: {
    name: string;
    path: string;
  }[];
}
export interface ReduxBodyType {
  allProducts: allProductsType[];
  productCategories: CategoriesProps[];
  BestsellingProducts: allProductsType[];
}
export interface ReduxLayoutType {
  footerLinks: footerLinksType[];
}
export interface CategoriesProps {
  id: string;
  name: string;
  image: string;
  link: string;
}
export interface ImageListProps {
  img: string;
  title: string;
  rows?: number;
  cols?: number;
}
