import { Suspense } from "react";
import QuoteForm from "./QuoteForm";

export default function QuotePage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
          <div className="text-yellow-400 text-xl font-semibold">
            Loading...
          </div>
        </main>
      }
    >
      <QuoteForm />
    </Suspense>
  );
}