// components/Layout.js
import Head from 'next/head';
import { Navbar } from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }, title = "Blog") {
  return (
    <div className="bg-lightBg text-lightText">
      <Head>
        <title>{title} | Your Blog</title>
        <meta name="description" content={`${title} page`} />
      </Head>
      <nav className="flex justify-center"> <Navbar/> </nav>
      <main className="container mx-auto py-12">
        {children}
      </main>
      <footer className="bg-gray-800 py-6 mt-12">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2024 Your Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
