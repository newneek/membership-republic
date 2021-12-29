import * as React from 'react';

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6 20.9993C5.99982 21.2555 6.09746 21.5117 6.29289 21.7071C6.68342 22.0976 7.31658 22.0976 7.70711 21.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L7.70711 2.29289C7.31658 1.90237 6.68342 1.90237 6.29289 2.29289C6.09746 2.48833 5.99982 2.74454 6 3.00069M6 3.00069V20.9993Z"
        fill="inherit"
      />
    </svg>
  )
}

export default ChevronRightIcon;