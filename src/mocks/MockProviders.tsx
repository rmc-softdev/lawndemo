import React from 'react'
import QueryProvider from '@/client/QueryProvider';

import { QueryClientProviderProps } from '@tanstack/react-query';
import { store, ReduxProvider } from '@/store/store';



const MockProviders = ({ children }: QueryClientProviderProps) => {
    return (
        <QueryProvider>
            <ReduxProvider store={
                store
            }>
                {children}
            </ReduxProvider>
        </QueryProvider>
    )
}

export default MockProviders