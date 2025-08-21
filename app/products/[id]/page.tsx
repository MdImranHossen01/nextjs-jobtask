// app/products/[id]/page.tsx
import Navbar from "@/components/Navbar";

async function getProduct(id: string) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <div className="border p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl text-gray-700 my-4">${product.price}</p>
          <p className="text-lg">{product.description}</p>
        </div>
      </main>
    </div>
  );
}