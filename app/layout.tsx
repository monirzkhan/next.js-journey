

import "./globals.css";
import { Inter, Geist_Mono, Instrument_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { Navbar } from "@/components/shared/navbar";
import { getMe } from "@/service/getMe";

const instrumentSansHeading = Instrument_Sans({ subsets: ['latin'], variable: '--font-heading' });

const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' });

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const user = await getMe();
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", inter.variable, "font-mono", geistMono.variable, instrumentSansHeading.variable)}
    >
      <body className="min-h-full flex flex-col">
        {/* <Navbar user={user}></Navbar> */}

        {children}
        <Toaster position="top-right" richColors/>

      </body>
    </html>
  );
}
