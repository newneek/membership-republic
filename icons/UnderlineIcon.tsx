import * as React from 'react';

function UnderlineIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M12 17C10.3167 17 8.89583 16.425 7.7375 15.275C6.57917 14.125 6 12.7167 6 11.05V3H8V11.1C8 12.2 8.38333 13.125 9.15 13.875C9.91667 14.625 10.8667 15 12 15C13.1333 15 14.0833 14.625 14.85 13.875C15.6167 13.125 16 12.2 16 11.1V3H18V11.05C18 12.7167 17.4208 14.125 16.2625 15.275C15.1042 16.425 13.6833 17 12 17ZM5 21V19.5H19V21H5Z"
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
        d="M12 17C10.3167 17 8.89583 16.425 7.7375 15.275C6.57917 14.125 6 12.7167 6 11.05V3H8V11.1C8 12.2 8.38333 13.125 9.15 13.875C9.91667 14.625 10.8667 15 12 15C13.1333 15 14.0833 14.625 14.85 13.875C15.6167 13.125 16 12.2 16 11.1V3H18V11.05C18 12.7167 17.4208 14.125 16.2625 15.275C15.1042 16.425 13.6833 17 12 17ZM5 21V19.5H19V21H5Z"
        fill="inherit"
      />
    </svg>
  );
}

export default UnderlineIcon;
