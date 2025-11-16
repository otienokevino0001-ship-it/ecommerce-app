import "@/styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "Ecommerce App",
  description: "Next-generation ecommerce platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Ecommerce</h1>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/(public)/about">About</Link>
            <Link href="/(shop)/products">Products</Link>
            <Link href="/(shop)/cart">Cart</Link>
            <Link href="/(auth)/login">Login</Link>
          </nav>
        </header>

        <main className="flex-1 p-4">{children}</main>

        <footer className="bg-gray-800 text-white p-4 text-center">
          &copy; {new Date().getFullYear()} Ecommerce App. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
