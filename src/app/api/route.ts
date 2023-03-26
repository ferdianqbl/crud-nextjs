import { NextRequest, NextResponse as response } from "next/server";

export const GET = async (req: NextRequest) => {
  return response.json({ message: "Hello World" });
};
