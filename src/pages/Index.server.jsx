import {
  useShopQuery,
  flattenConnection,
  ProductProviderFragment,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Layout from '../components/Layout.client';
import MediaPlaceholder from '../components/MediaPlaceholder';
import TickerTape from '../components/TickerTape.client';
import About from '../components/About.server';
import Hero from '../components/Hero.server';
import ProductSplit from '../components/ProductSplit.server';
import SocialShare from '../components/SocialShare.server';

export default function Index() {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      numProducts: 1,
      numProductMetafields: 0,
      numProductVariants: 1,
      numProductMedia: 1,
      numProductVariantMetafields: 10,
      numProductVariantSellingPlanAllocations: 10,
      numProductSellingPlanGroups: 10,
      numProductSellingPlans: 10,
    },
    cache: {
      maxAge: 60,
      staleWhileRevalidate: 60 * 60 * 24,
    },
  });

  const products = data ? flattenConnection(data.products) : [];

  return (
    <Layout useTransparentHeader>
      {products[0] ? (
        <Hero handle={products[0].handle} />
      ) : (
        <MediaPlaceholder text="Your product here" />
      )}
      <TickerTape text={['Free shipping to the U.S. and Canada']} />

      <ProductSplit product={products[0]} />
      <About />
      <SocialShare />
    </Layout>
  );
}

const QUERY = gql`
  query indexContent(
    $numProducts: Int!
    $numProductMetafields: Int!
    $numProductVariants: Int!
    $numProductMedia: Int!
    $numProductVariantMetafields: Int!
    $numProductVariantSellingPlanAllocations: Int!
    $numProductSellingPlanGroups: Int!
    $numProductSellingPlans: Int!
  ) {
    products(first: $numProducts) {
      edges {
        node {
          ...ProductProviderFragment
        }
      }
    }
  }

  ${ProductProviderFragment}
`;
