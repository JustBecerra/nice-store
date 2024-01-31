import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const email = formData.get("email") as string | null;
    const fullname = formData.get("fullname") as string | null;
    const address = formData.get("address") as string | null;
    const password = formData.get("password") as string | null;

    // Validate form fields

    // Hash the password
    if (email && fullname && address && password) {
      const hashedPassword = await hash(password, 10);

      // Insert into the database
      await sql`
      INSERT INTO USERS (email, fullname, address, password)
      VALUES (${email}, ${fullname}, ${address}, ${hashedPassword})
    `;

      console.log({ email, fullname, address, password });
    } else {
      return NextResponse.json({ message: "Invalid form data" });
    }
  } catch (e) {
    console.log({ e });
    return NextResponse.json({ message: "error" });
  }

  return NextResponse.json({ message: "success" });
}
