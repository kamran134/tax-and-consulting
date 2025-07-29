import { Button } from '@/components/Button';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold">Welcome to Next.js Template</h1>
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
    </div>
  );
}
