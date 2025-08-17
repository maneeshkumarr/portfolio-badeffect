import { NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN as string;

export async function GET(req: Request) {
  const url = new URL(req.url);
  const username = url.searchParams.get("username") || "maneeshkumarr";

  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                date
                contributionCount
                color
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await res.json();
    return NextResponse.json(data.user.contributionsCollection.contributionCalendar);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch contributions" }, { status: 500 });
  }
}
