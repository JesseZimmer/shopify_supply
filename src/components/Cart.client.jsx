import {
  useCart,
  useCartLine,
  useCartLinesTotalQuantity,
  CartCheckoutButton,
  Link,
  CartLines,
  CartLine,
  CartShopPayButton,
  CartEstimatedCost,
} from '@shopify/hydrogen/client';

import Icon from '../assets/images/svg/Icons';

import {useCartUI} from './CartUIProvider.client';

export default function Minicart() {
  const itemCount = useCartLinesTotalQuantity();
  const {error} = useCart();

  return (
    <div className="overflow-hidden pointer-events-auto text-mlg sm:text-lg font-primary text-secondary md:h-auto">
      <div className="flex flex-col max-h-full mx-4">
        <header className="py-4 bg-white border-b border-solid border-secondary rounded-t-md">
          <CartHeader />
        </header>

        <div className="bg-white md:max-h-96">
          {itemCount > 0 ? (
            <CartLineItems />
          ) : (
            <p className="my-8 text-center">Your cart is empty</p>
          )}
        </div>

        {error ? (
          <div
            className="relative py-3 mx-8 mb-4 text-red-800 bg-red-200 border border-red-400 rounded"
            role="alert"
          >
            {error}
          </div>
        ) : null}

        <footer
          className={`${
            itemCount > 0 && 'border-t border-solid border-gray-300'
          } bg-white space-y-4 flex-shrink-0 rounded-b-md`}
        >
          {itemCount > 0 && (
            <>
              <CartFooter />
              <CartLegal />
            </>
          )}
        </footer>
      </div>
    </div>
  );
}

export function Cart() {
  const total = useCartLinesTotalQuantity();

  return (
    <div className="grid items-start grid-cols-1 px-4 pb-16 border-b-2 border-white sm:pb-32 lg:grid-cols-12 lg:px-0 sm:pt-52 pt-28 lg:gap-x-4 bg-secondary text-secondary font-primary">
      <div className="px-4 bg-white lg:col-span-5 lg:col-start-3 font-mbase lg:font-base rounded-t-2xl">
        <div className="flex items-center justify-between py-5 border-b-2 border-gray-3">
          <p className="text-m2xl lg:text-2xl"> Your Bag</p> {total} items
        </div>
      </div>
      <div className="hidden w-full h-full px-4 pt-5 bg-white lg:block lg:col-span-4 lg:col-start-8 rounded-t-2xl">
        <p className="border-b-2 font-title border-gray-3 font-mlg lg:font-lg pb-7">
          Order Summary
        </p>
      </div>
      <div className="order-2 px-4 bg-white lg:order-2 lg:col-span-5 lg:col-start-3 rounded-b-2xl">
        {useCartLinesTotalQuantity() > 0 ? (
          <CartLineItems />
        ) : (
          <p className="my-8 text-center">Your cart is empty</p>
        )}
        <HelpSection />
      </div>
      <div className="order-1 px-4 pt-2 pb-4 bg-white lg:pb-5 lg:order-4 lg:col-span-4 lg:col-start-8 lg:rounded-b-2xl">
        <CartFooter />
      </div>
      <div className="order-5 px-4 pt-4 lg:col-span-4 lg:col-start-8 text-blue-sky">
        <CartLegal />
      </div>
    </div>
  );
}

export function CartIcon() {
  return (
    <div className="relative flex items-center w-full hover:secondary-underline sm:hover:after:-bottom-2 sm:hover:after:translate-y-px hover:after:translate-y-sm">
      <Icon type="Bag" className="w-5 h-5 my-px stroke-4" />
      <p className="w-0 h-0 ml-2 overflow-hidden text-lg font-title sm:mr-px sm:w-auto sm:h-auto">
        Bag
      </p>
      <div className="self-start -translate-x-4 sm:-translate-x-0 justify-self-start -translate-y-sm">
        <ItemCount />
      </div>
    </div>
  );
}

