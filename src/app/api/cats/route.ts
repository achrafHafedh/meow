import { NextResponse } from "next/server";

export async function GET() {
  try {
    const externalRes = await fetch(`${process.env.NEXT_EXTERNAL_PUBLIC_API}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!externalRes.ok) {
      return NextResponse.json(
        { error: "Error API" },
        { status: externalRes.status }
      );
    }

    const data = await externalRes.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Error network or server" },
      { status: 500 }
    );
  }
}
