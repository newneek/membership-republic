import * as React from 'react';

function PlusChatIcon(props: React.SVGProps<SVGSVGElement>) {
  if (props.type === 'solid') {
    return (
      <svg
        width="24"
        height="24"
strokeWidth="0"
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
  return (
    <svg
      width="24"
      height="24"
strokeWidth="0"
      viewBox="0 0 24 24"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5C7.4683 5 4.00002 8.24178 4.00002 12C4.00002 13.3513 4.43831 14.6186 5.20915 15.6993C5.40238 15.9702 5.44819 16.3195 5.33134 16.6311L4.56804 18.6666L7.5489 18.0704C7.75979 18.0282 7.97865 18.0552 8.17302 18.1472C9.36799 18.7131 10.6744 19.0045 11.9966 19L12 19C16.5317 19 20 15.7582 20 12C20 8.24178 16.5317 5 12 5ZM2.00002 12C2.00002 6.92222 6.59173 3 12 3C17.4083 3 22 6.92222 22 12C22 17.0772 17.4093 20.9992 12.0017 21H12L12.0034 21L12.0017 21C10.4946 21.0049 9.00427 20.6961 7.62501 20.0948C7.5217 20.0498 7.72702 20.1431 7.62501 20.0948L3.19613 20.9806C2.84009 21.0518 2.47343 20.9244 2.23822 20.6478C2.003 20.3712 1.9362 19.9888 2.06369 19.6489L3.27881 16.4085C3.17346 16.2608 3.37477 16.5622 3.27881 16.4085C2.46828 15.1107 2.00002 13.6065 2.00002 12ZM12 8C12.5523 8 13 8.44772 13 9V11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H13V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V13H9.00002C8.44773 13 8.00002 12.5523 8.00002 12C8.00002 11.4477 8.44773 11 9.00002 11H11V9C11 8.44772 11.4477 8 12 8Z"
        fill="inherit"
      />
    </svg>
  )
}

export default PlusChatIcon;