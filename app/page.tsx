// app/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        {/* Hero Section */}
        <section className="text-center my-16">
          <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
          <p className="mt-4 text-lg">The best products, just for you.</p>
        </section>

        {/* Product Highlights Section */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>
          {/* You can fetch and display a few products here */}
        </section>
      </main>
      <Footer />
    </div>
  );
}