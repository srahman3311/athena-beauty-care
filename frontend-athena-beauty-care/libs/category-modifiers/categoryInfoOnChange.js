//

export const categoryInfoOnChange = (event, setCategoryInfo) => {

    const name = event.target.name;
    const value = event.target.value;

    setCategoryInfo(currentVal => {
        return {
            ...currentVal,
            [name]: value
        };
    });

}