import "./globals.css";

export const metadata = {
  title: "Placar",
  description: "Giovanna x Debru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
