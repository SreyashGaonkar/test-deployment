export const naiveRound = (num: any) => {
    var p = Math.pow(10, 2);
    let x = Math.round(num * p) / p;
    if (x == Math.floor(x)) {
        return x;
    } else {
        let f = x.toString().split('.')[0];
        let y = x.toString().split('.')[1];
        let dummy = num.toString().split('.')[1];
        if (y[1] && dummy[2] && dummy[2] < 5 && parseInt(dummy[2]) !== 0) {
            let z = parseInt(y[1]) + 1;
            return Number(`${f}.${y[0]}${z}`);
        } else if (y[1] && dummy[2] && dummy[2] > 5 && (Number(y[1]) < 5)) {
            let z = parseInt(y[1]);
            return Number(`${f}.${y[0]}${z}`);
        } else {
            return x;
        }
    }
};