import { NextRequest } from "next/server";
import cookie from "cookie";
export async function POST(request: NextRequest) {
  const req = await request.json();

  return new Response(JSON.stringify({ status: "success" }), {
    headers: {
      "Set-Cookie": cookie.serialize("user:token", req?.token, {
        httpOnly: false,
        maxAge: 60 * 60 * 24 * 7,
        sameSite: 'none',
        secure: true,
        path: "/",
        domain: process.env.DOMAIN_URL,
      }),
    },
  });
}
