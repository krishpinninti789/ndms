import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

export default function AdminLayout({ children }) {
  return (
    <div className={`min-h-screen bg-background `}>
      <main className="flex min-h-screen flex-col">{children}</main>
      <Toaster />
    </div>
  );
}
