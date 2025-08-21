// app/products/page.tsx
import Link from "next/link";
import Navbar from "@/components/Navbar";

// Define a type for your product
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

async function getProducts() {
  // In a real app, use the full URL from an environment variable
  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function ProductsPage() {
  const products: Product[] = await getProducts();

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <p className="my-2">{product.description}</p>
              <Link href={`/products/${product.id}`} className="text-blue-500 hover:underline">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}