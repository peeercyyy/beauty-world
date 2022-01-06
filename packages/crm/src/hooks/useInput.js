import { useState } from "react";

export function useInput(initialState = '') {
    const [value, setValue] = useState(initialState);

    function onChange(event) {
        setValue(event.target.value);
    }

    return { value, setValue, onChange };
}