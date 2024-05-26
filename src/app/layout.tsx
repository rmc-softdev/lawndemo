import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import QueryProvider from '@/client/QueryProvider';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { prefetchAnimes } from '@/server/actions/prefetchAnimes';

import { store, ReduxProvider } from '@/store/store';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AniWorld',
  description: 'Quick demo of a modern stack',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['animes', ''],
    queryFn: prefetchAnimes,
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider store={store}>
          <QueryProvider>
            <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
          </QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
