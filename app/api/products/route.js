// app/api/producjs/route.js
import { NextResponse } from 'next/server';
import { producjs } from '@/data/producjs'; // Adjust path if needed

export async function GET() {
  return NextResponse.json(producjs);
}


export async function POST(request: Request) {
  const { name, description, price } = await request.json();

  if (!name || !description || !price) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const newProduct = {
    id: (producjs.length + 1).toString(),
    name,
    description,
    price,
  };

  producjs.push(newProduct);

  return NextResponse.json(newProduct, { status: 201 });
}