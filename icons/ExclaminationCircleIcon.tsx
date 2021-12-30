import * as React from 'react';

function ExclaminationCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  if (props.type === 'filled') {
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
          d="M4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893ZM12 7C12.5523 7 13 7.44772 13 8V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V8C11 7.44772 11.4477 7 12 7ZM11 16C11 15.4477 11.4477 15 12 15H12.01C12.5623 15 13.01 15.4477 13.01 16C13.01 16.5523 12.5623 17 12.01 17H12C11.4477 17 11 16.5523 11 16Z"
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
        d="M13.0013 19.9992V16.0002H11.0016V19.9992C11.0016 21.1042 10.1061 22 9.00157 22H4C2.89543 22 2 21.1042 2 19.9992V13.0031C2 12.513 2.1798 12.04 2.5053 11.6737L10.5057 2.6714C11.3014 1.77607 12.7 1.77622 13.4954 2.67173L21.4923 11.6741C21.8176 12.0403 21.9973 12.5132 21.9973 13.0031V19.9992C21.9973 21.1042 21.1019 22 19.9973 22H15.0013C13.8967 22 13.0013 21.1042 13.0013 19.9992ZM19.9973 13.0031L12.0004 4.00077L4 13.0031V19.9992H9.00157V13.9994H15.0013V19.9992H19.9973V13.0031Z"
        fill="inherit"
      />
    </svg>
  )
}

export default ExclaminationCircleIcon;