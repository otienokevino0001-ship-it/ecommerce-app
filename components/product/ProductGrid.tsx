import { FC } from 'react';
import { ProductCard } from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface Props {
  products: Product[];
}

export const ProductGrid: FC<Props> = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map(p => <ProductCard key={p.id} {...p} />)}
  </div>
);
