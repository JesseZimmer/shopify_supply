import {useState} from 'react';
import {ProductProvider} from '@shopify/hydrogen/client';

import ZoomIcon from '../assets/images/svg/Icons';

import ThreeDimensionalView from './ThreeDimensionalView.client';

export default function ProductModel({product}) {
  const [isZoomed, setZoom] = useState(false);
  const handleZoom = () => setZoom(!isZoomed);

  return (
    <ProductProvider
      product={product}
      initialVariantId={product.variants.edges[0].node.id}
    >
      <div
        className={`${
          isZoomed ? 'fixed bg-white z-50' : 'relative h-96 z-30'
        } w-full h-full sm:h-full`}
      >
        <button
          onClick={handleZoom}
          type="button"
          aria-label="Zoom in"
          className="absolute right-0 z-50 p-4 cursor-pointer top text-secondary"
        >
          <ZoomIcon type="Zoom" />
        </button>
        <div className="relative z-30 h-96 lg:h-full">
          <ThreeDimensionalView model={product.media.edges[0].node} />
        </div>
      </div>
    </ProductProvider>
  );
}
