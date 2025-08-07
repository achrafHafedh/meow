import Header from "@/components/Header/Header";

import SeoHead from "./Head";
import { Providers } from "./Providers";

import "./../styles/global.css";

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <SeoHead />
      <body suppressHydrationWarning={true}>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
