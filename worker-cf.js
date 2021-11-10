import handleEvent from '@shopify/hydrogen/worker';
import {getAssetFromKV} from '@cloudflare/kv-asset-handler';

// eslint-disable-next-line import/extensions
import entrypoint from './src/entry-server.jsx';
// eslint-disable-next-line import/no-unresolved
import indexHtml from './dist/client/index.html?raw';

async function assetHandler(event, url) {
  const response = await getAssetFromKV(event, {});

  if (response.status < 400) {
    const filename = url.pathname.split('/').pop();

    const maxAge = filename.split('.').length > 2 ? 31536000 : 86400;

    response.headers.append('cache-control', `public, max-age=${maxAge}`);
  }

  return response;
}

addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Temp workaround to serve font assets properly
  // Remove after Hydrogen supports this in its middleware
  if (/(woff|otf)$/.test(url.pathname)) {
    return event.respondWith(assetHandler(event, url));
  }

  try {
    event.respondWith(
      handleEvent(event, {
        entrypoint,
        indexTemplate: indexHtml,
        assetHandler,
        cache: caches.default,
        context: event,
      }),
    );
  } catch (error) {
    event.respondWith(
      new Response(error.message || error.toString(), {
        status: 500,
      }),
    );
  }
});
