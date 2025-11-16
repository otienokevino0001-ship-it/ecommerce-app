import { FC, ReactNode, useState } from 'react';

interface Props {
  label: string;
  children: ReactNode;
}

export const Dropdown: FC<Props> = ({ label, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="px-4 py-2 border rounded">{label}</button>
      {open && <div className="absolute mt-2 bg-white border rounded shadow-lg">{children}</div>}
    </div>
  );
};
