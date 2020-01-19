export const add = (n: number, m: number) => {
    return n + m;
};

export const hocDouble = (func: (x: number, y: number) => number): (m: number, n: number) => number => {
    return (a: number, b: number) => {
        return func(a*2, b*2);
    };
};