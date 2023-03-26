import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse as response } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const data = await prisma.post.findMany();
  return response.json({ data });
};