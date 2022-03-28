import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  title?: string;
}
export const Layout: FC<Props> = ({ children, title }) => {
  const origin = typeof window === "undefined" ? "" : window.location.origin;

  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content=" Julio Gonzalez" />
        <meta name="descripcion" content="Información sobre Pokemon XXX" />
        <meta name="keywords" content={`${title}`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`'La pagina de información sobre ${title}'`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />
      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
