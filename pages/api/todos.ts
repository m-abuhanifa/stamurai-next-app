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
      return res.status(200).json({ todo });
    } catch (error) {
      return res.status(400).json({ message: "Bad Request from post" });
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
          status: req.body.status,
        },
      });
      return res.status(200).json({ todo });
    } catch (error) {
      return res.status(400).json({ message: "Bad Request" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const todo = await prisma.todo.delete({
        where: {
          id: req.body.id,
        },
      });
      return res.status(200).json({ todo });
    } catch (error) {
      return res.status(400).json({ message: "Bad Request" });
    }
  }
  // rest
  else {
    return res.status(400).json({ message: "Bad Request" });
  }
}
