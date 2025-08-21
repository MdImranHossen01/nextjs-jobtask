// app/api/products/route.ts
import { NextResponse } from 'next/server';
import { products } from '@/data/products'; // Adjust path if needed

export async function GET() {
  return NextResponse.json(products);
}


export async function POST(request: Request) {
  const { name, description, price } = await request.json();

  if (!name || !description || !price) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const newProduct = {
    id: (products.length + 1).toString(),
    name,
    description,
    price,
  };

  products.push(newProduct);

  return NextResponse.json(newProduct, { status: 201 });
}