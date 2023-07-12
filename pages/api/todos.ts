import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body, req.method);
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
      res.status(400).json({ message: "Bad Request from post" });
    }
  }

  if (req.method === "PATCH") {
    try {
      const todo = await prisma.todo.update({
        where: {
          id: req.body.id,
        },
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

  if (req.method === "DELETE") {
    try {
      const todo = await prisma.todo.delete({
        where: {
          id: req.body.id,
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
