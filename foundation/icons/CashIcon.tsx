import { Variables } from "..";

function CashIcon(
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
      <path d="M5 4C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V13C2 13.7956 2.31607 14.5587 2.87868 15.1213C3.32202 15.5647 3.88985 15.8549 4.5 15.9581V11C4.5 9.80653 4.97411 8.66193 5.81802 7.81802C6.66193 6.97411 7.80652 6.5 9 6.5H17.9581C17.8549 5.88985 17.5647 5.32202 17.1213 4.87868C16.5587 4.31607 15.7956 4 15 4H5Z" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.87868 8.87868C6.31607 9.44129 6 10.2044 6 11V17C6 17.7956 6.31607 18.5587 6.87868 19.1213C7.44129 19.6839 8.20435 20 9 20H19C19.7957 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V11C22 10.2043 21.6839 9.44129 21.1213 8.87868C20.5587 8.31607 19.7957 8 19 8H9C8.20435 8 7.44129 8.31607 6.87868 8.87868ZM15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14C16 13.4696 15.7893 12.9609 15.4142 12.5858C15.0391 12.2107 14.5304 12 14 12C13.4696 12 12.9609 12.2107 12.5858 12.5858C12.2107 12.9609 12 13.4696 12 14C12 14.5304 12.2107 15.0391 12.5858 15.4142C12.9609 15.7893 13.4696 16 14 16C14.5304 16 15.0391 15.7893 15.4142 15.4142Z" />
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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.87868 4.87868C3.44129 4.31607 4.20435 4 5 4H15C15.7956 4 16.5587 4.31607 17.1213 4.87868C17.6839 5.44129 18 6.20435 18 7V8H19C19.7957 8 20.5587 8.31607 21.1213 8.87868C21.6839 9.44129 22 10.2043 22 11V17C22 17.7957 21.6839 18.5587 21.1213 19.1213C20.5587 19.6839 19.7957 20 19 20H9C8.20435 20 7.44129 19.6839 6.87868 19.1213C6.31607 18.5587 6 17.7956 6 17V16H5C4.20435 16 3.44129 15.6839 2.87868 15.1213C2.31607 14.5587 2 13.7956 2 13V7C2 6.20435 2.31607 5.44129 2.87868 4.87868ZM8 17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18H19C19.2652 18 19.5196 17.8946 19.7071 17.7071C19.8946 17.5196 20 17.2652 20 17V11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10H9C8.73478 10 8.48043 10.1054 8.29289 10.2929C8.10536 10.4804 8 10.7348 8 11V17ZM16 8H9C8.20435 8 7.44129 8.31607 6.87868 8.87868C6.31607 9.44129 6 10.2044 6 11V14H5C4.73478 14 4.48043 13.8946 4.29289 13.7071C4.10536 13.5196 4 13.2652 4 13V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H15C15.2652 6 15.5196 6.10536 15.7071 6.29289C15.8946 6.48043 16 6.73478 16 7V8ZM14 13C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14C13 14.2652 13.1054 14.5196 13.2929 14.7071C13.4804 14.8946 13.7348 15 14 15C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14C15 13.7348 14.8946 13.4804 14.7071 13.2929C14.5196 13.1054 14.2652 13 14 13ZM11.8787 11.8787C12.4413 11.3161 13.2043 11 14 11C14.7957 11 15.5587 11.3161 16.1213 11.8787C16.6839 12.4413 17 13.2043 17 14C17 14.7957 16.6839 15.5587 16.1213 16.1213C15.5587 16.6839 14.7957 17 14 17C13.2043 17 12.4413 16.6839 11.8787 16.1213C11.3161 15.5587 11 14.7957 11 14C11 13.2043 11.3161 12.4413 11.8787 11.8787Z" />
    </svg>                
  `;
}

export default CashIcon;