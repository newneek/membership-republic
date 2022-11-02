import * as React from 'react';

function AsteriskIcon(props: React.SVGProps<SVGSVGElement>) {
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
        {' '}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0001 21C11.4479 21 11.0001 20.5523 11.0001 20V4C11.0001 3.44771 11.4479 3 12.0001 3C12.5524 3 13.0001 3.44771 13.0001 4V20C13.0001 20.5523 12.5524 21 12.0001 21Z"
          fill="inherit"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.20592 7.5C4.48206 7.02171 5.09365 6.85783 5.57194 7.13397L19.4284 15.134C19.9066 15.4101 20.0705 16.0217 19.7944 16.5C19.5182 16.9783 18.9066 17.1422 18.4284 16.866L4.57194 8.86603C4.09365 8.58988 3.92978 7.97829 4.20592 7.5Z"
          fill="inherit"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.20592 16.5C3.92978 16.0217 4.09365 15.4101 4.57194 15.134L18.4284 7.13398C18.9066 6.85783 19.5182 7.02171 19.7944 7.5C20.0705 7.97829 19.9066 8.58988 19.4284 8.86603L5.57194 16.866C5.09365 17.1422 4.48206 16.9783 4.20592 16.5Z"
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
      {' '}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 21C11.4479 21 11.0001 20.5523 11.0001 20V4C11.0001 3.44771 11.4479 3 12.0001 3C12.5524 3 13.0001 3.44771 13.0001 4V20C13.0001 20.5523 12.5524 21 12.0001 21Z"
        fill="inherit"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.20592 7.5C4.48206 7.02171 5.09365 6.85783 5.57194 7.13397L19.4284 15.134C19.9066 15.4101 20.0705 16.0217 19.7944 16.5C19.5182 16.9783 18.9066 17.1422 18.4284 16.866L4.57194 8.86603C4.09365 8.58988 3.92978 7.97829 4.20592 7.5Z"
        fill="inherit"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.20592 16.5C3.92978 16.0217 4.09365 15.4101 4.57194 15.134L18.4284 7.13398C18.9066 6.85783 19.5182 7.02171 19.7944 7.5C20.0705 7.97829 19.9066 8.58988 19.4284 8.86603L5.57194 16.866C5.09365 17.1422 4.48206 16.9783 4.20592 16.5Z"
        fill="inherit"
      />
    </svg>
  );
}

export default AsteriskIcon;
