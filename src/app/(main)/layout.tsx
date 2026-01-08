import { Suspense } from "react";
import { Header } from "@/components/navbar/Header";
import { Categories } from "@/components/navbar/Categories";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div className="h-20" />}>
        <Header />
      </Suspense>
      <Suspense fallback={<div className="h-14" />}>
        <Categories />
      </Suspense>
      {children}
    </div>
  );
}
