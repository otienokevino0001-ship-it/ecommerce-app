import { FC } from 'react';

interface Props {
  label: string;
  color?: string;
}

export const Badge: FC<Props> = ({ label, color = 'bg-blue-600' }) => (
  <span className={`text-white px-2 py-1 rounded ${color} text-sm`}>{label}</span>
);
