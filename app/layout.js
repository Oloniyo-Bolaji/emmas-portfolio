import "./globals.css";


export const metadata = {
  title: "Odewole Emmanuel's Portfolio",
  description: "My Project Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#00b4f010]">{children}</body>
    </html>
  );
}
