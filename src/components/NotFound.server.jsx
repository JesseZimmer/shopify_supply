import {Link} from '@shopify/hydrogen/client';

import BlobSection from './BlobSection.client';
import Layout from './Layout.client';

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen px-4 text-center text-mxl sm:text-xl text-secondary bg-blue-sky font-primary">
        <div className="z-0 h-1 transform scale-75 -translate-y-16 md:scale-100 ">
          <BlobSection backgroundColor="#FFFFFF" />
        </div>
        <div className="z-10">
          <p>404</p>
          <p className="pb-2 font-title text-m4xl xm:text-4xl">
            The page you’re looking for doesn’t exist.
          </p>
          <p className="pt-2 pb-5 ">
            Looks like you took a wrong turn — try heading back home.
          </p>
          <Link className="btn btn-primary" to="/">
            Back To Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
}
