import { Variables } from "..";

function CollectionIcon(
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
      <path d="M8.5 2C7.11929 2 6 3.11929 6 4.5H18C18 3.11929 16.8807 2 15.5 2H8.5Z" />
      <path d="M4 8.5C4 7.11929 5.11929 6 6.5 6H17.5C18.8807 6 20 7.11929 20 8.5H4Z" />
      <path d="M2 13C2 11.3431 3.34315 10 5 10H19C20.6569 10 22 11.3431 22 13V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V13Z" />
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 4C8.73478 4 8.48043 4.10536 8.29289 4.29289C8.10536 4.48043 8 4.73478 8 5V6H16V5C16 4.73478 15.8946 4.48043 15.7071 4.29289C15.5196 4.10536 15.2652 4 15 4H9ZM18 6.17157V5C18 4.20435 17.6839 3.44129 17.1213 2.87868C16.5587 2.31607 15.7956 2 15 2H9C8.20435 2 7.44129 2.31607 6.87868 2.87868C6.31607 3.44129 6 4.20435 6 5V6.17157C5.5821 6.31933 5.19808 6.55927 4.87868 6.87868C4.31607 7.44129 4 8.20435 4 9V10.1716C3.5821 10.3193 3.19808 10.5593 2.87868 10.8787C2.31607 11.4413 2 12.2044 2 13V19C2 19.7957 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7957 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7957 22 19V13C22 12.2043 21.6839 11.4413 21.1213 10.8787C20.8019 10.5593 20.4179 10.3193 20 10.1716V9C20 8.20435 19.6839 7.44129 19.1213 6.87868C18.8019 6.55927 18.4179 6.31933 18 6.17157ZM18 10V9C18 8.73478 17.8946 8.48043 17.7071 8.29289C17.5196 8.10536 17.2652 8 17 8H7C6.73478 8 6.48043 8.10536 6.29289 8.29289C6.10536 8.48043 6 8.73478 6 9V10H18ZM5 12C4.73478 12 4.48043 12.1054 4.29289 12.2929C4.10536 12.4804 4 12.7348 4 13V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V13C20 12.7348 19.8946 12.4804 19.7071 12.2929C19.5196 12.1054 19.2652 12 19 12H5Z" />
    </svg>    
  `;
}

export default CollectionIcon;