import "@/styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Navbar from "@/Components/Navbar/Navbar";
export default function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();

    return (
        <>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <main
                        className={`flex min-h-screen flex-col `}
                        data-theme="dark"
                    >
                        <header>
                            <Navbar />
                        </header>
                        <div className="bg-neutral h-[calc(100vh-6rem)] ">
                            <Component {...pageProps} />
                        </div>
                    </main>
                </QueryClientProvider>
            </RecoilRoot>
        </>
    );
}
