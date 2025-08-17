import { NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN as string;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const username = url.searchParams.get("username") || "maneeshkumarr";

  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: { Authorization: `Bearer ${GITHUB_TOKEN}` },
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 });
  }
}
