import Icon from '../assets/images/svg/Icons';

import BlobSection from './BlobSection.client';
import CopyToClipboard from './CopyToClipboard.client';

const SocialShare = () => {
  return (
    <div className="relative flex flex-col items-center justify-center pt-10 pb-20 text-center bg-white md:pt-36 md:pb-28">
      <div className="z-0 justify-center h-1 text-center transform scale-75 -translate-y-8 md:scale-150">
        <BlobSection backgroundColor="#79DFFF" />
      </div>
      <div className="relative flex flex-col items-center text-center text-secondary font-primary">
        <p className="px-4 pt-0 pb-2 md:pt-10 text-mxl sm:text-xl">
          Share the latest drop with friends and followers.
        </p>
        <p className="font-title sm:text-4xl text-m4xl">#ShopifySupply</p>
        <div className="grid grid-cols-4 my-4 border-2 sm:my-6 gap-x-xs bg-secondary border-secondary">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fshopify.supply"
            target="_blank"
            rel="noreferrer"
            aria-label="Share on Facebook"
          >
            <IconWrapper type="Facebook" />
          </a>
          <a
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fshopify.supply&hashtags=ShopifyChaChing&text=Relive your first sale moment anytime you want with the Cha-Ching Button from Shopify Supply. Get yours now at"
            target="_blank"
            rel="noreferrer"
            aria-label="Share on Twitter"
          >
            <IconWrapper type="Twitter" />
          </a>
          <a
            href="https://www.tiktok.com/@shopify"
            target="_blank"
            rel="noreferrer"
            aria-label="Shopify on TikTok"
          >
            <IconWrapper type="Tiktok" />
          </a>
          <CopyToClipboard
            copyText="https://shopify.supply/"
            ariaLabel="copy to clipboard"
          >
            <IconWrapper type="Link" />
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

const IconWrapper = ({type}) => (
  <div className="bg-blue-sky p-lg hover:bg-white">
    <Icon type={type} className="h-xl" />
  </div>
);

export default SocialShare;
