import { ProtocolSelector } from "@/components/selector";
import { Dashboard } from "@/components/Dashboard";
import Header from "@/template/header";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <Header />
      <Dashboard />
    </main>
  );
}
