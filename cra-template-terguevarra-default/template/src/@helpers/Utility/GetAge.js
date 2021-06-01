import { parse, differenceInCalendarYears } from 'date-fns';

const GetAge = (_date, _dateFormat = 'yyyy-MM-dd') => {
    return differenceInCalendarYears(new Date(), parse(_date, _dateFormat, new Date()));
}

export default GetAge;