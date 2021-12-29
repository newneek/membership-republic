import * as React from 'react';

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3.00069 7C2.74454 6.99982 2.48833 7.09746 2.29289 7.29289C1.90237 7.68342 1.90237 8.31658 2.29289 8.70711L11.2929 17.7071C11.6834 18.0976 12.3166 18.0976 12.7071 17.7071L21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289C21.5117 7.09746 21.2555 6.99982 20.9993 7M20.9993 7L3.00069 7Z"
        fill="inherit"
      />
    </svg>
  )
}

export default ChevronDownIcon;