import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";
import { MUIThemeProvider } from "../../utils/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nice Store",
  description: "A very nice store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <SessionProvider session={pageProps.pageProps}> */}
        <ReduxProvider>
          <MUIThemeProvider>{children}</MUIThemeProvider>
        </ReduxProvider>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
