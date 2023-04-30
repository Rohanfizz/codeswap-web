import "@/styles/globals.css";
import { useState } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import type { AppProps } from "next/app";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import Navbar from "@/Components/Navbar/Navbar";
import Alert from "@/Components/UI/Alert";
export default function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();

    const [theme, setTheme] = useState("default")
    return (
        <>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <main
                        className={`flex min-h-screen flex-col `}
                        data-theme={theme}
                    >
                        <header>
                            <Navbar setTheme={setTheme}/>
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
