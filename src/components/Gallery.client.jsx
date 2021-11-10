import {useProduct, MediaFile} from '@shopify/hydrogen/client';

export default function Gallery() {
  return (
    <>
      <GalleryPreview />
    </>
  );
}

function GalleryPreview() {
  const {media} = useProduct();

  if (!media.length) {
    return null;
  }

  return (
    <ul className="grid lg:grid-cols-2 gap-10">
      {media.map((med) => {
        return (
          <li key={med.id} className="relative">
            <MediaFile
              className="w-full bg-white rounded-md object-cover"
              media={med}
              options={{
                height: '1000',
                crop: 'center',
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}
