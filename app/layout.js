import { Noto_Sans_JP } from "next/font/google";
import "./styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Menu from "./components/layout/Menu/Menu";
import Footer from "./components/layout/Footer/Footer";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
  title: {
    template: "%s | jnpi-Portfolio-Blog",
    default: "jnpi-Portfolio-Blog",
  },
  description: "jnpit6's portfolio",
  siteName: "jnpi-Portfolio-Blog",
  url: "https://jnpi-portfolio-blog.netlify.app/",
  locale: "ja-JP",
  type: "website",
  openGraph: {
    title: {
      template: "%s | jnpi-Portfolio-Blog",
      default: "jnpi-Portfolio-Blog",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA_ID}`} />
      <body className={notoSansJP.className}>
        <Menu>{children}</Menu>
        <Footer />
      </body>
    </html>
  );
}
