// app/api/products/[id]/route.ts
import { NextResponse } from 'next/server';
import { products } from '@/data/products'; // Adjust path if needed

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find(p => p.id === params.id);
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json(product);
}