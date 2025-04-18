export function parseTimeline(timeline: string): string {
    // Month name map (short to full)
    const monthMap: { [key: string]: string } = {
        Jan: "January", Feb: "February", Mar: "March", Apr: "April", May: "May", Jun: "June",
        Jul: "July", Aug: "August", Sept: "September", Oct: "October", Nov: "November", Dec: "December"
    };

    // Function to convert short year (like "22") to full year (like "2022")
    const convertToFullYear = (year: string): number => {
        if (year.length === 2) {
            return parseInt(year, 10) + 2000; // For example, "22" -> "2022"
        }
        return parseInt(year, 10); // For full year already (e.g., 2023)
    };

    // Helper function to build a Date object from month, day, and year
    const buildDate = (month: string, year: number): Date => {
        const fullMonth = monthMap[month]; // Get full month name
        return new Date(`${fullMonth} 1, ${year}`); // Only month and year
    };

    // Split timeline into start and end
    const parts = timeline.split(" - ");

    // Parse start date
    const startParts = parts[0].split(" ");
    const startMonth = startParts[0]; // Get short month name
    const startYear = convertToFullYear(startParts[1]); // Get year from the timeline (e.g., "22" -> 2022)
    const startDate = buildDate(startMonth, startYear);

    // Parse end date (handle "Present" or specific date)
    let endDate: Date;
    if (parts[1]?.toLowerCase() === "present") {
        endDate = new Date(); // Current date if "Present"
    } else {
        const endParts = parts[1].split(" ");
        const endMonth = endParts[0]; // Get short month name
        const endYear = convertToFullYear(endParts[1]); // Get year from the timeline (e.g., "24" -> 2024)
        endDate = buildDate(endMonth, endYear);
    }

    return calculateFullTimeDifference(startDate, endDate)
}

function calculateFullTimeDifference(start: Date, end: Date): string {
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth() + 1;
    let days = end.getDate() - start.getDate();
    let hours = end.getHours() - start.getHours();
    let minutes = end.getMinutes() - start.getMinutes();
    let seconds = end.getSeconds() - start.getSeconds();

    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        months--;
        const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    return formatDuration(years,months,days,hours,minutes,seconds)
}

function formatDuration(years: number, months: number, days: number, hours: number, minutes: number, seconds: number): string {
    const hasTime = hours || minutes || seconds;
    const hasDate = years || months || days;

    const timeParts = [hours, minutes, seconds].map(unit => String(unit).padStart(2, "0"));
    const timeString = timeParts.join(":");

    if (!hasTime && hasDate) {
        const parts: string[] = [];
        if (years) parts.push(`${years} Year${years > 1 ? 's' : ''}`);
        if (months) parts.push(`${months} Month${months > 1 ? 's' : ''}`);
        if (days) parts.push(`${days} Day${days > 1 ? 's' : ''}`);
        return parts.join(" ");
    }

    const parts: string[] = [];
    if (years) parts.push(`${years}Y`);
    if (months) parts.push(`${months}M`);
    if (days) parts.push(`${days}D`);
    if (hasTime) parts.push(timeString);

    return parts.join(" ");
}



