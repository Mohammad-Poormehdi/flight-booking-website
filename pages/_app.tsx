import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const IranSans = localFont({
  src: [
    { path: "../public/fonts/IRANSansX-Regular.ttf", style: "normal" },
    { path: "../public/fonts/IRANSansXFaNum-Regular.ttf", style: "normal" },
    { path: "../public/fonts/IRANSansX-Bold.ttf", style: "bold" },
    { path: "../public/fonts/IRANSansXFaNum-Bold.ttf", style: "bold" },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={IranSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
