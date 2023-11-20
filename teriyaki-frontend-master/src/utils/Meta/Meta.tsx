import Head from "next/head";
import { useRouter } from "next/router";

import { IMeta } from "./meta.interface";

const Meta = ({ description, title, image, children }: IMeta) => {
  const { asPath } = useRouter();
  const currentUrl = `${process.env.APP_URL}${asPath}`;

  return (
    <>
      <Head>
        <title itemProp="headline">{`Teriyaki | ${title}`}</title>
        {description ? (
          <>
            <meta
              itemProp="description"
              name="description"
              content={description}
            />
            <link rel="canonical" href={currentUrl} />
            <meta property="og:locale" content="en" />
            <meta property="og:title" title={title} />
            <meta property="og:url" content={currentUrl} />
            {image && <meta property="og:image" content={image} />}
            <meta property="og:site_name" content={"Teriyaki"} />
            <meta property="og:description" content={description} />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  );
};
export default Meta;
