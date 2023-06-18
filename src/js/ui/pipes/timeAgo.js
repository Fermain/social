export function timeAgoPipe(input = new Date()) {
    input = new Date(input);
    const now = new Date();
    const differenceInSeconds = Math.round((now - input) / 1000);

    if (differenceInSeconds < 60) {
        return differenceInSeconds + ' seconds ago';
    }
    const differenceInMinutes = Math.round(differenceInSeconds / 60);
    if (differenceInMinutes < 60) {
        return differenceInMinutes + ' minutes ago';
    }
    const differenceInHours = Math.round(differenceInMinutes / 60);
    if (differenceInHours < 24) {
        return differenceInHours + ' hours ago';
    }
    const differenceInDays = Math.round(differenceInHours / 24);
    if (differenceInDays < 7) {
        return differenceInDays + ' days ago';
    }
    const differenceInWeeks = Math.round(differenceInDays / 7);
    if (differenceInWeeks < 4) {
        return differenceInWeeks + ' weeks ago';
    }
    const differenceInMonths = Math.round(differenceInDays / 30.44);
    if (differenceInMonths < 12) {
        return differenceInMonths + ' months ago';
    }
    const differenceInYears = Math.round(differenceInMonths / 12);
    return differenceInYears + ' years ago';
}
