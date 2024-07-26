import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "A simple todo app with Next.js and shadcn UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <header className="bg-gray-800 p-4 text-white">
          <div className="container mx-auto">
            <h1 className="text-xl font-bold">Todo App</h1>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 p-4 text-white mt-8">
          <div className="container mx-auto">
            <p>© 2024 Todo App</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
