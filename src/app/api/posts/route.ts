import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse as response } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  let data;
  if (id) {
    data = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });
  } else data = await prisma.post.findMany();
  return response.json({ data });
};

export const POST = async (req: NextRequest) => {
  const { title, content } = await req.json();
  await prisma.post.create({
    data: {
      title,
      content,
    },
  });
};

export const PUT = async (req: NextRequest) => {
  const { title, content = "", id } = await req.json();
  const data = await prisma.post.update({
    where: {
      id: Number(id),
    },
    data: {
      title,
      content,
    },
  });

  return response.json({ data });
};

export const DELETE = async (req: NextRequest) => {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");
  await prisma.post.delete({
    where: {
      id: Number(id),
    },
  });
  // return response.json({ data });
};
