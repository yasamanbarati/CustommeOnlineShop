export interface allProductsType {
    id:number
    title: string
    price: number
    category: string
    description: string
    image: string
    rate: number
    count: number
}
export interface footerLinksType {
    title : string
    links : {
        name : string
        path: string
    }[]
}
export interface ReduxBodyType {
    allProducts : allProductsType[]
    productCategories : string[]
    BestsellingProducts : allProductsType[]
}
export interface ReduxLayoutType {
    footerLinks : footerLinksType[]
}
