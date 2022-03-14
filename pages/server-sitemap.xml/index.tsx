import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch("https://sarnendublogappapi.herokuapp.com/posts");
  const data: any[] = await response.json();

  const fields: ISitemapField[] = data.map((data) => ({
    loc: `https://www.purpleglib.in/${data.id}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}