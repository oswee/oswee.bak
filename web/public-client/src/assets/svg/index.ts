import { svg } from 'lit-element';

export const Grid = () => svg`
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path stroke="#000" stroke-width="16" stroke-linecap="round" d="M48 104h64M16 64h64M32 24h64"/>
    </svg>
`;

export const Question = () => svg`
    <svg id="i-question" viewBox="0 0 24 24">
        <path d="M10.8 19.2H13.2V16.8H10.8V19.2ZM12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 21.6C6.708 21.6 2.4 17.292 2.4 12C2.4 6.708 6.708 2.4 12 2.4C17.292 2.4 21.6 6.708 21.6 12C21.6 17.292 17.292 21.6 12 21.6ZM12 4.8C9.348 4.8 7.2 6.948 7.2 9.6H9.6C9.6 8.28 10.68 7.2 12 7.2C13.32 7.2 14.4 8.28 14.4 9.6C14.4 12 10.8 11.7 10.8 15.6H13.2C13.2 12.9 16.8 12.6 16.8 9.6C16.8 6.948 14.652 4.8 12 4.8Z"/>
    </svg>
`;

export const ChevronRight = () => svg`
    <svg id="i-chevron-right" viewBox="0 0 32 32" width="12" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M12 30 L24 16 12 2" />
    </svg>
`;

export const Message = () => svg`
    <svg id="i-msg" viewBox="0 0 32 32" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M2 4 L30 4 30 22 16 22 8 29 8 22 2 22 Z" />
    </svg>
`;
