import * as React from 'react';

function ChatIcon(props: React.SVGProps<SVGSVGElement>) {
  if (props.type === 'solid') {
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
          d="M12 3C6.59173 3 2.00002 6.92222 2.00002 12C2.00002 13.6065 2.46828 15.1107 3.27881 16.4085L2.06369 19.6489C1.9362 19.9888 2.003 20.3712 2.23822 20.6478C2.47343 20.9244 2.84009 21.0518 3.19613 20.9806L7.62501 20.0948C9.00427 20.6961 10.4946 21.0049 12.0017 21C17.4093 20.9992 22 17.0772 22 12C22 6.92222 17.4083 3 12 3ZM12.0017 21L12.0034 21L12 20V21H12.0017ZM7 12C7 11.4477 7.44772 11 8 11H8.01C8.56228 11 9.01 11.4477 9.01 12C9.01 12.5523 8.56228 13 8.01 13H8C7.44772 13 7 12.5523 7 12ZM11 12C11 11.4477 11.4477 11 12 11H12.01C12.5623 11 13.01 11.4477 13.01 12C13.01 12.5523 12.5623 13 12.01 13H12C11.4477 13 11 12.5523 11 12ZM16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13H16.01C16.5623 13 17.01 12.5523 17.01 12C17.01 11.4477 16.5623 11 16.01 11H16Z"
          fill="inherit"
        />
      </svg>
    )
  }
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
        d="M12 5C7.4683 5 4.00002 8.24178 4.00002 12C4.00002 13.3513 4.43831 14.6186 5.20915 15.6993C5.40238 15.9702 5.44819 16.3195 5.33134 16.6311L4.56804 18.6666L7.5489 18.0704C7.75979 18.0282 7.97865 18.0552 8.17302 18.1472C9.36799 18.7131 10.6744 19.0045 11.9966 19L12 19C16.5317 19 20 15.7582 20 12C20 8.24178 16.5317 5 12 5ZM2.00002 12C2.00002 6.92222 6.59173 3 12 3C17.4083 3 22 6.92222 22 12C22 17.0772 17.4093 20.9992 12.0017 21H12V20L12.0034 21L12.0017 21C10.4946 21.0049 9.00427 20.6961 7.62501 20.0948L3.19613 20.9806C2.84009 21.0518 2.47343 20.9244 2.23822 20.6478C2.003 20.3712 1.9362 19.9888 2.06369 19.6489L3.27881 16.4085C2.46828 15.1107 2.00002 13.6065 2.00002 12ZM7.00002 12C7.00002 11.4477 7.44773 11 8.00002 11H8.01002C8.5623 11 9.01002 11.4477 9.01002 12C9.01002 12.5523 8.5623 13 8.01002 13H8.00002C7.44773 13 7.00002 12.5523 7.00002 12ZM11 12C11 11.4477 11.4477 11 12 11H12.01C12.5623 11 13.01 11.4477 13.01 12C13.01 12.5523 12.5623 13 12.01 13H12C11.4477 13 11 12.5523 11 12ZM15 12C15 11.4477 15.4477 11 16 11H16.01C16.5623 11 17.01 11.4477 17.01 12C17.01 12.5523 16.5623 13 16.01 13H16C15.4477 13 15 12.5523 15 12Z"
        fill="inherit"
      />
    </svg>
  )
}

export default ChatIcon;