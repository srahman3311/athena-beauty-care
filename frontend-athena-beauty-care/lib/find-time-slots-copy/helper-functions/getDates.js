export const getDates = () => {

    const dates = [];

    // Populating dateTimeArray with 30 dates from today
    for(let i = 0; i <= 30; i++) {

        // One day equals 86400000 milliseconds. For each iteration we need to add (86400000 * i) milliseconds with today. This way
        // we can calculate dates as many as we want.   
        const date = new Date(new Date().getTime() + (86400000 * i));

        const year = date.getFullYear().toString();
        let month = (date.getMonth() + 1).toString();
        let day = date.getDate().toString();

        if (month < 10) month = `0${month}`;
        if (day < 10) day = `0${day}`;


        const newDate = `${year}-${month}-${day}`;
        dates.push(newDate);

    }

    return dates;

}