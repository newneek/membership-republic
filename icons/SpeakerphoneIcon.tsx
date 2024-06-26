import * as React from 'react';

function SpeakerphoneIcon(props: React.SVGProps<SVGSVGElement>) {
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
          d="M22 3C22 2.66818 21.8354 2.35797 21.5606 2.17194C21.2859 1.98591 20.9367 1.94829 20.6286 2.07153L10.8074 6H6.04762C3.82709 6 2 7.77608 2 10C2 12.2239 3.82709 14 6.04762 14H6.21922L8.02986 21.2425C8.14115 21.6877 8.54113 22 9 22H11C11.5523 22 12 21.5523 12 21V14.477L20.6286 17.9285C20.9367 18.0517 21.2859 18.0141 21.5606 17.8281C21.8354 17.642 22 17.3318 22 17V3Z"
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
        d="M21.5606 2.17194C21.8354 2.35797 22 2.66818 22 3V17C22 17.3318 21.8354 17.642 21.5606 17.8281C21.2859 18.0141 20.9367 18.0517 20.6286 17.9285L12 14.477V21C12 21.5523 11.5523 22 11 22H9.00001C8.54114 22 8.14116 21.6877 8.02987 21.2425L6.21923 14H6.04762C3.82709 14 2 12.2239 2 10C2 7.77607 3.82709 6 6.04762 6H10.8074L20.6286 2.07153C20.9367 1.94829 21.2859 1.98591 21.5606 2.17194ZM10 12V8H6.04762C4.90184 8 4 8.91022 4 10C4 11.0898 4.90184 12 6.04762 12H10ZM8.28079 14L9.78079 20H10V14H8.28079ZM20 15.523L12 12.323V7.67704L20 4.47704V15.523Z"
        fill="inherit"
      />
    </svg>
  );
}

export default SpeakerphoneIcon;
