import {Link} from '@shopify/hydrogen';

import Icon from '../assets/images/svg/Icons';

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative z-20 grid grid-cols-1 pt-6 pl-4 text-white lg:pt-16 lg:grid-cols-2 pb-lg font-primary bg-secondary lg:pr-12 lg:pl-14"
    >
      <section className="space-y-2 font-title text-m4xl sm:text-4xl">
        <p>
          <a href="mailto:supply@shopify.com">Contact</a>
        </p>
        <p>
          <Link to="/pages/faq">FAQ</Link>
        </p>
        <p>
          <Link to="/pages/refund-policy">Refund policy</Link>
        </p>
      </section>
      <section className="py-6 space-y-3 font-title text-mlg sm:text-lg lg:flex lg:space-y-0 lg:py-0 lg:space-x-6 lg:justify-self-end">
        <p>
          <Link to="/pages/about">About Shopify</Link>
        </p>
        <p>
          <Link to="/pages/terms-of-service">Terms of service</Link>
        </p>
        <p>
          <a
            href="https://www.shopify.com/legal/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
        </p>
      </section>
      <section className="flex space-x-6 py-base lg:pt-16">
        <a
          href="https://twitter.com/Shopify"
          target="_blank"
          rel="noreferrer"
          aria-label="Shopify on Twitter"
        >
          <Icon type="Twitter" />
        </a>
        <a
          href="https://www.instagram.com/shopify"
          target="_blank"
          rel="noreferrer"
          aria-label="Shopify on Instagram"
        >
          <Icon type="Instagram" />
        </a>
        <a
          href="https://www.facebook.com/shopify"
          target="_blank"
          rel="noreferrer"
          aria-label="Shopify on Facebook"
        >
          <Icon type="Facebook" />
        </a>
        <a
          href="https://www.tiktok.com/@shopify"
          target="_blank"
          rel="noreferrer"
          aria-label="Shopify on TikTok"
        >
          <Icon type="Tiktok" />
        </a>
      </section>
      <section className="flex flex-col mt-4 lg:mt-10 lg:flex-row text-mbase sm:text-base font-paragraph lg:justify-end lg:items-center whitespace-nowrap">
        <div className="flex items-center">
          <Icon type="Hydrogen" className="w-16 h-16 mr-med" />
          <p>Built on Hydrogen</p>
          <a
            href="https://github.com/Shopify/hydrogen-examples/tree/master/shopify-supply"
            className="pt-px mx-0 ml-2 mr-auto h-xl btn btn-link btn-link-secondary btn-link-white hover:after:bg-white"
            target="_blank"
            rel="noreferrer"
          >
            View on Github
          </a>
        </div>
        <p className="mt-px align-middle border-0 border-white h-xl lg:border-l-2 text-mbase sm:text-base font-paragraph lg:ml-4 lg:pl-4">
          All Rights Reserved &copy;2021
        </p>
      </section>
    </footer>
  );
}
