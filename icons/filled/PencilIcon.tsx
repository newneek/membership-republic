import * as React from 'react';

function PencilIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M22.0003 5.49886C22.0003 6.42721 21.6315 7.31753 20.9751 7.97397L20.1822 8.76684L15.232 3.81663L16.0249 3.02376C16.6813 2.36732 17.5717 1.99854 18.5 1.99854C19.4283 1.99854 20.3187 2.36732 20.9751 3.02376C21.6315 3.6802 22.0003 4.57052 22.0003 5.49886Z"
        fill="inherit"
      />
      <path
        d="M13.8178 5.23085L18.768 10.1811L7.20711 21.742C7.01957 21.9295 6.76522 22.0349 6.5 22.0349H3C2.44772 22.0349 2 21.5871 2 21.0349V17.4629C2 17.1976 2.10536 16.9433 2.29289 16.7558L13.8178 5.23085Z"
        fill="inherit"
      />
    </svg>
  )
}

export default PencilIcon;