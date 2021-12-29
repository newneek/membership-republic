import * as React from 'react';

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M13.0013 19.9992V16.0002H11.0016V19.9992C11.0016 21.1042 10.1061 22 9.00157 22H4C2.89543 22 2 21.1042 2 19.9992V13.0031C2 12.513 2.1798 12.04 2.5053 11.6737L10.5057 2.6714C11.3014 1.77607 12.7 1.77622 13.4954 2.67173L21.4923 11.6741C21.8176 12.0403 21.9973 12.5132 21.9973 13.0031V19.9992C21.9973 21.1042 21.1019 22 19.9973 22H15.0013C13.8967 22 13.0013 21.1042 13.0013 19.9992ZM19.9973 13.0031L12.0004 4.00077L4 13.0031V19.9992H9.00157V13.9994H15.0013V19.9992H19.9973V13.0031Z"
        fill="inherit"
      />
    </svg>
  )
}

export default HomeIcon;