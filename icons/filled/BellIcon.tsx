import * as React from 'react';

function BellIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9958 2C10.9958 1.44772 11.4435 1 11.9958 1C12.548 1 12.9958 1.44772 12.9958 2V3.06494C16.838 3.56772 19.9958 6.9287 19.9958 11V16L20.881 18.5144C21.2395 19.1809 20.7418 20 20.0038 20H14.9958C14.9958 21.6569 13.6526 23 11.9958 23C10.3389 23 8.99576 21.6569 8.99576 20H3.99623C3.25815 20 2.76052 19.1809 3.11897 18.5144L3.99623 16V11C3.99623 6.93164 7.15617 3.57258 10.9958 3.06603V2Z"
        fill="inherit"
      />
    </svg>
  )
}

export default BellIcon;