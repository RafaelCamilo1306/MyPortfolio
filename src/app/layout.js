import { Geist, Geist_Mono } from "next/font/google";
import BootstrapClient from "@/app/components/BootstrapClient";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata = {
  title: "Rafael Pradal - Portfólio",
  description: "Portifolio de projetos FullStack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" >
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
} 
