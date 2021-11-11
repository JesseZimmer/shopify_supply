import {Link} from '@shopify/hydrogen/client';
import PropTypes from 'prop-types';
import {useState} from 'react';

import Icon from '../assets/images/svg/Icons';
import useScrollEventListener from '../helpers/useScrollEventListener';

import {CartIcon} from './Cart.client';
import {useCartUI} from './CartUIProvider.client';

export default function Header({
  productLink = '/products/the-button',
  useTransparentHeader,
}) {
  const {useAltCSS, showNav} = useScrollEventListener();
  const [isHovering, setIsHovering] = useState(false);
  const {toggleCart} = useCartUI();

  const altCSS = useAltCSS || isHovering || !useTransparentHeader;

  const showNavCSS = showNav ? 'translate-y-5 sm:translate-y-6' : '';
  const altWrapperCSS = altCSS
    ? 'bg-green  text-secondary border-secondary'
    : 'bg-transparent text-white border-white';
  const altLogoCSS = altCSS ? 'text-black' : 'text-white';

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <header
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`inline-block z-50 fixed duration-200 transform w-full h-16 sm:h-24 border-t-2 border-b-2 ${altWrapperCSS} ${showNavCSS}`}
    >
      <div
        className="relative flex items-center justify-between h-full px-1 mx-auto max-w-screen sm:px-12"
        role="banner"
      >
        <nav className="w-full pr-med sm:pr-4">
          <div className="relative flex items-center justify-between pl-4 space-x-2 font-medium sm:space-x-6 font-paragraph">
            <Link to="/" aria-label="Link to Shopify Supply Homepage">
              <Icon
                type="ShopifySupply"
                className={`h-5 sm:h-6 ${altLogoCSS}`}
              />
            </Link>
            <Link
              to={productLink}
              className={`py-2 sm:py-3 m-3 ${
                altCSS ? 'btn' : ' btn border-primary text-white'
              }`}
            >
              Shop
            </Link>
          </div>
        </nav>
        <button type="button" onClick={toggleCart}>
          <CartIcon />
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  productLink: PropTypes.string,
};
