'use client';

import { Button } from '@/components/Button';

export function ClientWrapper() {
  return <Button label="Click Me" onClick={() => alert('Button clicked!')} />;
}
