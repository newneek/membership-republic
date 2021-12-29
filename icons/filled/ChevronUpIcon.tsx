import * as React from 'react';

function ChevronUpIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M3.00069 17C2.74454 17.0002 2.48833 16.9025 2.29289 16.7071C1.90237 16.3166 1.90237 15.6834 2.29289 15.2929L11.2929 6.29289C11.6834 5.90237 12.3166 5.90237 12.7071 6.29289L21.7071 15.2929C22.0976 15.6834 22.0976 16.3166 21.7071 16.7071C21.5117 16.9025 21.2555 17.0002 20.9993 17M20.9993 17L3.00069 17Z"
        fill="inherit"
      />
    </svg>
  )
}

export default ChevronUpIcon;