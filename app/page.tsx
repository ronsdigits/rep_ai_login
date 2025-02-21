import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to My App</h2>
        <p className="text-gray-600">
          This is a simple Next.js application with Supabase authentication.
        </p>
      </main>
    </div>
  );
}