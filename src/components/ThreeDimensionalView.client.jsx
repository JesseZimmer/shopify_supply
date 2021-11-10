import {Model3D} from '@shopify/hydrogen/client';

import {EnviromentImage, ButtonPoster} from '../assets/images';

const ThreeDimensionalView = ({model}) => {
  model.previewImage.originalSrc = ButtonPoster;

  return (
    <Model3D
      model={model}
      loading="eager"
      style={{width: '100%', height: '100%'}}
      interactionPolicy="allow-when-focused"
      environmentImage={EnviromentImage}
      interactionPrompt="auto"
      ar
    />
  );
};

export default ThreeDimensionalView;
