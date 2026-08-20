import "./globals.css";

export const metadata = {
  title: "Santhosh Racha | Java Developer",
  description:
    "Personal portfolio for Santhosh Racha, a Java Developer based in Hyderabad, India."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
