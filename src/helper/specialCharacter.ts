export const checkSpecialCharacter = (name: string) => {
    const exp = /[*|\":<>[\]{}`\\()/,*+=!%';@&$#^()?]/;
    if (exp.test(name)) {
        return true;
    } else {
        return false;
    }
}