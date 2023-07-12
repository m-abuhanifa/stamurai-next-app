import { NextApiRequest, NextApiResponse } from "next";

export default function cors(
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://stamurai-next-app.vercel.app"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // Preflight request response
    res.status(200).end();
    return;
  }

  // Pass the request to the next handler
  next();
}
