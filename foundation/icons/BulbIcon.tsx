import { Variables } from "..";

function BulbIcon(
  params: {
    type?: 'outlined' | 'filled';
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
  } = {},
) {
  const fillValue = Variables.themeColors[params.fill] ?? 'black'
  if (params.type === 'filled') {
    return `
      <svg 
        width="${params.width ?? 24}" 
        height="${params.height ?? 24}" 
        fill="${fillValue}"  
        stroke="${Variables.themeColors[params.stroke] ?? fillValue}" 
        strokeWidth="${params.strokeWidth ?? 0}"
        viewBox="0 0 24 24"
      >
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4 9.5C4 12.3049 5.6338 14.7133 8 15.9968V19H16V15.9968C18.3662 14.7133 20 12.3049 20 9.5C20 5.28937 16.3472 2 12 2C7.6528 2 4 5.28937 4 9.5ZM15.6941 7.28016C16.0917 7.66352 16.1032 8.29658 15.7198 8.69414L11.8627 12.6941C11.4838 13.0871 10.8596 13.1036 10.4605 12.7311L8.31768 10.731C7.91393 10.3542 7.89212 9.72139 8.26895 9.31765C8.64579 8.9139 9.27858 8.89208 9.68233 9.26892L11.1059 10.5976L14.2802 7.30587C14.6635 6.90831 15.2966 6.8968 15.6941 7.28016Z" />
      <path d="M16 20C16 21.1046 15.1046 22 14 22H10C8.89543 22 8 21.1046 8 20H16Z" />
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
    <path d="M15.7198 8.69414C16.1032 8.29658 16.0917 7.66352 15.6941 7.28016C15.2966 6.8968 14.6635 6.90831 14.2802 7.30587L11.1059 10.5976L9.68233 9.26892C9.27858 8.89208 8.64579 8.9139 8.26895 9.31765C7.89212 9.72139 7.91393 10.3542 8.31768 10.731L10.4605 12.7311C10.8596 13.1036 11.4838 13.0871 11.8627 12.6941L15.7198 8.69414Z" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 15.9968C5.6338 14.7133 4 12.3049 4 9.5C4 5.28937 7.6528 2 12 2C16.3472 2 20 5.28937 20 9.5C20 12.3049 18.3662 14.7133 16 15.9968V19H8V15.9968ZM6 9.5C6 6.53093 8.61521 4 12 4C15.3848 4 18 6.53093 18 9.5C18 11.651 16.6426 13.5569 14.5964 14.4595C14.2339 14.6194 14 14.9783 14 15.3745V17H10V15.3745C10 14.9783 9.76609 14.6194 9.40359 14.4595C7.35736 13.5569 6 11.651 6 9.5Z" />
    <path d="M14 22C15.1046 22 16 21.1046 16 20H8C8 21.1046 8.89543 22 10 22H14Z" />
    </svg>            
  `;
}

export default BulbIcon;