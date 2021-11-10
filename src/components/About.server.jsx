import Icon from '../assets/images/svg/Icons';

const About = () => {
  return (
    <div className="grid content-start grid-cols-1 px-4 pb-16 md:pb-36 pt-xl md:pt-16 md:px-16 primary-gradient text-secondary font-primary md:grid-cols-12">
      <Icon type="Shopify" className="col-span-full" />
      <p className="pt-5 font-title text-m4xl md:text-4xl md:col-span-5">
        About Shopify Supply
      </p>
      <p className="pt-5 text-mxl md:text-xl md:col-span-5 md:col-start-7 md:pl-2">
        Shopify Supply is more than swag. It&apos;s your first stop for the
        highly-anticipated releases you&apos;ve been asking for, and the
        surprise drops that&apos;ll delight you. If you&apos;re interested in
        unique products designed for entrepreneurs, you&apos;re in the right
        place.
      </p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.shopify.com/about"
        className="pt-5 ml-0 md:col-start-7 btn btn-link md:col-span-5 md:ml-2"
      >
        Learn more about Shopify
      </a>
    </div>
  );
};

export default About;
