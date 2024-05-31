export const preProcessingCategory = (data) => {
    return data.replace(/[^a-z0-9\s]/gi, "")
        .split(/\s+/)
        .join("-")
        .toLowerCase()

}