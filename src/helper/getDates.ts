import moment from "moment";


export const getDates = (date: moment.MomentInput) => {
    let x = moment().startOf('day');
    let y = moment(date).startOf('day').diff(x, 'hour');
    if (
        ((y > -24 && y < 24) || y == 0) &&
        moment().format('YYYYMMDD') == moment(date).format('YYYYMMDD')
    ) {
        return 'Today';
    } else if (y > 0 && y < 48) {
        return 'Tommorow';
    } else if (y > -36 && y < 0) {
        return 'Yesterday';
    } else {
        return `${moment(date).format('ddd, MMM D')}` + ' in ' + toGo(date);
    }
};

const toGo = (date: moment.MomentInput) => {
    if (moment(date).fromNow(true) == 'a day') {
        let x = moment(date);
        let y = moment();
        return Math.abs(x.diff(y, 'hours')) + ' hrs';
    } else if (moment(date).fromNow(true) == 'an hour') {
        return '1 hr';
    } else if (moment(date).fromNow(true) == 'a month') {
        return '1 month';
    } else {
        let fromNow = moment(date)
            .fromNow(true)
            .replace('minutes', 'mins')
            .replace('days', 'd')
            .replace('hours', 'hrs');
        return (fromNow || '').replace(/\s/g, '');
    }
};