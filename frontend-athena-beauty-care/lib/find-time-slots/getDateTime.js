//
export const getDateTime = () => {

    const defaultTime = [
        "09:00", "09:15", "09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", 
        "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", 
        "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", 
        "18:00"
    ]

    const dateAndTimeArray = [];


    // populating dateTimeArray with 30 dates from today
    for(let i = 0; i < 30; i++) {
    
        const date = new Date(new Date().getTime() + (86400000 * i));

        const year = date.getFullYear().toString();
        let month = (date.getMonth() + 1).toString();
        let day = date.getDate().toString();

        if (month < 10) month = `0${month}`;
        if (day < 10) day = `0${day}`;


        const newDate = `${year}-${month}-${day}`;
        dateAndTimeArray.push({date: newDate, defaultTime});

    }

    return dateAndTimeArray;

}