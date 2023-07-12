import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const todos = await prisma.todo.findMany();
    res.status(200).json({ todos });
    return;
  }

  if (req.method === "POST") {
    try {
      const todo = await prisma.todo.create({
        data: {
          title: req.body.title,
          description: req.body.description,
        },
      });
      res.status(200).json({ todo });
    } catch (error) {
      res.status(400).json({ message: "Bad Request" });
    }
  }

  // rest
  else {
    res.status(400).json({ message: "Bad Request" });
  }
}
