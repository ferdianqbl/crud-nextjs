import "./globals.css";

export const metadata = {
  title: "CRUD - Next.js + TypeScript",
  description: "A simple CRUD app built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
