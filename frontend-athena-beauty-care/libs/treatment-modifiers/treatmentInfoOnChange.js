//

export const treatmentInfoOnChange = (event, setTreamentInfo, treatmentInfoOnChange) => {

    const name = event.target.name;
    const value = event.target.value;

    setTreamentInfo(currentVal => {
        return {
            ...currentVal,
            [name]: value
        };
    });

}