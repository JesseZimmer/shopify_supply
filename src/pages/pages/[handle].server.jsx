import {useParams} from 'react-router-dom';
import {RawHtml, useShopQuery} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Layout from '../../components/Layout.client';
import BlobSection from '../../components/BlobSection.client';
import Seo from '../../components/Seo.client';

export default function Page() {
  const {handle} = useParams();
  const {data} = useShopQuery({query: QUERY, variables: {handle}});

  const {title, body} = data.pageByHandle;

  return (
    <Layout>
      <div className="flex justify-center bg-white">
        <Seo shopName="Shopify Supply" pgTitle={title} />
        <div className="flex flex-col items-start max-w-4xl px-4 pt-32 pb-12 md:px-12 md:pb-48 text-secondary md:pt-52 font-primary font-mxl sm:font-xl">
          <div className="z-0 h-1 transform -translate-y-8 sm:scale-150">
            <BlobSection backgroundColor="#79DFFF" />
          </div>
          <p className="z-10 text-left font-title text-m4xl md:text-4xl">
            {title}
          </p>
          <div className="z-10 max-w-2xl pt-4 mx-4 md:pt-6 lg:ml-28 text-mxl sm:text-xl">
            <RawHtml string={body} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

const QUERY = gql`
  query PageDetails($handle: String!) {
    pageByHandle(handle: $handle) {
      title
      body
    }
  }
`;
