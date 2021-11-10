import {Product, ProductProvider, Metafield} from '@shopify/hydrogen/client';

import Icon from '../assets/images/svg/Icons';

import TickerTape from './TickerTape.client';
import Layout from './Layout.client';
import Seo from './Seo.client';
import ProductCloseUp from './ProductCloseUp.server';
import ProductFaq from './ProductFaq.server';
import ProductDetailHero from './ProductDetailHero.client';
import IconBlob from './IconBlob.client';

export default function ProductDetails({data}) {
  const {product} = data;
  const descriptionlist = product.metafields.edges.map(({node}) => node)[1];

  return (
    <ProductProvider product={product}>
      <Layout>
        <Seo product={product} />
        <Product
          product={product}
          initialVariantId={product.variants.edges[0].node.id}
        >
          <ProductDetailHero product={product} />
          <section className="bg-white">
            <ProductCloseUp />
            <TickerTape
              usePrimary
              text={[
                'The portable boost button',
                'Enjoy the sound of the sale, anytime you want',
                'The perfect desk buddy',
              ]}
            />
          </section>
          <section className="grid grid-cols-1 bg-white md:grid-cols-4">
            <Metafield metafield={descriptionlist}>
              {(metafield) => {
                const list = JSON.parse(metafield.value);
                return list.map(({id, title, description, iconName}) => {
                  return (
                    <div
                      key={id}
                      className="py-16 text-center border border-t-0 border-secondary"
                    >
                      <div className="relative block w-20 m-auto mb-7">
                        <Icon className="relative z-20" type={iconName} />
                        <IconBlob />
                      </div>
                      <h4 className="text-xl text-secondary mb-1.5">{title}</h4>
                      <p className="px-16 text-secondary text-mbase">
                        {description}
                      </p>
                    </div>
                  );
                });
              }}
            </Metafield>
          </section>
          <ProductFaq product={product} />
        </Product>
      </Layout>
    </ProductProvider>
  );
}
