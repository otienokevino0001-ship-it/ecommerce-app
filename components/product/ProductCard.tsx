import { FC } from 'react';
import Link from 'next/link';

interface Props {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const ProductCard: FC<Props> = ({ id, name, price, image }) => (
  <Link href={`/products/${id}`} className="border rounded p-2 hover:shadow-lg transition">
    <img src={image} alt={name} className="w-full h-48 object-cover mb-2 rounded" />
    <h3 className="font-bold">{name}</h3>
    <p className="text-blue-600 font-semibold">${price.toFixed(2)}</p>
  </Link>
);
