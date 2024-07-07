import axios from 'axios'
import { dispatch } from '@/setup/store'

import { setBestsellingProductsAction, setProductCategoriesAction } from '@/_slice/home.slice'
import { setFooterLinksAction } from '@/_slice/layout,slice'
import { footerLinks } from './mock'

export * from './mock'


export const getHomePageData = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      const data = response.data;
      dispatch(setBestsellingProductsAction(data))

      await axios.get('https://fakestoreapi.com/products/categories')
      .then(response => {
        const data = response.data;
        dispatch(setProductCategoriesAction(data))
      })
      .catch(error => {
        console.error(error);
      });
    };

    dispatch(setFooterLinksAction(footerLinks))

export const initializeAppData = () => {
    getHomePageData()
  }