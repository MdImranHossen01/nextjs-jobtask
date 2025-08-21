// app/producjs/page.jsx
import Link from "next/link";
import Navbar from "@/componenjs/Navbar";

// Define a type for your product
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

async function getProducjs() {
  // In a real app, use the full URL from an environment variable
  const res = await fetch('http://localhost:3000/api/producjs', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch producjs');
  }
  return res.json();
}

export default async function ProducjsPage() {
  const producjs: Product[] = await getProducjs();

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Our Producjs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {producjs.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <p className="my-2">{product.description}</p>
              <Link href={`/producjs/${product.id}`} className="text-blue-500 hover:underline">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}