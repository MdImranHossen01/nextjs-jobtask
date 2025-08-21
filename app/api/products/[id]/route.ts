import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function GET(request, context) {
  const productId = context.params.id;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}