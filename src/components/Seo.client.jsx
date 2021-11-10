import {useShop, Helmet} from '@shopify/hydrogen/client';

import {SocialShopifySupply} from '../assets/images';

export default function Seo({shopName, product, pgTitle}) {
  const {locale} = useShop();
  const lang = locale.split(/[-_]/)[0];
  const nonPdpPageTitle = pgTitle;

  /* TODO: Find a way to get the full URL */
  const url = typeof window === 'undefined' ? '' : window.location.href;
  const origin = typeof window === 'undefined' ? '' : window.location.origin;
  const fullSocialShopifySupply = origin + SocialShopifySupply;

  if (product) {
    const variant = product.variants.edges[0].node;
    const price = variant.priceV2;
    const image = product.images.edges[0]?.node;
    const title = product.seo?.title ?? product.title;
    const description = product.seo?.description ?? product.description;

    return (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {url && <meta property="og:url" content={url} />}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="product" />
        <meta property="og:description" content={description} />
        <meta property="og:price:amount" content={price.amount} />
        <meta property="og:price:currency" content={price.currencyCode} />
        <link rel="preconnect" href="//cdn.shopify.com" />
        <link rel="preconnect" href="//shopify.supply" />
        <link rel="dns-prefetch" href="//cdn.shopify.com" />
        <link rel="dns-prefetch" href="//shopify.supply" />

        <link
          rel="preload"
          href="/src/ApfelGrotezk-Fett.otf"
          as="font"
          crossorigin
        />
        <link
          rel="preload"
          href="/src/ApfelGrotezk-Regular.woff"
          as="font"
          crossorigin
        />
        <link
          rel="preload"
          href="/src/ShopifySans-Regular.otf"
          as="font"
          crossorigin
        />

        {image && <meta property="og:image" content={image.originalSrc} />}
        {image && (
          <meta property="og:image:secure_url" content={image.originalSrc} />
        )}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "${product.title}",
            "image": [
              ${image ? `"${image.originalSrc}"` : ''}
            ],
            "description": "${description}",
            "brand": {
              "@type": "Brand",
              "name": "${product.vendor}"
            },
            "offers": {
              "@type": "Offer",
              "url": "${url}",
              "priceCurrency": "${price.currencyCode}",
              "price": "${price.amount}",
              "availability": "https://schema.org/${
                variant.availableForSale ? 'InStock' : 'OutOfStock'
              }"
            }
          }
        `}</script>
      </Helmet>
    );
  }

  /**
   * Return a global SEO helper if no other props were passed.
   * Useful for placing in the "main" <App> container.
   */
  return (
    <Helmet defaultTitle={shopName} titleTemplate={`%s - ${shopName}`}>
      <html lang={lang} />
      <meta property="og:site_name" content={shopName} />

      <title>{nonPdpPageTitle}</title>
      <meta
        name="description"
        content="With Shopify Supply, Get the limited-edition releases and one-of-a-kind products designed for entrepreneurs."
      />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={nonPdpPageTitle} />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="With Shopify Supply, Get the limited-edition releases and one-of-a-kind products designed for entrepreneurs."
      />

      <link rel="preconnect" href="//cdn.shopify.com" />
      <link rel="preconnect" href="//shopify.supply" />
      <link rel="dns-prefetch" href="//cdn.shopify.com" />
      <link rel="dns-prefetch" href="//shopify.supply" />

      <link
        rel="preload"
        href="/src/ApfelGrotezk-Fett.otf"
        as="font"
        crossorigin
      />
      <link
        rel="preload"
        href="/src/ApfelGrotezk-Regular.woff"
        type="font/woff2"
        as="font"
        crossorigin
      />
      <link
        rel="preload"
        href="/src/ShopifySans-Regular.otf"
        as="font"
        crossorigin
      />

      <meta property="og:image" content={fullSocialShopifySupply} />
      <meta property="og:image:secure_url" content={fullSocialShopifySupply} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={nonPdpPageTitle} />
      <meta
        name="twitter:description"
        content="With Shopify Supply, Get the limited-edition releases and one-of-a-kind products designed for entrepreneurs."
      />
    </Helmet>
  );
}
