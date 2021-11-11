//
export const getDates = () => {

    const dates = [];


    // populating dateTimeArray with 30 dates from today
    for(let i = 0; i < 30; i++) {
    
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