import { IProduct } from './types';

const filterProducts = (products: IProduct[], rate: number): IProduct[] => {
  return products.filter((product) => product.rating.rate > rate);
};

export default filterProducts;
