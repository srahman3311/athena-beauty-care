
export const getDates = () => {

    let datesArray = [];


    datesArray.push({
        date: new Date().getDate(),
        weekDay: "Today",
        month: new Date().toLocaleString("en-us", { month: "short" } )
    })

    for(let i = 1; i <= 7; i++) {

        const newDate = new Date(new Date().getTime() + (86400000 * i));

        const date = newDate.getDate();
        const weekDay = newDate.toLocaleString("en-us", {  weekday: "short" });
        const month = newDate.toLocaleString("en-us", { month: "short" })

        datesArray.push({date, weekDay, month});
    }

    return datesArray;


}