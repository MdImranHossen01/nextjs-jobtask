// app/page.jsx
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
          <p className="mt-4 text-lg">The best producjs, just for you.</p>
        </section>

        {/* Product Highlighjs Section */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">Featured Producjs</h2>
          {/* You can fetch and display a few producjs here */}
        </section>
      </main>
      <Footer />
    </div>
  );
}