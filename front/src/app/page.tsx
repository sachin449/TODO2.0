import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/maincard">
        <Button>hello world</Button>
      </Link>
    </div>
  );
}
