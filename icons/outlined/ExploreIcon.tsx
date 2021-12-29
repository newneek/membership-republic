import * as React from 'react';

function ExploreIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16.9104 8.41383C17.0829 8.03435 17.0019 7.58768 16.7071 7.29292C16.4124 6.99817 15.9657 6.91717 15.5862 7.08966L10.4276 9.43449C9.9874 9.63458 9.63458 9.9874 9.43449 10.4276L7.08966 15.5862C6.91717 15.9657 6.99817 16.4124 7.29292 16.7071C7.58768 17.0019 8.03435 17.0829 8.41383 16.9104L13.5724 14.5656C14.0127 14.3655 14.3655 14.0127 14.5656 13.5724L16.9104 8.41383ZM11.2552 11.2552L13.9862 10.0139L12.7448 12.7448L10.0139 13.9862L11.2552 11.2552Z"
        fill="inherit"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"
        fill="inherit"
      />
    </svg>
  )
}

export default ExploreIcon;