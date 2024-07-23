"use client";

import { ReactNode } from "react";
import {
    MutationCache,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";

interface Props {
    children: ReactNode;
}

export const ReactQueryProvider = ({ children }: Props) => {
    const queryClient = new QueryClient({
        mutationCache: new MutationCache({
            onError: error => {
                if (error && error.message) {
                }
            },
        }),
    });

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};