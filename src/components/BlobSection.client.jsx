export default function BlobSection({backgroundColor, responsiveBlob}) {
  const style = {
    maxWidth: '600px',
  };

  const dynamicClass = responsiveBlob ? 'px-4 w-screen' : 'w-full';

  return (
    <div className={`blob ${dynamicClass}`} style={style}>
      <svg
        className="svg"
        width="100%"
        height="100%"
        viewBox="0 0 439 396"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="hijome"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M93.659 124.771C118.944 87.6801 110.054 26.1854 150.257 6.21521C189.847 -13.4511 235.202 18.4753 276.638 33.8774C317.953 49.2341 361.682 61.6066 390.044 95.3451C420.377 131.428 442.913 178.163 437.275 224.963C431.787 270.519 394.204 303.778 361.106 335.558C332.178 363.335 299.952 391.627 260.005 395.178C222.743 398.49 195.224 361.855 158.749 353.545C113.138 343.154 55.613 374.008 22.4156 341.05C-9.85881 309.007 -1.75341 251.518 12.4756 208.322C24.9298 170.514 71.2366 157.662 93.659 124.771Z"
          fill="url(#paint0_linear_1:13)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1:13"
            x1="462.781"
            y1="383.262"
            x2="87.6556"
            y2="8.13557"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={backgroundColor} />
            <stop offset="1" stopColor={backgroundColor} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
