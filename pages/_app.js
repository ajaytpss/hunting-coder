import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider>
      <main className={roboto.className}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </SessionProvider>
  );
}
