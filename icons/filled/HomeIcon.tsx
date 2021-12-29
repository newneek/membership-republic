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
        d="M13.0013 16.0002V19.9992C13.0013 21.1042 13.8967 22 15.0013 22H19.9973C21.1019 22 21.9973 21.1042 21.9973 19.9992V13.0031C21.9973 12.5132 21.8176 12.0403 21.4923 11.6741L13.4954 2.67173C12.7 1.77622 11.3014 1.77607 10.5057 2.6714L2.5053 11.6737C2.1798 12.04 2 12.513 2 13.0031V19.9992C2 21.1042 2.89543 22 4 22H9.00157C10.1061 22 11.0016 21.1042 11.0016 19.9992V16.0002H13.0013Z"
        fill="inherit"
      />
    </svg>
  )
}

export default HomeIcon;