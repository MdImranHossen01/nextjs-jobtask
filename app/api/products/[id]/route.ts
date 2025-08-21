// app/api/products/[id]/route.ts (Corrected code)
import { NextResponse, type NextRequest } from 'next/server';
import { products } from '@/data/products';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const productId = params.id;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json(product);
}