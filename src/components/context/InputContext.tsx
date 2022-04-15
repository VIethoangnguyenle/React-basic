import React, { createContext, useState } from 'react'

interface InputContexProps {
    children: React.ReactNode
}

interface InputData {
    name: string
    data: string
}

interface InputContextDefault {
    values: InputData[],
    addData: (data: InputData) => void
    removeData: (name: string) => void
}

const InputContextDefaultData = {
    values: [],
    addData: () => { },
    removeData: () => { }
}
export const InputContext = createContext<InputContextDefault>(InputContextDefaultData);

const InputContextProvider = ({
    children
}: InputContexProps) => {
    const [values, setData] = useState<InputData[]>(InputContextDefaultData.values);

    const addData = (item: InputData) => setData([...values, { name: item.name, data: item.data }]);
    const removeData = (name: string) => setData(values.filter(item => item.name !== name));
    const inputContextData = {values, addData, removeData};

    return (
        <InputContext.Provider value={inputContextData}>
            {children}
        </InputContext.Provider>
    );
};

export default InputContextProvider;