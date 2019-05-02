// process_date_string takes a string in the format YYYY-MM-DD and returns an object
// with JavaScript-formatted Date, as well as the human-readable Month.

export interface DateObject {
    date: Date;
    month: string;
}

export function process_date_string(date_string): DateObject {
    let date_split: number[];
    let year: number;
    let month_numeral: number;
    let day_of_month: number;
    let date: Date;
    let month: string;
    let date_obj: DateObject;
    
    date_split = date_string
        .split('-')
        .map(string => parseInt(string));
    year = date_split[0];
    month_numeral = date_split[1];
    day_of_month = date_split[2];
    date = new Date(year, month_numeral-1, day_of_month);
    month = date.toDateString().split(' ')[1];

    date_obj = {
        "date": date,
        "month": month,
    }

    return date_obj;
}

