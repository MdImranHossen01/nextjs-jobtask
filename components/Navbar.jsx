"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="font-bold">Home</Link>
        <div>
          <Link href="/products" className="mr-4">Products</Link>
          {session ? (
            <>
              <Link href="/dashboard/add-product" className="mr-4">Add Product</Link>
              <button onClick={() => signOut()}>Logout</button>
            </>
          ) : (
            <button onClick={() => signIn('google')}>Login</button>
          )}
        </div>
      </div>
    </nav>
  );
}