import { Variables } from "..";

function ChevronUpIcon(
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00069 17C2.74454 17.0002 2.48833 16.9025 2.29289 16.7071C1.90237 16.3166 1.90237 15.6834 2.29289 15.2929L11.2929 6.29289C11.6834 5.90237 12.3166 5.90237 12.7071 6.29289L21.7071 15.2929C22.0976 15.6834 22.0976 16.3166 21.7071 16.7071C21.5117 16.9025 21.2555 17.0002 20.9993 17M20.9993 17L3.00069 17L20.9993 17Z" />
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.41421L20.2929 16.7071C20.6834 17.0976 21.3166 17.0976 21.7071 16.7071C22.0976 16.3166 22.0976 15.6834 21.7071 15.2929L12.7071 6.29289C12.3166 5.90237 11.6834 5.90237 11.2929 6.29289L2.29289 15.2929C1.90237 15.6834 1.90237 16.3166 2.29289 16.7071C2.68342 17.0976 3.31658 17.0976 3.70711 16.7071L12 8.41421Z" />
    </svg>    
  `;
}

export default ChevronUpIcon;