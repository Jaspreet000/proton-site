"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '@/components/main_comps/Navbar';


export default function Layout({ children, title}: { children: React.ReactNode; title: string }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="flex justify-center"> <Navbar/> </nav>
      <main className="container mx-auto py-12 px-6">{children}</main>
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2024 AppliedData. All rights reserved.</p>
      </footer>
    </div>
  );
}
