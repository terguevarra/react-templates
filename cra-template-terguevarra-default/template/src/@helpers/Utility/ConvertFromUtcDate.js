import format from "date-fns/format";

const ConvertFromUtcDate = (_date, _format) => format(new Date(`${new Date(_date)} UTC`), _format);

export default ConvertFromUtcDate;