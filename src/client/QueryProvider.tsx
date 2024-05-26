'use client';
import { QueryClient, QueryClientProvider, dehydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

export const queryClient = new QueryClient();
export const dehydratedState = dehydrate(queryClient);

interface QueryProviderProps {
  children: React.ReactNode;
}

const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={process.env.NODE_ENV === 'development'} />
    </QueryClientProvider>
  );
};

export default QueryProvider;
