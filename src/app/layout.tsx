import "./globals.css";
import { Header } from '..//Componentes/Header'
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Advanc3D Creation - Impressão 3D',
    description: 'Tornando sua ideia em Materialidade',
    openGraph: {
        title: 'Advanc3D Creation - Impressão 3D',
        description: 'Tornando sua ideia em Materialidade',
        images: "https://drive.google.com/file/d/1lcAQwI8zZM5iOWJQN0lqWMWGFd0JSCIn/view?usp=sharing",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
        }
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
