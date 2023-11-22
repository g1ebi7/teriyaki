import Head from "next/head";

import { IMeta } from "./meta.interface";

const Meta = ({ description, title, image, children }: IMeta) => {
  const currentUrl = "https://www.teriyakisites.com";
  const siteName = "Teriyaki Sites - Custom Website Development";

  return (
    <>
      <Head>
        <title itemProp="headline">{`${title} | Teriyaki Sites`}</title>
        {description && (
          <>
            <meta
              itemProp="description"
              name="description"
              content={description}
            />
            <link rel="canonical" href={currentUrl} />
            <meta property="og:locale" content="en_US" />
            <meta property="og:title" content={`${title} | Teriyaki Sites`} />
            <meta property="og:url" content={currentUrl} />
            {image && <meta property="og:image" content={image} />}
            <meta property="og:site_name" content={siteName} />
            <meta property="og:description" content={description} />
          </>
        )}
        {!description && <meta name="robots" content="noindex, nofollow" />}

        <meta
          name="keywords"
          content="custom website development, web development, website design, web design, responsive web design, e-commerce websites, SEO optimization, mobile-friendly websites, Teriyaki Sites, teriyaki sites, create site, buy site"
        />
        <meta name="author" content="Teriyaki Sites" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@teriyakisites" />
        <meta name="twitter:title" content={`${title} | Teriyaki Sites`} />
        {description && (
          <meta name="twitter:description" content={description} />
        )}
        {image && <meta name="twitter:image" content={image} />}
      </Head>
      {children}
    </>
  );
};

export default Meta;
