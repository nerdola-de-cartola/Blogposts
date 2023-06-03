import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function GET(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get('secret');

    if (secret !== process.env.SECRET_TOKEN) {
        const body = JSON.stringify({ message: 'Invalid Token' });
        const params = {
            status: 401,
            statusText: 'Unauthorized',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        return new NextResponse(body, params);
    }

    const path = request.nextUrl.searchParams.get('path') || "/";

    revalidatePath(path);

    return NextResponse.json({ revalidated: true });
}