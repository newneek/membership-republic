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
        d="M12 8.41421L20.2929 16.7071C20.6834 17.0976 21.3166 17.0976 21.7071 16.7071C22.0976 16.3166 22.0976 15.6834 21.7071 15.2929L12.7071 6.29289C12.3166 5.90237 11.6834 5.90237 11.2929 6.29289L2.29289 15.2929C1.90237 15.6834 1.90237 16.3166 2.29289 16.7071C2.68342 17.0976 3.31658 17.0976 3.70711 16.7071L12 8.41421Z"
        fill="inherit"
      />
    </svg>
  )
}

export default ChevronUpIcon;