import { useState } from "react";

export const useCounter = () => {
const [number, setNumber] = useState(0)


const plusNumber = () => {
    return setNumber(number + 1);
};

const SubNumber = () => {
    return setNumber(number - 1);
}

const resetNumber = () => {
    return setNumber(0);
}

return [plusNumber, SubNumber, resetNumber, number]
}