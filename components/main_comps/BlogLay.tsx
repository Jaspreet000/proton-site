// components/Layout.js
import Head from 'next/head';
import { Navbar } from './Navbar';
import Footer from './Footerr';

export default function Layout({ children }: { children: React.ReactNode }, title = "Blog") {
  return (
    <div className="bg-lightBg text-lightText">
      <Head>
        <title>{title} | Your Blog</title>
        <meta name="description" content={`${title} page`} />
      </Head>
      <nav className="flex justify-center"> <Navbar/> </nav>
      <main className="container mx-auto py-12 pt-[74px]">
        {children}
      </main>
      <Footer/>
    </div>
  );
}
