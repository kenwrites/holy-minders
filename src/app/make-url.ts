// tslint:disable: variable-name

export function make_url(
    {
        today = false,
        tomorrow = false,
        month = 0,
        date = 0,
        year = 2019
    }
): string {

    const base_url = 'http://calapi.inadiutorium.cz/api/v0/en/calendars/general-en';
    if (today) {
        return `${base_url}/today`;
    } else if (tomorrow) {
        return `${base_url}/tomorrow`;
    } else if (date) {
        return `${base_url}/${year}/${month}/${date}`;
    } else if (month) {
        return `${base_url}/${year}/${month}`;
    } else {
        console.error('Problem with make_url arguments.  Unable to create URL');
    }
    return;
}
