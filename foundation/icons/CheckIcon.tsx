import { Variables } from "..";

function CheckIcon(
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.669 6.25671C20.0795 6.62617 20.1128 7.25846 19.7433 7.66897L10.7433 17.669C10.5598 17.8729 10.3005 17.9925 10.0263 17.9997C9.75204 18.0069 9.48688 17.9011 9.29289 17.7071L4.29289 12.707C3.90237 12.3165 3.90237 11.6833 4.2929 11.2928C4.68343 10.9023 5.31659 10.9023 5.70711 11.2928L9.96181 15.5476L18.2567 6.33104C18.6262 5.92053 19.2585 5.88726 19.669 6.25671Z" />
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.669 6.25671C20.0795 6.62617 20.1128 7.25846 19.7433 7.66897L10.7433 17.669C10.5598 17.8729 10.3005 17.9925 10.0263 17.9997C9.75204 18.0069 9.48688 17.9011 9.29289 17.7071L4.29289 12.707C3.90237 12.3165 3.90237 11.6833 4.2929 11.2928C4.68343 10.9023 5.31659 10.9023 5.70711 11.2928L9.96181 15.5476L18.2567 6.33104C18.6262 5.92053 19.2585 5.88726 19.669 6.25671Z" />
    </svg>
  `;
}

export default CheckIcon;