import * as React from 'react';

function Bulb(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4 9.5C4 12.3049 5.6338 14.7133 8 15.9968V19H16V15.9968C18.3662 14.7133 20 12.3049 20 9.5C20 5.28937 16.3472 2 12 2C7.6528 2 4 5.28937 4 9.5ZM15.6941 7.28016C16.0917 7.66352 16.1032 8.29658 15.7198 8.69414L11.8627 12.6941C11.4838 13.0871 10.8596 13.1036 10.4605 12.7311L8.31768 10.731C7.91393 10.3542 7.89212 9.72139 8.26895 9.31765C8.64579 8.9139 9.27858 8.89208 9.68233 9.26892L11.1059 10.5976L14.2802 7.30587C14.6635 6.90831 15.2966 6.8968 15.6941 7.28016Z"
        fill="inherit"
      />
      <path
        d="M16 20C16 21.1046 15.1046 22 14 22H10C8.89543 22 8 21.1046 8 20H16Z"
        fill="inherit"
      />
    </svg>
  )
}

export default Bulb;