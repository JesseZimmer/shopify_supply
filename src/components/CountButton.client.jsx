import {useState} from 'react';

import Icon from '../assets/images/svg/Icons';

export default function CountButton({
  initial,
  min,
  max,
  onChangeCount,
  className,
}) {
  const [count, setCount] = useState(initial);
  const onSetCount = (limit, func) => {
    const newCount = limit === count ? count : func;
    setCount(newCount);
    onChangeCount(newCount);
  };

  return (
    <button
      className={`flex items-center px-1 md:px-4 lg:px-2   p-0 justify-between quantity-button ${className}`}
      type="button"
    >
      <span
        className="px-2 sm:px-3 md:px-4 count-minus"
        onClick={() => onSetCount(min, count - 1)}
      >
        <Icon type="Minus" className="w-3 h-3" />
      </span>
      <span className="mx-0 quantity">{count}</span>
      <span
        className="px-2 sm:px-3 md:px-4 count-plus"
        onClick={() => onSetCount(max, count + 1)}
      >
        <Icon type="Plus" className="w-3 h-3" />
      </span>
    </button>
  );
}
