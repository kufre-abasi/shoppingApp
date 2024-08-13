// @ts-ignore
// @use-ssr

import localFont from "next/font/local";
// Importing Metadata type from "next"
import type { Metadata } from "next";
import "./globals.css";
// import AuthLayout from "~/components/Layouts/AuthLayout";
import { usePathname } from "next/navigation";
// import FeedLayout from "~/components/Layouts/FeedLayout";
import DefaultLayout from "~/components/Layouts/DefaultLayout";
import Hoc from "~/components/Layouts/Hoc";
import { DarkModeProvider } from "~/Context/DarkModeContext";
import { Poppins } from "@next/font/google";
import { Toaster } from "~/components/ui/toaster";
// import ProtectedRoute from "~/components/Auth/ProtectedRoute";
import { AuthProvider } from "~/Context/AuthContext";

export const metadata: Metadata = {
  title: "Klassy",
  description:
    "Unleash Your Teaching Potential, Earn Rewards, and Shape the Future of Learning",
  keywords: [
    "Klassy",
    "fastest",
    "learning",
    "Teaching",
    "Earn Rewards",
    "potential",
    "waitlist",
  ],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  applicationName: "Klassy",
  authors: [
    {
      name: "King Davies",
      url: "https://m.facebook.com/profile.php/?id=100071299360536",
    },
    {
      name: "Nelson mojoyinoluwa",
      url: "https://www.facebook.com/NelsonMojolaoluwa",
    },
  ],
  referrer: "origin",
  creator: "King Davies",
  publisher: "Klassy",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    url: "/",
    title: "Klassy",
    description:
      "Unleash Your Teaching Potential, Earn Rewards, and Shape the Future of Learning",
    siteName: "Klassy",
    images: [
      {
        url: "/logo.svg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    creator: "@shankhungryman",
    images: "/logo.svg",
    description:
      "Unleash Your Teaching Potential, Earn Rewards, and Shape the Future of Learning",
    title: "klassy",
  },
  verification: {
    google: "",
  },
  abstract:
    "Unleash Your Teaching Potential, Earn Rewards, and Shape the Future of Learning",
};

const poppins = Poppins({
  weight: ["400", "700", "600"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets you need
  variable: "--font-poppins",
});

const gooper = localFont({
  src: [
    {
      path: "../public/Font/Gooper/font/Gooper-Black.woff",

      weight: "700",
    },
  ],
  variable: "--font-gooper",
});
const gooperRegular = localFont({
  src: [
    {
      path: "../public/Font/Gooper/font/Gooper-Regular.woff",
      weight: "500",
    },
  ],
  variable: "--font-gooperRegular",
});
const satoshi = localFont({
  src: [
    {
      path: "../public/Font/Satoshi/Fonts/OTF/Satoshi-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-satoshi",
});
const general_Sans = localFont({
  src: [
    {
      path: "../public/Font/General_sans/Fonts/OTF/GeneralSans-Medium.otf",
      weight: "500",
    },
  ],
  variable: "--font-general_Sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${gooper.variable} ${poppins.className} ${general_Sans.variable} ${satoshi.variable} ${gooperRegular.variable}`}
    >
      <body className="">
        {/* <PostProvider> */}
        {/* <AuthProvider> */}
        {/* <ProtectedRoute> */}
          <DarkModeProvider>
            {/* <TopNav /> */}

            <Hoc>
              {/* <div className="w-screen"> */}
              <div className=" w-full">{children}</div>
              {/* </div> */}
            </Hoc>
          </DarkModeProvider>
          <Toaster />
        {/* </ProtectedRoute> */}
        {/* </AuthProvider> */}
        {/* </PostProvider> */}
      </body>
    </html>
  );
}
