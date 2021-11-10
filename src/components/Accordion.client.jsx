import {useState} from 'react';

import Icon from '../assets/images/svg/Icons';

export default function Accordion({title, children}) {
  const [isOpen, setOpen] = useState(true);
  const handleOpen = () => setOpen(!isOpen);
  return (
    <>
      <button
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={handleOpen}
        type="button"
        aria-expanded={isOpen}
      >
        <h3 className="w-11/12 text-left text-m3xl md:text-2xl font-primary text-secondary my-7">
          {title}
        </h3>
        <Icon
          type={`${isOpen ? 'Plus' : 'Minus'}`}
          className="text-secondary"
        />
      </button>
      <div
        className={`${
          isOpen ? 'max-h-0' : 'max-h-100'
        } border-b-2 border-secondary transition-all duration-500 overflow-hidden`}
      >
        {children}
      </div>
    </>
  );
}
