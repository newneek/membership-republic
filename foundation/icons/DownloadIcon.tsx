import { Variables } from "..";

function DownloadIcon(
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
      <path d="M7.70711 10.2929C7.31659 9.90237 6.68342 9.90237 6.2929 10.2929C5.90237 10.6834 5.90237 11.3166 6.29289 11.7071L11.2928 16.7071C11.4804 16.8946 11.7347 17 11.9999 17C12.2652 17 12.5195 16.8946 12.7071 16.7071L17.7071 11.7071C18.0976 11.3166 18.0976 10.6834 17.7071 10.2929C17.3166 9.90237 16.6834 9.90237 16.2929 10.2929L12.9999 13.5858V3C12.9999 2.44772 12.5522 2 12 2C11.4477 2 11 2.44772 11 3V13.5858L7.70711 10.2929Z" />
      <path d="M4 15C4 14.4477 3.55228 14 3 14C2.44772 14 2 14.4477 2 15V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V15C22 14.4477 21.5523 14 21 14C20.4477 14 20 14.4477 20 15V20H4V15Z" />
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
    <path d="M7.70711 10.2929C7.31659 9.90237 6.68342 9.90237 6.2929 10.2929C5.90237 10.6834 5.90237 11.3166 6.29289 11.7071L11.2928 16.7071C11.4804 16.8946 11.7347 17 11.9999 17C12.2652 17 12.5195 16.8946 12.7071 16.7071L17.7071 11.7071C18.0976 11.3166 18.0976 10.6834 17.7071 10.2929C17.3166 9.90237 16.6834 9.90237 16.2929 10.2929L12.9999 13.5858V3C12.9999 2.44772 12.5522 2 12 2C11.4477 2 11 2.44772 11 3V13.5858L7.70711 10.2929Z" />
    <path d="M4 15C4 14.4477 3.55228 14 3 14C2.44772 14 2 14.4477 2 15V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V15C22 14.4477 21.5523 14 21 14C20.4477 14 20 14.4477 20 15V20H4V15Z" />
    </svg>    
  `;
}

export default DownloadIcon;