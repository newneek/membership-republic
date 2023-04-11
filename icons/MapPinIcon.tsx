import * as React from 'react';

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
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
                    d="M18.364 4.63604C14.8492 1.12132 9.15076 1.12132 5.63604 4.63604C2.12132 8.15076 2.12132 13.8492 5.63604 17.364L9.87952 21.6074C11.0514 22.7793 12.9496 22.7783 14.1209 21.607L14.844 20.8839C14.8589 20.869 14.8566 20.8713 14.8534 20.8745L18.364 17.364C21.8787 13.8492 21.8787 8.15076 18.364 4.63604ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
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
                d="M16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L11.2937 20.1932C11.684 20.5835 12.3159 20.5836 12.7067 20.1928L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025ZM5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L14.8617 20.8662C14.8303 20.8976 14.8754 20.8525 14.844 20.8839L14.1209 21.607C12.9496 22.7783 11.0514 22.7793 9.87952 21.6074L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604ZM12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9ZM8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11Z"
                fill="inherit"
            />
        </svg>
    )
}

export default MapPinIcon;