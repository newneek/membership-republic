import { Variables } from "..";

function ChevronDoubleUpIcon(
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2929 13.7071L12 5.41421L3.70711 13.7071C3.31658 14.0976 2.68342 14.0976 2.29289 13.7071C1.90237 13.3166 1.90237 12.6834 2.29289 12.2929L11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L21.7071 12.2929C22.0976 12.6834 22.0976 13.3166 21.7071 13.7071C21.3166 14.0976 20.6834 14.0976 20.2929 13.7071ZM20.2929 19.7071L12 11.4142L3.70711 19.7071C3.31658 20.0976 2.68342 20.0976 2.29289 19.7071C1.90237 19.3166 1.90237 18.6834 2.29289 18.2929L11.2929 9.29289C11.6834 8.90237 12.3166 8.90237 12.7071 9.29289L21.7071 18.2929C22.0976 18.6834 22.0976 19.3166 21.7071 19.7071C21.3166 20.0976 20.6834 20.0976 20.2929 19.7071Z" />
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2929 13.7071L12 5.41421L3.70711 13.7071C3.31658 14.0976 2.68342 14.0976 2.29289 13.7071C1.90237 13.3166 1.90237 12.6834 2.29289 12.2929L11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L21.7071 12.2929C22.0976 12.6834 22.0976 13.3166 21.7071 13.7071C21.3166 14.0976 20.6834 14.0976 20.2929 13.7071ZM20.2929 19.7071L12 11.4142L3.70711 19.7071C3.31658 20.0976 2.68342 20.0976 2.29289 19.7071C1.90237 19.3166 1.90237 18.6834 2.29289 18.2929L11.2929 9.29289C11.6834 8.90237 12.3166 8.90237 12.7071 9.29289L21.7071 18.2929C22.0976 18.6834 22.0976 19.3166 21.7071 19.7071C21.3166 20.0976 20.6834 20.0976 20.2929 19.7071Z" />
    </svg>        
  `;
}

export default ChevronDoubleUpIcon;