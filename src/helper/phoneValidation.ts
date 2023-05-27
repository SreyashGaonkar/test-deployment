export const validatePhoneNumber = (number: string) => {
    const exp = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    if (number.match(exp)) {
        return true;
    } else {
        return false;
    }
}