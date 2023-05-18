import * as React from 'react';

function ChevronDoubleRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M9.79289 19.7929L18.0858 11.5L9.79289 3.20711C9.40237 2.81658 9.40237 2.18342 9.79289 1.79289C10.1834 1.40237 10.8166 1.40237 11.2071 1.79289L20.2071 10.7929C20.5976 11.1834 20.5976 11.8166 20.2071 12.2071L11.2071 21.2071C10.8166 21.5976 10.1834 21.5976 9.79289 21.2071C9.40237 20.8166 9.40237 20.1834 9.79289 19.7929ZM3.79289 19.7929L12.0858 11.5L3.79289 3.20711C3.40237 2.81658 3.40237 2.18342 3.79289 1.79289C4.18342 1.40237 4.81658 1.40237 5.20711 1.79289L14.2071 10.7929C14.5976 11.1834 14.5976 11.8166 14.2071 12.2071L5.20711 21.2071C4.81658 21.5976 4.18342 21.5976 3.79289 21.2071C3.40237 20.8166 3.40237 20.1834 3.79289 19.7929Z"
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
        d="M9.79289 19.7929L18.0858 11.5L9.79289 3.20711C9.40237 2.81658 9.40237 2.18342 9.79289 1.79289C10.1834 1.40237 10.8166 1.40237 11.2071 1.79289L20.2071 10.7929C20.5976 11.1834 20.5976 11.8166 20.2071 12.2071L11.2071 21.2071C10.8166 21.5976 10.1834 21.5976 9.79289 21.2071C9.40237 20.8166 9.40237 20.1834 9.79289 19.7929ZM3.79289 19.7929L12.0858 11.5L3.79289 3.20711C3.40237 2.81658 3.40237 2.18342 3.79289 1.79289C4.18342 1.40237 4.81658 1.40237 5.20711 1.79289L14.2071 10.7929C14.5976 11.1834 14.5976 11.8166 14.2071 12.2071L5.20711 21.2071C4.81658 21.5976 4.18342 21.5976 3.79289 21.2071C3.40237 20.8166 3.40237 20.1834 3.79289 19.7929Z"
        fill="inherit"
      />
    </svg>
  );
}

export default ChevronDoubleRightIcon;
