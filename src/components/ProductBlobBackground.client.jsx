import {useEffect, useState} from 'react';

const ProductBlobBackground = ({asset, asset480}) => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <img
      className={`${
        isLoaded ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1000 ease-in absolute z-10 mt-24 w-72 md:w-98 top-1 md:mt-44`}
      srcSet={(`${asset480} 480w`, `${asset} 640w`)}
      src={asset480}
      alt="Background blob image"
      aria-hidden="true"
      width="899"
      height="979"
    />
  );
};

export default ProductBlobBackground;
