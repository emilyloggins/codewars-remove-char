// Create a function that removes the first and last characters of a string.

const name = "heather"

makeNewString = (string) => {
    const x = string.slice(0, -1);
    const y = x.slice(1, 6);
    return y;
}

makeNewString(name);

