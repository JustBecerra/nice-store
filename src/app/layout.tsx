import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";
import { MUIThemeProvider } from "../../utils/provider";
import SessionProvider from "../components/SessionProvider";
import { getServerSession } from "next-auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nice Store",
  description: "A very nice store",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ReduxProvider>
            <MUIThemeProvider>{children}</MUIThemeProvider>
          </ReduxProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
