import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = process.env.jfJZesx62uPt8DtewrBwVdxaB59u2r4fk4PuYVSX;
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    const data = await response.json();
    return NextResponse.json(data);
}

