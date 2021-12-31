import { Variables } from "..";

function LogoutIcon(
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
      <path d="M5 5C5 4.44772 4.55228 4 4 4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20C4.55228 20 5 19.5523 5 19V5Z" />
      <path d="M16.2929 8.70711C15.9024 8.31659 15.9024 7.68342 16.2929 7.2929C16.6834 6.90237 17.3166 6.90237 17.7071 7.29289L21.7071 11.2928C21.8946 11.4804 22 11.7347 22 11.9999C22 12.2652 21.8946 12.5195 21.7071 12.7071L17.7071 16.7071C17.3166 17.0976 16.6834 17.0976 16.2929 16.7071C15.9024 16.3166 15.9024 15.6834 16.2929 15.2929L18.5858 12.9999H8C7.44772 12.9999 7 12.5522 7 11.9999C7 11.4477 7.44772 10.9999 8 10.9999H18.5858L16.2929 8.70711Z" />
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
    <path d="M5 5C5 4.44772 4.55228 4 4 4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20C4.55228 20 5 19.5523 5 19V5Z" />
    <path d="M16.2929 8.70711C15.9024 8.31659 15.9024 7.68342 16.2929 7.2929C16.6834 6.90237 17.3166 6.90237 17.7071 7.29289L21.7071 11.2928C21.8946 11.4804 22 11.7347 22 11.9999C22 12.2652 21.8946 12.5195 21.7071 12.7071L17.7071 16.7071C17.3166 17.0976 16.6834 17.0976 16.2929 16.7071C15.9024 16.3166 15.9024 15.6834 16.2929 15.2929L18.5858 12.9999H8C7.44772 12.9999 7 12.5522 7 11.9999C7 11.4477 7.44772 10.9999 8 10.9999H18.5858L16.2929 8.70711Z" />
    </svg>    
  `;
}

export default LogoutIcon;