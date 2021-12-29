import * as React from 'react';

function PlusChatIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 3C6.59173 3 2.00002 6.92222 2.00002 12C2.00002 13.6065 2.46828 15.1107 3.27881 16.4085L2.06369 19.6489C1.9362 19.9888 2.003 20.3712 2.23822 20.6478C2.47343 20.9244 2.84009 21.0518 3.19613 20.9806L7.62501 20.0948C9.00427 20.6961 10.4946 21.0049 12.0017 21C17.4093 20.9992 22 17.0772 22 12C22 6.92222 17.4083 3 12 3ZM13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H11V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13V9Z"
        fill="inherit"
      />
    </svg>
  )
}

export default PlusChatIcon;