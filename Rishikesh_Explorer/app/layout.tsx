import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: "Rishikesh | Student · Builder · Explorer",
description:
"Personal website of Rishikesh — exploring technology, artificial intelligence, space, music, and the future.",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return ( <html lang="en"> <body>{children}</body> </html>
);
}