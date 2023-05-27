export const indianRupeeComma = (value: any) => {
    let x = value ? Number(value) : 0;
    let num = Number.isInteger(x)
        ? new Number(x).toLocaleString('hi-IN')
        : new Number(x).toLocaleString('hi-IN');
    return num;
};