function HelpSection() {
  return (
    <div className="flex flex-col items-start justify-start pt-5 pb-9 lg:flex-row">
      <p className="pb-4 font-title font-mlg lg:font-lg lg:pb-0">Need Help?</p>
      {/* eslint-disable-next-line @shopify/jsx-prefer-fragment-wrappers */}
      <div>
        <Link
          to="/pages/faq"
          className="mr-6 lg:ml-6 btn btn-link btn-link-secondary"
        >
          Read our FAQs
        </Link>
        <a
          href="mailto:supply@shopify.com"
          className="mx-0 btn btn-link btn-link-secondary"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

function ItemCount() {
  const itemCount = useCartLinesTotalQuantity();
  return (
    <div
      className={` bg-primary text-xs leading-3 rounded-full flex items-center justify-center transform transition-all  ${
        itemCount ? 'h-lg w-lg' : 'h-0 w-0 overflow-hidden'
      }`}
    >
      {itemCount ? itemCount : null}
      <span className="sr-only">Cart, {itemCount} items</span>
    </div>
  );
}

function CartHeader() {
  const {closeCart} = useCartUI();
  return (
    <div className="flex items-center justify-between flex-shrink-0 w-full font-title text-mlg sm:text-lg">
      <div className="flex items-center justify-self-start">
        <Icon type="Bag" className="w-5 h-5 mr-2 stroke-4" />
        bag
        <div className="self-start -translate-y-sm">
          <ItemCount />
        </div>
      </div>
      <button type="button" onClick={closeCart}>
        <Icon type="Close" className="w-4 h-4" />
        <span className="sr-only">Close cart</span>
      </button>
    </div>
  );
}

function CartLineItems() {
  return (
    <CartLines>
      {({merchandise}) => (
        <div className="grid pb-8 border-b border-gray-300 border-solid grid-cols-checkout pt-xl sm:pt-12 last:border-0">
          <div className="relative w-20 h-20 row-span-2">
            <Link to={`/products/${merchandise.product.handle}`}>
              <CartLine.Image className="object-cover w-full h-full bg-white rounded" />
            </Link>
          </div>
          <CartLine.ProductTitle className="sm:text-xl text-mxl" />
          <div className="flex items-center justify-between flex-grow row-start-3 mt-6 col-span-full lg:col-auto sm:mt-2 lg:row-start-auto">
            <div className="flex items-center content-center ">
              <CartQuantity />
              <CartLine.QuantityAdjustButton
                adjust="remove"
                aria-label="Remove from cart"
                className="mx-0 btn btn-link btn-link-secondary"
              >
                Remove
              </CartLine.QuantityAdjustButton>
            </div>
            <CartLine.Price />
          </div>
        </div>
      )}
    </CartLines>
  );
}

function CartQuantity() {
  const {id, quantity} = useCartLine();
  const {linesUpdate} = useCart();
  const maxQuantity = 2;
  const isMaxQuantity = quantity >= maxQuantity;

  if (quantity > maxQuantity) {
    linesUpdate([
      {
        id,
        quantity: maxQuantity,
      },
    ]);
  }

  return (
    <div className="inline-flex items-center h-10 px-4 py-1 mr-5 rounded-xl bg-gray-4">
      <CartLine.QuantityAdjustButton
        adjust="decrease"
        aria-label="Decrease quantity"
      >
        <Icon type="Minus" className="w-3 h-3" />
      </CartLine.QuantityAdjustButton>
      <CartLine.Quantity as="div" className="px-3 text-center" />
      <CartLine.QuantityAdjustButton
        adjust="increase"
        aria-label="Increase quantity"
        disabled={isMaxQuantity}
        data-cy="quantity-add"
      >
        <Icon type="Plus" className="w-3 h-3" />
      </CartLine.QuantityAdjustButton>
    </div>
  );
}

function CartFooter() {
  return (
    <>
      <div
        role="table"
        className="w-full py-2 space-y-2 font-normal font-paragraph text-mbase sm:text-base"
        aria-label="Cost summary"
      >
        <div className="flex items-center justify-between">
          <div role="rowheader">Subtotal</div>
          <CartEstimatedCost amountType="subtotal" />
        </div>
        <div className="flex items-center justify-between">
          <div role="rowheader">Shipping &#38; Taxes</div>
          <div className="text-sm text-right font-primary">
            Calculated at Checkout
          </div>
        </div>
        <div className="flex items-center justify-between font-title text-mlg sm:text-lg">
          <div role="rowheader">Total</div>
          <CartEstimatedCost
            amountType="total"
            className="font-normal text-right text-mxl sm:text-xl"
          />
        </div>
      </div>
      <div className="space-y-3 sm:pt-2">
        <CartCheckoutButton className="block w-full px-3 py-4 btn btn-primary">
          Proceed to Checkout
        </CartCheckoutButton>
        <CartShopPayButton className="flex justify-center w-full py-1 btn btn-secondary sm:py-med" />
      </div>
    </>
  );
}

function CartLegal() {
  return (
    <p className="text-sm text-center">
      By checking out, I agree to the Terms of Use and acknowledge that I have
      read the Privacy Policy. Shipping and promotions calculated in checkout.
    </p>
  );
}
