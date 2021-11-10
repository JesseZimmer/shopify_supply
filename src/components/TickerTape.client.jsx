import Ticker from 'react-ticker';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import PageVisibility from 'react-page-visibility';

import Icon from '../assets/images/svg/Icons';
import getPrefersReducedMotion from '../helpers/getPrefersReducedMotion';

const TickerTape = ({usePrimary = false, speed = 5, text}) => {
  const [pageIsVisible, setPageIsVisible] = useState(true);

  const handleVisibilityChange = (isVisible) => {
    setPageIsVisible(isVisible);
  };

  const [isMoving, setIsMoving] = useState(true);

  useEffect(() => {
    if (getPrefersReducedMotion()) {
      setIsMoving(false);
    }
  }, []);

  const handleClick = () => setIsMoving(!isMoving);
  const isMovingIcon = isMoving ? 'Pause' : 'Play';
  return (
    <div
      className={`${
        usePrimary ? 'bg-primary' : 'bg-blue-sky'
      } border-secondary border-t-2 border-b-2 relative h-16 sm:h-20`}
    >
      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <Ticker move={isMoving} speed={speed}>
            {() => (
              <ul className="flex items-center h-16 px-2 space-x-4 text-secondary whitespace-nowrap text-mxl sm:text-xl font-primary sm:h-20">
                {getTickerItems(text)}
              </ul>
            )}
          </Ticker>
        )}
      </PageVisibility>
      <button
        type="button"
        className="absolute flex items-center justify-center w-10 h-10 bg-white border-2 rounded-full top-base sm:w-16 sm:h-16 right-4 sm:top-med border-secondary"
        onClick={handleClick}
        aria-label="stop/start ticker animation"
      >
        <Icon
          type={isMovingIcon}
          className={`h-base sm:h-4 ${!isMoving && 'pl-xs sm:pl-sm'} `}
        />
      </button>
    </div>
  );
};

const getTickerItems = (text) =>
  text.map((line) => (
    <li key={line} className="flex space-x-4">
      <p>{line}</p>
      <Icon type="Star" />
    </li>
  ));

TickerTape.propTypes = {
  usePrimary: PropTypes.bool,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number,
};

export default TickerTape;
