
export const DaysSinceDate = (A) => {
    const dateA = new Date(A);
    const today = new Date();

    const differenceInTime = today - dateA;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

    return differenceInDays
};
