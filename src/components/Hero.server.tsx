import {Link} from '@shopify/hydrogen/client';
import PropTypes from 'prop-types';

import {TheButton, TheButton480} from '../assets/images';

const Hero = ({handle}) => {
  if (!handle) {
    return null;
  }

  return (
    <div className="pt-16 text-white lg:pt-20">
      <div className="grid grid-cols-12">
        <img
          srcSet={`${TheButton480} 480w, ${TheButton} 640w`}
          src={TheButton480}
          alt="a hand pressing the button"
          className="max-w-xs lg:col-span-4 col-span-full md:max-w-l lg:max-w-xl 2xl:max-w-2xl"
          width="770"
          height="846"
        />
        <div className="flex flex-col row-auto px-4 pb-6 -mt-16 bg-transparent md:pt-6 lg:pt-36 2xl:pt-40 lg:pl-0 lg:col-span-7 xl:col-span-8 col-span-full lg:my-0">
          <p className="pr-4 font-title text-m5xl sm:text-3xl xl:text-4xl 2xl:text-5xl 2xl:max-w-5xl">
            Fresh swag from the lil&apos; green bag
          </p>
          <p className="max-w-3xl px-8 pt-6 pb-5 lg:pl-48 font-paragraph text-mlg leading-relaxed lg:font-base font-mbase">
            We bottled up the sweetest sound in the world: the sound of a sale,
            &apos;Cha-Ching&apos;. Press it for an instant hit of serotonin.
          </p>
          <Link
            to={`/products/${handle}`}
            className="ml-8 lg:ml-48 btn btn-primary"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  handle: PropTypes.string.isRequired,
};

export default Hero;
