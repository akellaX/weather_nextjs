export const parseDateString = (
    dateString: string | Date,
    timezoneOffset: string
): string => {
    const date = new Date(dateString);

    const offsetParts = timezoneOffset.split(':');
    const hoursOffset = parseInt(offsetParts[0]);
    const minutesOffset = parseInt(offsetParts[1]);

    // Convert the minutes offset to hours
    const totalOffset = hoursOffset + minutesOffset / 60;

    // Adjust the date by the timezone offset
    date.setHours(date.getHours() + totalOffset);

    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' });
    const dayOfMonth = date.getDate();

    return `${dayOfWeek} ${dayOfMonth}`;
};
