//

export const locationInfoOnChange = (event, setLocationInfo) => {

    const name = event.target.name;
    const value = event.target.value;

    setLocationInfo(currentVal => {
        return {
            ...currentVal,
            [name]: value
        };
    });

}