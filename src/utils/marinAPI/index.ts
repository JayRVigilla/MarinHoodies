import { startOfDay, addDays } from "date-fns";

export interface iMaxMin {
  max: string;
  min: string;
}

export interface iBetweenProps extends iMaxMin {
  param: string;
}
const betweenISOStrings = ({ max, min, param }: iBetweenProps) => {
  return `${param} between '${min}' and '${max}'`;
};

const betweenNums = ({ max, min, param }: iBetweenProps) => {
  return `${param} > ${min} AND ${param} < ${max}`;
};

export const whereString = {
  betweenISOStrings,
  betweenNums,
};

export const dateRangeClean = (isoString: string, addDay = false) => {
  const date = new Date(isoString);
  const dateStart = startOfDay(addDay ? addDays(date, 1) : date).toISOString();
  const result = dateStart.substring(0, dateStart.length - 5);
  return result;
};
