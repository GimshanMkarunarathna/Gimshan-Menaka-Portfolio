import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google"; // Poppins import කලා
import "./globals.css";

// 1. දැනට තියෙන Geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Poppins font එක initialize කිරීම (body text එකට)
// Poppins is a variable font, no weights needed. subsets latin requires.
// variable property allows easy access via CSS/Tailwind
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: 'swap',
  // Error එකට හේතුව: 'weight' property එක missing වීමයි.
  // Poppins variable font එකක් නොවන නිසා weights array එකක් දිය යුතුය.
  // e.g., 300 (Light), 400 (Regular), 600 (Semi-Bold), 700 (Bold)
  weight: ['300', '400', '600', '700'], 
});

// 3. Metadata - ඔබගේ title එක update වී ඇත
export const metadata: Metadata = {
  title: "Gimshan Menaka Karunaratne | Portfolio",
  description: "I am Gimshan Menaka Karunaratne, a third-year Management Information Systems (MIS) undergraduate at NSBM Green University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // html tag එකේ className එකට poppins.variable add කලා
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} scroll-smooth`}
    >
      <head>
        {/* Handlee Font eka Shan. logo ekata oni nisa meka add kala - (ඉවත් කලේ නෑ) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Handlee&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* 4. body className එක update කලා Poppins font variable එක default font එක ලෙස set කිරීමට */}
      <body className="antialiased font-poppins selection:bg-orange-500/30 selection:text-white">
        {/* Oyaage page.tsx eke Header/Footer thiyana nisa 
           me layout eka simple wenna oni. 
        */}
        {children}
      </body>
    </html>
  );
}