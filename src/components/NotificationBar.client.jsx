import {Link} from '@shopify/hydrogen/client';
import PropTypes from 'prop-types';

import useScrollEventListener from '../helpers/useScrollEventListener';
import {setSession} from '../helpers/sessionStorage';
import Icon from '../assets/images/svg/Icons';

const NotificationBar = ({link = '/products/the-button', text}) => {
  const {useAltCSS, setShowNav, showNav} = useScrollEventListener();
  const showNavCSS = showNav ? 'h-5 sm:h-6' : '-translate-y-full';
  const altWrapperCSS = useAltCSS
    ? 'bg-secondary text-white'
    : 'bg-white text-secondary';
  const altButtonCSS = useAltCSS ? 'text-white' : 'text-secondary';

  const handleClose = () => {
    setSession('hideNotification', true);
    setShowNav(false);
  };

  return (
    <div
      className={`items-center duration-200 transform fixed top-0 left-0 z-50 flex justify-items-center w-full mb-med sm:bg-secondary sm:text-white ${showNavCSS} ${altWrapperCSS}`}
    >
      <div className="w-full text-sm text-center font-paragraph sm:text-base">
        {text}
        <button
          type="button"
          className={`duration-200 hidden sm:inline-block text-sm sm:text-base transform ml-1 btn-link hover:after:bg-white hover:text-white btn-link-secondary sm:btn-link-white ${altButtonCSS}`}
        >
          <Link to={link}>Shop now</Link>
        </button>
      </div>
      <button
        type="button"
        className="pr-2 mx-0 transition duration-500 ease-in-out transform sm:pr-4 justify-self-end btn-close-icon hover:bg-transparent hover:text-white hover:scale-150 hover:shadow-none"
        onClick={handleClose}
        aria-label="Close Button"
      >
        <Icon type="Close" />
      </button>
    </div>
  );
};
NotificationBar.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default NotificationBar;
