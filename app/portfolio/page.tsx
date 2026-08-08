import { Suspense } from "react";
import PortfolioContent from "./PortfolioContent";

export default function PortfolioPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
          <p className="text-gray-400 text-xl">
            Loading portfolio...
          </p>
        </main>
      }
    >
      <PortfolioContent />
    </Suspense>
  );
}