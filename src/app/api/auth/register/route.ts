import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";
export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    //validate email and password
    const hashedPassword = await hash(password, 10);
    const response = await sql`
    INSERT INTO USERS (email, password)
    VALUES (${email}, ${hashedPassword})
    `;
    console.log({ email, password });
  } catch (e) {
    console.log({ e });
    return NextResponse.json({ message: "error" });
  }
  return NextResponse.json({ message: "success" });
}
