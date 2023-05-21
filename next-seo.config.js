const title = "ZikiLeaks";
const description = "Decentralized WikiLeaks";
const url = "https://zikileaks.vercel.app/";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title,
  description,
  canonical: url,
  openGraph: {
    type: "website",
    locale: "en_IE",
    site_name: "ZikiLeaks",
    title,
    description,
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};
