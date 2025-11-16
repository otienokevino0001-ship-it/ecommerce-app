import { FC } from 'react';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';
import { MobileMenu } from './MobileMenu';

export const Header: FC = () => (
  <header className="flex justify-between items-center p-4 shadow-md">
    <Logo />
    <NavMenu />
    <MobileMenu />
  </header>
);
