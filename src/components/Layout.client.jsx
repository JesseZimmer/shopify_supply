import PropTypes from 'prop-types';

import Header from './Header.client';
import Footer from './Footer';
import Minicart from './Cart.client';
import NotificationBar from './NotificationBar.client';
import {useCartUI} from './CartUIProvider.client';

export default function Layout({children, useTransparentHeader}) {
  const {isCartOpen, toggleCart} = useCartUI();
  return (
    <>
      <div className="absolute top-0 left-0">
        <a
          href="#mainContent"
          className="p-4 sr-only focus:block focus:not-sr-only"
        >
          Skip to content
        </a>
      </div>
      <div className="min-w-full min-h-screen max-w-screen bg-secondary">
        <NotificationBar text="Delivery by December 24th is not guaranteed." />
        <Header useTransparentHeader={useTransparentHeader} />
        {/* eslint-disable-next-line @shopify/jsx-prefer-fragment-wrappers */}
        <div>
          <div
            className={`z-50 fixed top-0 bottom-0 left-0 right-0 bg-black transition-opacity duration-400 ${
              isCartOpen ? 'opacity-20' : 'opacity-0 pointer-events-none'
            }`}
            onClick={toggleCart}
          />
          <div
            id="cart"
            className={`pointer-events-none z-50 bg-white fixed right-0 top-0 bottom-0 flex flex-col w-full max-w-xs min-w-xs sm:max-w-md transition-transform duration-500 transform-gpu min-h-screen ${
              isCartOpen ? 'right-0' : 'translate-x-full'
            }`}
          >
            <Minicart />
          </div>
        </div>
        <main id="mainContent" className="mx-auto">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  useTransparentHeader: PropTypes.bool,
};
