import * as React from 'react';

function PencilAltIcon(props: React.SVGProps<SVGSVGElement>) {
  if (props.type === 'solid') {
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
          d="M20.9749 7.97397C21.6313 7.31753 22.0001 6.42721 22.0001 5.49886C22.0001 4.57052 21.6313 3.6802 20.9749 3.02376C20.3184 2.36732 19.4281 1.99854 18.4998 1.99854C17.5714 1.99854 16.6811 2.36732 16.0247 3.02376L15.2318 3.81663L20.182 8.76684L20.9749 7.97397Z"
          fill="inherit"
        />
        <path
          d="M18.7678 10.1811L13.8176 5.23085L2.29265 16.7558C2.10511 16.9433 1.99976 17.1977 1.99976 17.4629V21.0349C1.99976 21.5871 2.44747 22.0349 2.99976 22.0349H6.49976C6.58896 22.0349 6.67694 22.0229 6.76156 22L21.0001 21.9998C21.5524 21.9998 22.0001 21.5529 22.0001 21.0016C22.0001 20.4503 21.5524 20.0034 21.0001 20.0034H8.94541L18.7678 10.1811Z"
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
        d="M17.4391 4.43501C17.7205 4.15416 18.1021 3.99637 18.5 3.99637C18.8979 3.99637 19.2795 4.15416 19.5609 4.43501C19.8423 4.71587 20.0003 5.09679 20.0003 5.49398C20.0003 5.89117 19.8423 6.2721 19.5609 6.55295L18.768 7.34441L16.6462 5.22647L17.4391 4.43501ZM22.0003 5.49398C22.0003 6.42065 21.6315 7.30935 20.9751 7.9646L8.91441 20.0034H21C21.5523 20.0034 22 20.4503 22 21.0016C22 21.5529 21.5523 21.9998 21 21.9998H6.51983C6.51323 21.9999 6.50662 22 6.5 22H3C2.44772 22 2 21.5531 2 21.0018V17.4363C2 17.1716 2.10536 16.9177 2.29289 16.7305L16.0249 3.02336C16.6813 2.36812 17.5717 2 18.5 2C19.4283 2 20.3187 2.36812 20.9751 3.02336C21.6315 3.67861 22.0003 4.56732 22.0003 5.49398ZM6.08598 20.0034H5C4.99331 20.0034 4.98664 20.0035 4.97998 20.0036H4V17.8498L15.232 6.63812L17.3538 8.75606L6.08598 20.0034Z"
        fill="inherit"
      />
    </svg>
  )
}

export default PencilAltIcon;