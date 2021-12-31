import { Variables } from "..";

function ChevronLeftIcon(
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17 20.9993C17.0002 21.2555 16.9025 21.5117 16.7071 21.7071C16.3166 22.0976 15.6834 22.0976 15.2929 21.7071L6.29289 12.7071C5.90237 12.3166 5.90237 11.6834 6.29289 11.2929L15.2929 2.29289C15.6834 1.90237 16.3166 1.90237 16.7071 2.29289C16.9025 2.48833 17.0002 2.74454 17 3.00069M17 3.00069V20.9993V3.00069Z" />
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.41421 12L16.7071 20.2929C17.0976 20.6834 17.0976 21.3166 16.7071 21.7071C16.3166 22.0976 15.6834 22.0976 15.2929 21.7071L6.29289 12.7071C5.90237 12.3166 5.90237 11.6834 6.29289 11.2929L15.2929 2.29289C15.6834 1.90237 16.3166 1.90237 16.7071 2.29289C17.0976 2.68342 17.0976 3.31658 16.7071 3.70711L8.41421 12Z" />
    </svg>      
  `;
}

export default ChevronLeftIcon;