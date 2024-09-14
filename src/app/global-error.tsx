"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="h-screen w-screen">
        <div className="flex w-max flex-col items-center justify-center">
          <h2>{error.digest}</h2>
          <button className="bg-amber-400 px-2 py-3" onClick={() => reset()}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
