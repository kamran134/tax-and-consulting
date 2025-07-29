import { worker } from 'lib/mocks/browser';

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  worker.start();
}
