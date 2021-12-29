import * as React from 'react';

function CollectionIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8.5 2C7.11929 2 6 3.11929 6 4.5H18C18 3.11929 16.8807 2 15.5 2H8.5Z"
        fill="inherit"
      />
      <path
        d="M4 8.5C4 7.11929 5.11929 6 6.5 6H17.5C18.8807 6 20 7.11929 20 8.5H4Z"
        fill="inherit"
      />
      <path
        d="M2 13C2 11.3431 3.34315 10 5 10H19C20.6569 10 22 11.3431 22 13V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V13Z"
        fill="inherit"
      />
    </svg>
  )
}

export default CollectionIcon;