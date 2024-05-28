import { Button } from "@/components/ui/button";
import { Dashboard } from "@/template/dashboard";
import { NavigationMenuDemo } from "@/template/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <NavigationMenuDemo />
      <Dashboard />
      
    </main>
  );
}
