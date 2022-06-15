interface FieldProp {
    [key: string]: string
}

export const generateFields = (response: FieldProp) => {
    const keys = Object.keys(response);
    const values = Object.values(response);

    keys.forEach((element, index) => {
        if ((element && values[index]) && (element.includes('id') || values[index].includes("null"))) {
            keys.splice(index, 1);
            values.splice(index, 1);
        }
    });

    return { keys, values };
};