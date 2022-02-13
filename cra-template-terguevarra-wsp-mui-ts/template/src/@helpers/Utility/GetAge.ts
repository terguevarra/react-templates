import { parse, differenceInCalendarYears } from 'date-fns';

const GetAge = (_date : string, _dateFormat : string = 'yyyy-MM-dd') => differenceInCalendarYears(new Date(), parse(_date, _dateFormat, new Date()));

export default GetAge;