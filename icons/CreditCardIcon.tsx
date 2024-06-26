import * as React from 'react';

function CreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M6 4C3.79086 4 2 5.79086 2 8V16C2 18.2091 3.79086 20 6 20H18C20.2091 20 22 18.2091 22 16V8C22 5.79086 20.2091 4 18 4H6ZM4 8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8H4ZM4 12V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V12H4Z"
          fill="inherit"
        />
      </svg>
    );
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
        d="M6 4C3.79086 4 2 5.79086 2 8V16C2 18.2091 3.79086 20 6 20H18C20.2091 20 22 18.2091 22 16V8C22 5.79086 20.2091 4 18 4H6ZM4 8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8H4ZM4 12V16C4 17.1046 4.89543 18 6 18H18C19.1046 18 20 17.1046 20 16V12H4Z"
        fill="inherit"
      />
    </svg>
  );
}

export default CreditCardIcon;
