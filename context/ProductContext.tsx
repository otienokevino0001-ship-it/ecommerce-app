"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

interface ProductFilters {
  category?: string;
  priceRange?: [number, number];
}

interface ProductContextProps {
  filters: ProductFilters;
  setFilters: (filters: ProductFilters) => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<ProductFilters>({});

  return (
    <ProductContext.Provider value={{ filters, setFilters }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProduct must be used within ProductProvider');
  return context;
};
