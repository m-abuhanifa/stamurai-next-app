import All from "@/components/All";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="m-10">
      <All />
    </main>
  );
}
