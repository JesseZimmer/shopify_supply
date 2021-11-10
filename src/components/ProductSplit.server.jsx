import {Link} from '@shopify/hydrogen';

import ThreeDimensionalView from './ThreeDimensionalView.client';

const ProductSplit = ({product}) => {
  if (!product) {
    return null;
  }

  const model = product.media.edges[0].node;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 text-secondary font-primary sm:space-x-0.5 bg-secondary pb-px text-center sm:text-left">
      <div className="flex flex-col px-4 pb-6 mt-0 bg-white sm:items-start sm:pr-20 sm:pl-16 sm:py-36 align-items-center">
        <h1 className="sm:pl-16 text-m2xl lg:text-2xl">{product.title}</h1>
        <p className="pt-1 pb-3 font-title sm:pb-5 text-m4xl lg:text-4xl ">
          Every push feels like your first sale.
        </p>
        <Link
          to={`/products/${product.handle}`}
          className="sm:ml-16 btn btn-primary "
        >
          Shop now
        </Link>
      </div>
      <div className="order-first min-h-full bg-white h-72 sm:order-last">
        <ThreeDimensionalView model={model} />
      </div>
    </div>
  );
};

export default ProductSplit;
