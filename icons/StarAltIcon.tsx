import * as React from 'react';

function StarAltIcon(props: React.SVGProps<SVGSVGElement>) {
    if (props.type === 'solid') {
        return (
            <svg
                width="24"
                height="24"
                strokeWidth="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 17.77L18.18 21.5L16.54 14.47L22 9.74L14.81 9.13L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77Z"
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
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 15.4339L15.1555 17.3385L14.318 13.7488L17.1077 11.3321L13.4392 11.0209L12 7.6252L10.5608 11.0209L6.89233 11.3321L9.68195 13.7488L8.84453 17.3385L12 15.4339ZM5.82 21.5L7.46 14.47L2 9.74L9.19 9.13L12 2.5L14.81 9.13L22 9.74L16.54 14.47L18.18 21.5L12 17.77L5.82 21.5Z"
                fill="inherit"
            />
        </svg>
    );
}

export default StarAltIcon;