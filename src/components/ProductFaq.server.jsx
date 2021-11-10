import {Metafield} from '@shopify/hydrogen/client';

import Accordion from './Accordion.client';
import BlobSection from './BlobSection.client';

export default function ProductFaq({product}) {
  const faqList = product.metafields.edges.map(({node}) => node)[0];
  return (
    <section className="bg-white border-b-2 border-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center max-w-4xl px-4 pt-20 mx-auto pb-36 sm:px-0">
          <div className="z-0 h-1 transform md:scale-150">
            <BlobSection backgroundColor="#79DFFF" />
          </div>
          <h4 className="z-20 self-start text-m4xl md:text-4xl font-title text-secondary mb-9">
            Frequently asked <br />
            questions
          </h4>
          <div className="relative z-20 p-0 lg:pl-40 max-w-7xl">
            <Metafield metafield={faqList}>
              {(metafield) => {
                const list = JSON.parse(metafield.value);
                return list.map(({id, title, description}) => {
                  return (
                    <Accordion key={id} title={title}>
                      {description.map((text) => {
                        return (
                          <p
                            key={text.id}
                            className="md:leading-8 font-primary text-mxl md:text-m3xl text-secondary mb-7"
                          >
                            {text.paragraph}
                          </p>
                        );
                      })}
                    </Accordion>
                  );
                });
              }}
            </Metafield>
          </div>
        </div>
      </div>
    </section>
  );
}
