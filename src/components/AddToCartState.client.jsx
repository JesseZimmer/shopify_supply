import PropTypes from 'prop-types';
import {SelectedVariantAddToCartButton} from '@shopify/hydrogen/client';

const AddToCartState = ({currentQuantity, available}) => {
  return (
    <>
      {available ? (
        <SelectedVariantAddToCartButton
          quantity={currentQuantity}
          className="w-full col-span-2 font-title btn btn-primary hover:bg-primary hover:text-secondary"
        >
          Add to bag
        </SelectedVariantAddToCartButton>
      ) : (
        <button
          type="button"
          className="w-full col-span-2 font-title btn btn-disabled hover:text-blue-sky"
        >
          Sold Out
        </button>
      )}
    </>
  );
};

AddToCartState.propTypes = {
  currentQuantity: PropTypes.number,
  available: PropTypes.bool,
};

export default AddToCartState;
