import "./globals.css";

export const metadata = {
  title: "Santhosh Racha | Software Engineer",
  description:
    "Personal portfolio for Santhosh Racha, a Software Engineer based in Hyderabad, India."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
