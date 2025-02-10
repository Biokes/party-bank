export default function AnalyticsIcon({ color }: { color: string }) {
    return (
        <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.06 9.94L12 9L14.06 8.06L15 6L15.94 8.06L18 9L15.94 9.94L15 12L14.06 9.94ZM4 14L4.94 11.94L7 11L4.94 10.06L4 8L3.06 10.06L1 11L3.06 11.94L4 14ZM8.5 9L9.59 6.59L12 5.5L9.59 4.41L8.5 2L7.41 4.41L5 5.5L7.41 6.59L8.5 9ZM4.5 20.5L10.5 14.49L14.5 18.49L23 8.93L21.59 7.52L14.5 15.49L10.5 11.49L3 19L4.5 20.5Z" fill={color} />
            </svg>
        </div>
    )
}