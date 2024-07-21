import { ClerkProvider } from '@clerk/nextjs'
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";


export const metadata = {
  title: "Multilingual News",
  description: "Multilingual News/Article Website FYP Laiba",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
