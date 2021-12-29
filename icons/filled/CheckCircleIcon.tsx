import * as React from 'react';

function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893ZM16.2433 10.169C16.6128 9.75846 16.5795 9.12617 16.169 8.75671C15.7585 8.38726 15.1262 8.42053 14.7567 8.83104L10.9618 13.0476L9.20711 11.2929C8.81659 10.9023 8.18343 10.9023 7.7929 11.2929C7.40237 11.6834 7.40237 12.3165 7.79289 12.7071L10.2929 15.2071C10.4869 15.4011 10.752 15.5069 11.0263 15.4997C11.3005 15.4925 11.5598 15.3729 11.7433 15.169L16.2433 10.169Z"
        fill="inherit"
      />
    </svg>
  )
}

export default CheckCircleIcon;