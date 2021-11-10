import {useShopQuery, MediaFile, flattenConnection} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Seo from '../../components/Seo.client';
import Layout from '../../components/Layout.client';
import ProductFaq from '../../components/ProductFaq.server';
import ProductSplit from '../../components/ProductSplit.server';

const FAQ = () => {
  const {data} = useShopQuery({query: QUERY});
  const products = data ? flattenConnection(data.products) : [];

  return (
    <Layout productLink="/products/the-button">
      <Seo shopName="shopName" pgTitle="FAQ" />
      <div className="flex justify-center w-full bg-white">
        <div className="pt-32">
          <ProductFaq product={products[0]} />
          <ProductSplit product={products[0]} />
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;

const QUERY = gql`
  fragment FAQProductDetails on Product {
    id
    title
    handle
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 1) {
      edges {
        node {
          priceV2 {
            currencyCode
            amount
          }
          compareAtPriceV2 {
            currencyCode
            amount
          }
          image {
            ...ImageFragment
          }
          selectedOptions {
            name
            value
          }
        }
      }
    }
    metafields(first: 3) {
      edges {
        node {
          key
          value
          namespace
        }
      }
    }
    media(first: 1) {
      edges {
        node {
          ...MediaFileFragment
        }
      }
    }
  }
  query Products {
    products(first: 1) {
      edges {
        node {
          id
          ...FAQProductDetails
        }
      }
    }
  }
  ${MediaFile.Fragment}
`;
