export default function ErrorPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-[var(--text-primary)]">404 Not Found</h1>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">The page you are looking for does not exist.</p>
        </div>
    );
}