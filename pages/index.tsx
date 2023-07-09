import Todos from "@/components/Todos";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Todos />
    </main>
  );
}
