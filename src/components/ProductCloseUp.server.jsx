import {Image, useProduct} from '@shopify/hydrogen';

import BlobSection from './BlobSection.client';

export default function ProductCloseUp() {
  const {media} = useProduct();

  const CloseUpItem = ({image}) => {
    return (
      <div className="relative z-10 bg-white border-2 rounded-lg md:m-11 border-secondary">
        <Image image={image} width="650px" height="650px" crop="center" />
      </div>
    );
  };
  return (
    <section className="container mx-auto">
      <div className="relative">
        <h2 className="relative z-10 py-10 m-auto font-title text-center text-m4xl md:text-4xl text-secondary md:py-20 md:max-w-3xl">
          Cha-Ching pushes all your buttons
        </h2>
        <div className="absolute inset-0 flex justify-center w-full h-1 transform scale-50 md:scale-100">
          <BlobSection backgroundColor="#D0F224" />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 md:gap-4 md:grid-cols-3 md:mb-14 pb-9">
        <div className="col-span-6 md:col-span-1">
          <CloseUpItem image={media[1].image} />
        </div>
        <div className="col-span-3 md:col-span-1">
          <CloseUpItem image={media[2].image} />
        </div>
        <div className="col-span-3 md:col-span-1">
          <CloseUpItem image={media[3].image} />
        </div>
      </div>
    </section>
  );
}
