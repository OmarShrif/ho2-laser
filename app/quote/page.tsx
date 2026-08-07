import { Suspense } from "react";
import QuoteForm from "./QuoteForm";

export default function QuotePage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
          <h1 className="text-3xl">Loading...</h1>
        </main>
      }
    >
      <QuoteForm />
    </Suspense>
  );
}