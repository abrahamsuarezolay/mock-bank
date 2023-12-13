//Random number generator for the account numbers

export const accountNumberGenerator = () => {

    // Generate four random numbers between 0 and 9999
    const firstPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const secondPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

    // Concatenate the parts with a hyphen in between
    const result = `${firstPart}-${secondPart}`;

    return result;
}