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
        d="M12 15.5858L20.2929 7.29289C20.6834 6.90237 21.3166 6.90237 21.7071 7.29289C22.0976 7.68342 22.0976 8.31658 21.7071 8.70711L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L2.29289 8.70711C1.90237 8.31658 1.90237 7.68342 2.29289 7.29289C2.68342 6.90237 3.31658 6.90237 3.70711 7.29289L12 15.5858Z"
        fill="inherti"
      />
    </svg>
  )
}

export default ChevronDownIcon;