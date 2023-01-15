export const generateArrayRange = (size: number): Array<number> =>
    Array.from(
        {length: size},
        (value, index) => index
    );