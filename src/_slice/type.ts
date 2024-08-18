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
  quantity?: number | undefined;
}
export interface footerLinksType {
  id: number;
  title: string;
  links: {
    id: number;
    name: string;
    path: string;
  }[];
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
export interface ReduxBodyType {
  allProducts: allProductsType[];
  productCategories: CategoriesProps[];
  BestsellingProducts: allProductsType[];
}
export interface ReduxLayoutType {
  footerLinks: footerLinksType[];
}
export interface ReduxShoppingCardType {
  cartItems: allProductsType[];
  totalItems: number;
  countCart: number
}
