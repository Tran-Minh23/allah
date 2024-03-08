import { log } from 'console';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token');
}

export async function POST(request: NextRequest) {
  console.log(request);

  // const token = request.cookies.get('token');

  return new Response('Hello, Next.js!', {
    status: 200,
  });
}
