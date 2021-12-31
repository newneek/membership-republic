import { Variables } from "..";

function BellIcon(
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9958 2C10.9958 1.44772 11.4435 1 11.9958 1C12.548 1 12.9958 1.44772 12.9958 2V3.06494C16.838 3.56772 19.9958 6.9287 19.9958 11V16L20.881 18.5144C21.2395 19.1809 20.7418 20 20.0038 20H14.9958C14.9958 21.6569 13.6526 23 11.9958 23C10.3389 23 8.99576 21.6569 8.99576 20H3.99623C3.25815 20 2.76052 19.1809 3.11897 18.5144L3.99623 16V11C3.99623 6.93164 7.15617 3.57258 10.9958 3.06603V2Z" />
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9958 2C10.9958 1.44772 11.4435 1 11.9958 1C12.548 1 12.9958 1.44772 12.9958 2V3.06494C16.838 3.56772 19.9958 6.9287 19.9958 11V16L20.881 18.5144C21.2395 19.1809 20.7418 20 20.0038 20H14.9958C14.9958 21.6569 13.6526 23 11.9958 23C10.3389 23 8.99576 21.6569 8.99576 20H3.99623C3.25815 20 2.76052 19.1809 3.11897 18.5144L3.99623 16V11C3.99623 6.93164 7.15617 3.57258 10.9958 3.06603V2ZM18.5796 18L17.9958 16.3418V11C17.9958 7.70775 15.1939 5 12 5C8.80352 5 5.99623 7.71031 5.99623 11V16.3389L5.41666 18H18.5796ZM10.9958 20C10.9958 20.5523 11.4435 21 11.9958 21C12.548 21 12.9958 20.5523 12.9958 20H10.9958Z" />
    </svg>    
  `;
}

export default BellIcon;