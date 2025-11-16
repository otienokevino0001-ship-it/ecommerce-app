import { FC, ReactNode } from 'react';

interface Props {
  text: string;
  children: ReactNode;
}

export const Tooltip: FC<Props> = ({ text, children }) => (
  <div className="relative group">
    {children}
    <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded">
      {text}
    </span>
  </div>
);
