import { NextRequest } from "next/server";
import cookie from "cookie";

export async function GET(request: NextRequest) {
  return new Response(JSON.stringify({ status: "success" }), {
    headers: {
      "Set-Cookie": cookie.serialize("jaapMedia_token", '', {
        httpOnly: false,
        expires: new Date(0), // Expire the cookie immediately
        sameSite: 'none',
        secure: true,
        path: "/",
        domain: process.env.DOMAIN_URL,
      }),
    },
  });
}