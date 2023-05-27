export const checkDoubleSpace = (name: string) => {
    const exp = /\s{2}/;
    if (exp.test(name)) {
        return true;
    } else {
        return false;
    }
}