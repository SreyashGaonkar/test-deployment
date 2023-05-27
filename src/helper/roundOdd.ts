export const roundOff = (num: number) => {
    let y = num.toString().split('.');
    if (y && y[1] && y[1][2]) {
        return Math.floor(num * 100) / 100;
    } else return num;
};