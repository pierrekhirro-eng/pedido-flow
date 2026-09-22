import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Endpoint de pedidos ainda não implementado.' }, { status: 501 });
}
