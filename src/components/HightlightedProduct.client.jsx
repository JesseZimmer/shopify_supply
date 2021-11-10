import {useState} from 'react';
import {
  ProductProvider,
  ProductTitle,
  ProductDescription,
  SelectedVariantPrice,
} from '@shopify/hydrogen/client';

import {BestSellerBadgeImg, SoldOutBadge} from '../assets/images';
import Icon from '../assets/images/svg/Icons';

import CountButton from './CountButton.client';
import AddToCartState from './AddToCartState.client';

export default function HighlightedProduct({product}) {
  const [currentQuantity, setQuantity] = useState(1);
  const [currentAmount, setAmount] = useState(
    Number(product.variants.edges[0].node.priceV2.amount).toFixed(2),
  );
  const onHandleAmount = (quantity) => {
    const newAmount = product.variants.edges[0].node.priceV2.amount * quantity;
    setAmount(newAmount.toFixed(2));
    setQuantity(quantity);
  };

  const available = product.variants.edges[0].node.availableForSale;
  const badge = available ? BestSellerBadgeImg : SoldOutBadge;
  const badgeAlt = available
    ? 'Cha-Ching Button Best Seller Badge'
    : 'Cha-Ching Button Sold Out Badge';

  return (
    <ProductProvider
      product={product}
      initialVariantId={product.variants.edges[0].node.id}
    >
      <>
        <div className="max-w-3xl">
          <div className="flex flex-col justify-between w-full">
            <img
              className="absolute right-0 w-32 top"
              src={badge}
              alt={badgeAlt}
              width="375"
              height="375"
            />
            <div className="px-4 mt-5 lg:mb-32 md:mb-24 sm:px-14 sm:mt-14">
              <div className="flex flex-col">
                <ProductTitle className="text-mxl font-medium text-white md:text-m3xl mb-1.5 font-primary" />
                <ProductDescription
                  as="h1"
                  className="mr-32 text-white font-title md:mr-24 lg:mr-32 text-m4xl sm:text-4xl"
                />
              </div>
            </div>
            <div className="px-4 sm:px-14">
              <SelectedVariantPrice className="my-5 font-normal text-white text-m2xl sm:text-2xl font-primary">
                {({currencyNarrowSymbol}) => {
                  return (
                    <span>{`${
                      currencyNarrowSymbol || '$'
                    }${currentAmount}`}</span>
                  );
                }}
              </SelectedVariantPrice>
              <div className="grid grid-cols-3 gap-3">
                <CountButton
                  className="w-full px-4 bg-white btn button hover:bg-white hover:text-secondary"
                  min={1}
                  max={2}
                  initial={1}
                  onChangeCount={onHandleAmount}
                />
                <AddToCartState
                  currentQuantity={currentQuantity}
                  available={available}
                />
              </div>
              <div className="py-5">
                <p className="mb-2 text-sm text-left text-white">
                  Free delivery to the U.S. and Canada. Please allow 4 to 6
                  weeks for processing and shipping. Delivery by December 24th
                  is not guaranteed.
                </p>
                <p className="mb-2 text-sm text-left text-white">
                  When your order is processed, you&apos;ll receive a tracking
                  number that&apos;ll make it easy to keep an eye on your
                  package.
                </p>
                <p className="mb-2 text-sm text-left text-white">
                  Once confirmed, you&apos;ll have 24 hours to edit or cancel
                  your order by contacting our Support team at
                  supply@shopify.com.
                </p>
                <p className="mb-2 text-sm text-left text-white">
                  The Cha-Ching Button is non-returnable or refundable after
                  purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
        <SocialMediaFooter productHandle={`/products/${product.handle}`} />
      </>
    </ProductProvider>
  );
}

function SocialMediaFooter({productHandle}) {
  const openOnWindow = (url) => {
    window.open(url, 'Data', 'height=500,width=500');
  };
  return (
    <ul className="grid grid-cols-5 gap-0 border-t">
      <li className="py-4 text-center text-white border-r-2 border-white">
        Share:
      </li>
      <li className="flex justify-center py-4 text-center text-white border-r-2 border-white">
        <button
          type="button"
          onClick={() =>
            openOnWindow(
              `https://twitter.com/intent/tweet?url=https%3A%2F%2Fshopify.supply${productHandle}&hashtags=ShopifyChaChing&text=Relive your first sale moment anytime you want with the Cha-Ching Button from Shopify Supply. Get yours now at `,
            )
          }
        >
          <Icon type="Twitter" />
        </button>
      </li>
      <li className="flex justify-center py-4 text-center text-white border-r-2 border-white">
        <button
          type="button"
          onClick={() =>
            openOnWindow(
              `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fshopify.supply${productHandle}`,
            )
          }
        >
          <Icon type="Facebook" />
        </button>
      </li>
      <li className="flex justify-center py-4 text-center text-white border-r-2 border-white">
        <button
          type="button"
          onClick={() => openOnWindow('mailto:supply@shopify.com')}
        >
          <Icon type="Email" />
        </button>
      </li>
      <li className="flex justify-center py-4 text-center text-white border-r-2 border-white">
        <a
          href="https://www.tiktok.com/@shopify"
          target="_blank"
          rel="noreferrer"
        >
          <Icon type="Tiktok" />
        </a>
      </li>
    </ul>
  );
}
