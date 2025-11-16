import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

export const Modal: FC<Props> = ({ children, open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded relative">
        <button className="absolute top-2 right-2" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  );
};
