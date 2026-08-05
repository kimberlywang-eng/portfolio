import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-24">
      <p className="font-mono text-accent text-sm mb-3">404</p>
      <h1 className="text-3xl font-semibold text-ink mb-3">Page not found</h1>
      <p className="text-ink-muted mb-8 max-w-sm">
        Whatever you were looking for isn&apos;t here. Maybe it moved, maybe it was never built.
      </p>
      <Link
        href="/"
        className="rounded-full bg-accent/15 border border-accent/50 px-5 py-2.5 text-sm text-accent hover:bg-accent/25 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
