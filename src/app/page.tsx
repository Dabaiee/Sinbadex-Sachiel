import { Dashboard } from "@/template/dashboard";
import Header from "@/template/header";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Header />
      <Dashboard />
      
    </main>
  );
}
