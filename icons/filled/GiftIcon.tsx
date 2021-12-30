import * as React from 'react';

function GiftIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d="M10.8393 2.26642C10.1998 2.00152 9.49602 1.9322 8.81709 2.06725C8.13815 2.2023 7.51451 2.53564 7.02503 3.02513C6.53555 3.51461 6.2022 4.13825 6.06715 4.81719C5.93211 5.49612 6.00142 6.19985 6.26632 6.83939C6.44767 7.2772 6.7151 7.67146 7.05041 8H4.4998C3.98263 8 3.48664 8.21071 3.12095 8.58579C2.75525 8.96086 2.5498 9.46957 2.5498 10C2.5498 10.5304 2.75525 11.0391 3.12095 11.4142C3.48664 11.7893 3.98263 12 4.4998 12L10.9999 12V9H12.9999V12L19.5 12C20.0172 12 20.5132 11.7893 20.8789 11.4142C21.2446 11.0391 21.45 10.5304 21.45 10C21.45 9.46957 21.2446 8.96086 20.8789 8.58579C20.5132 8.21071 20.0172 8 19.5 8H16.236C16.46 7.74952 16.6416 7.46183 16.7715 7.14805C16.9986 6.59987 17.058 5.99667 16.9423 5.41473C16.8265 4.83279 16.5408 4.29824 16.1212 3.87868C15.7017 3.45912 15.1671 3.1734 14.5852 3.05765C14.0032 2.94189 13.4 3.0013 12.8519 3.22836C12.6804 3.2994 12.5166 3.38585 12.3625 3.48623C11.981 2.94391 11.4529 2.52061 10.8393 2.26642ZM12.9999 7V6C12.9999 5.80222 13.0586 5.60888 13.1684 5.44443C13.2783 5.27998 13.4345 5.15181 13.6172 5.07612C13.7999 5.00043 14.001 4.98063 14.195 5.01922C14.389 5.0578 14.5672 5.15304 14.707 5.29289C14.8469 5.43275 14.9421 5.61093 14.9807 5.80491C15.0193 5.99889 14.9995 6.19996 14.9238 6.38269C14.8481 6.56541 14.7199 6.72159 14.5555 6.83147C14.391 6.94135 14.1977 7 13.9999 7H12.9999ZM10.9999 5.5V7H9.4999C9.20323 7 8.91322 6.91203 8.66655 6.74721C8.41987 6.58238 8.22762 6.34812 8.11408 6.07403C8.00055 5.79994 7.97085 5.49834 8.02873 5.20737C8.0866 4.91639 8.22946 4.64912 8.43924 4.43934C8.64902 4.22956 8.9163 4.0867 9.20727 4.02882C9.49824 3.97095 9.79984 4.00065 10.0739 4.11418C10.348 4.22771 10.5823 4.41997 10.7471 4.66665C10.9119 4.91332 10.9999 5.20333 10.9999 5.5Z"
        fill="inherit"
      />
      <path
        d="M3.9999 19V14L10.9999 14V22H6.9999C6.20425 22 5.44119 21.6839 4.87858 21.1213C4.31597 20.5587 3.9999 19.7957 3.9999 19Z"
        fill="inherit"
      />
      <path
        d="M16.9999 22H12.9999V14L19.9999 14V19C19.9999 19.7957 19.6838 20.5587 19.1212 21.1213C18.5586 21.6839 17.7956 22 16.9999 22Z"
        fill="inherit"
      />
    </svg>
  )
}

export default GiftIcon;