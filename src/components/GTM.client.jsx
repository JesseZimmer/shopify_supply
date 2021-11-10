import TagManager from 'react-gtm-module';
import {useEffect} from 'react';

export default function GTM({gtmID}) {
  const tagManagerArgs = {
    gtmId: gtmID,
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  });

  return null;
}
