export const checkSpace = (name: string) => {
    const exp = /\s/;
    if (exp.test(name)) {
        return true;
    } else {
        return false;
    }
}