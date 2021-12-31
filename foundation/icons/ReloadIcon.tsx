import { Variables } from "..";

function ReloadIcon(
  params: {
    type?: 'outline' | 'solid';
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
  } = {},
) {
  const fillValue = Variables.themeColors[params.fill] ?? 'black'
  if (params.type === 'solid') {
    return `
      <svg 
        width="${params.width ?? 24}" 
        height="${params.height ?? 24}" 
        fill="${fillValue}"  
        stroke="${Variables.themeColors[params.stroke] ?? fillValue}" 
        strokeWidth="${params.strokeWidth ?? 0}"
        viewBox="0 0 24 24"
      >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9701 7.33433C19.6501 6.94173 19.6501 5.96024 18.9701 5.56764L13.0301 2.13818C12.3501 1.74558 11.5001 2.23632 11.5001 3.02152V4.9846C7.29518 5.36347 4 8.89741 4 13.201C4 17.7573 7.69365 21.451 12.25 21.451C16.8063 21.451 20.5 17.7573 20.5 13.201C20.5 12.3725 19.8284 11.701 19 11.701C18.1716 11.701 17.5 12.3725 17.5 13.201C17.5 16.1005 15.1495 18.451 12.25 18.451C9.3505 18.451 7 16.1005 7 13.201C7 10.5561 8.95583 8.368 11.5001 8.00413V9.88044C11.5001 10.6656 12.3501 11.1564 13.0301 10.7638L18.9701 7.33433Z" />
      </svg>    
    `;
  }
  return `
    <svg 
      width="${params.width ?? 24}" 
      height="${params.height ?? 24}" 
      fill="${fillValue}"  
      stroke="${Variables.themeColors[params.stroke] ?? fillValue}" 
      strokeWidth="${params.strokeWidth ?? 0}"
      viewBox="0 0 24 24" 
    >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9701 7.33433C19.6501 6.94173 19.6501 5.96024 18.9701 5.56764L13.0301 2.13818C12.3501 1.74558 11.5001 2.23632 11.5001 3.02152V4.9846C7.29518 5.36347 4 8.89741 4 13.201C4 17.7573 7.69365 21.451 12.25 21.451C16.8063 21.451 20.5 17.7573 20.5 13.201C20.5 12.3725 19.8284 11.701 19 11.701C18.1716 11.701 17.5 12.3725 17.5 13.201C17.5 16.1005 15.1495 18.451 12.25 18.451C9.3505 18.451 7 16.1005 7 13.201C7 10.5561 8.95583 8.368 11.5001 8.00413V9.88044C11.5001 10.6656 12.3501 11.1564 13.0301 10.7638L18.9701 7.33433Z" />
    </svg>    
  `;
}

export default ReloadIcon;