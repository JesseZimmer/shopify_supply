import PropTypes from 'prop-types';
import {useState} from 'react';

const CopyToClipboard = ({children, copyText, ariaLabel}) => {
  const [showCopiedText, setShowCopiedText] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(copyText);
    setShowCopiedText(true);
  };
  return (
    <>
      <button type="button" onClick={handleClick} aria-label={ariaLabel}>
        {children}
      </button>
      <div
        className={
          showCopiedText
            ? 'absolute sm:bottom-0 -bottom-2 bg-white w-60 rounded-lg -translate-x-sm hideAfter2Seconds'
            : 'hidden'
        }
      >
        Copied to Clipboard
      </div>
    </>
  );
};

CopyToClipboard.propTypes = {
  children: PropTypes.element.isRequired,
  copyText: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
};

export default CopyToClipboard;
