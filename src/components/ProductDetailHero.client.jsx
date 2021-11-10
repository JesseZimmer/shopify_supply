import {BackgroundBlob, BackgroundBlob480} from '../assets/images';
import useScrollEventListener from '../helpers/useScrollEventListener';

import ProductModel from './ProductModel.client';
import HighlightedProduct from './HightlightedProduct.client';
import ProductBlobBackground from './ProductBlobBackground.client';

export default function ProductDetailHero({product}) {
  const {showNav} = useScrollEventListener();

  return (
    <section
      className={`${
        showNav ? 'pt-20 md:pt-32' : 'pt-14 md:pt-24'
      } flex flex-wrap transition-all bg-white max-w-full`}
    >
      <div className="relative z-40 w-full border-2 lg:w-1/2 lg:mb-0 border-secondary">
        <ProductModel product={product} />
      </div>
      <div className="relative z-20 w-full mb-12 lg:w-1/2 lg:mb-0 bg-secondary">
        <HighlightedProduct product={product} />
      </div>
      <ProductBlobBackground
        asset={BackgroundBlob}
        asset480={BackgroundBlob480}
      />
    </section>
  );
}
