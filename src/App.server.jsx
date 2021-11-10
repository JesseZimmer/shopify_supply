import {ShopifyServerProvider, DefaultRoutes} from '@shopify/hydrogen';
import {Switch} from 'react-router-dom';
import {Suspense} from 'react';

import shopifyConfig from '../shopify.config';

import DefaultSeo from './components/DefaultSeo.server';
import NotFound from './components/NotFound.server';
import CartProvider from './components/CartProvider.client';
import GoogleTagManager from './components/GTM.client';

export default function App({...serverState}) {
  const pages = import.meta.globEager('./pages/**/*.server.(jsx|tsx)');

  return (
    <ShopifyServerProvider shopifyConfig={shopifyConfig} {...serverState}>
      <CartProvider>
        <Suspense fallback="Loading...">
          <DefaultSeo />
          <GoogleTagManager gtmID="#######" />
          <Switch>
            <DefaultRoutes
              pages={pages}
              serverState={serverState}
              fallback={<NotFound />}
            />
          </Switch>
        </Suspense>
      </CartProvider>
    </ShopifyServerProvider>
  );
}
