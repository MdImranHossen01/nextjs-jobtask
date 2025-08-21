// app/login/page.tsx
"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/products");
    }
  }, [session, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Login to Continue</h1>
        <button
          onClick={() => signIn('google', { callbackUrl: '/products' })}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}