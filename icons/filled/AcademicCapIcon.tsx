import * as React from 'react';

function AcademicCap(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12.4061 4.08619C12.1476 3.97127 11.8524 3.97127 11.5939 4.08619L2.59386 8.08619C2.23273 8.24669 2 8.60481 2 9C2 9.39519 2.23273 9.75331 2.59386 9.91381L5.92145 11.3927L5.10325 15.4838C5.03538 15.6515 5 15.824 5 16C5 17.6568 8.13401 19 12 19C15.866 19 19 17.6568 19 16C19 15.824 18.9646 15.6515 18.8968 15.4838L18.0786 11.3927L21.4061 9.91381C21.7673 9.75331 22 9.39519 22 9C22 8.60481 21.7673 8.24669 21.4061 8.08619L12.4061 4.08619ZM13 9C13 9.55229 12.5523 10 12 10C11.4477 10 11 9.55229 11 9C11 8.44771 11.4477 8 12 8C12.5523 8 13 8.44771 13 9Z"
        fill="inherit"
      />
    </svg>
  )
}

export default AcademicCap;