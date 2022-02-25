import * as React from 'react';

function FilmIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579ZM4 9V11H6V9H4ZM6 7H4V5L6 5V7ZM8 11H16V5H8V11ZM18 5V7H20V5H18ZM20 9H18V11H20V9ZM20 13H18V15H20V13ZM20 17H18V19H20V17ZM16 19V13H8V19H16ZM6 19V17H4V19H6ZM4 15H6V13H4V15Z"
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
        d="M2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V5C2 4.46957 2.21071 3.96086 2.58579 3.58579ZM4 9V11H6V9H4ZM6 7H4V5L6 5V7ZM8 11H16V5H8V11ZM18 5V7H20V5H18ZM20 9H18V11H20V9ZM20 13H18V15H20V13ZM20 17H18V19H20V17ZM16 19V13H8V19H16ZM6 19V17H4V19H6ZM4 15H6V13H4V15Z"
        fill="inherit"
      />
    </svg>
  )
}

export default FilmIcon;