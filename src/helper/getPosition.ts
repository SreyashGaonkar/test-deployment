export const getPositionCommon = (sport: string): string => {
    switch (sport) {
        case 'Point Guard':
            return 'PG';
        case 'Point guard':
            return 'PG';
        case 'Shooting Guard':
            return 'SG';
        case 'Shooting guard':
            return 'SG';
        case 'All Rounder':
            return 'AR';
        case 'Small Forward':
            return 'SF';
        case 'Small forward':
            return 'SF';
        case 'Forward':
            return 'FW';
        case 'Midfield':
            return 'MID';
        case 'Defence':
            return 'DEF';
        case 'Goalkeeper':
            return 'GK';
        case 'Point Guard':
            return 'PG';
        case 'Shooting Guard':
            return 'SG';
        case 'Small Forward':
            return 'SF';
        case 'Center':
            return 'C';
        case 'Power Forward':
            return 'PF';
        case 'Righty':
            return 'Righty';
        case 'Lefty':
            return 'Lefty';
        case 'Batsman':
            return 'BAT';
        case 'Spin Bowler':
            return 'SB';
        case 'Pace Bowler':
            return 'PB';
        case 'Wicket Keeper/Batsman':
            return 'WK/BAT';
        default:
            return '';
    }
}