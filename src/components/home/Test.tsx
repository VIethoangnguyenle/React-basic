import { Button, Input } from 'antd';
import{ ChangeEvent, useContext, useState } from 'react'
import { InputContext } from '../context/InputContext';
import { TypeInputAction } from '../reducer/Types';

export const Test = () => {
    const { ADD_TEXT, REMOVE_TEXT } = TypeInputAction;

    interface dataInput {
        name: string,
        data: string
    }
    const { values, addData, removeData } = useContext(InputContext);

    const [data, setData] = useState<dataInput>();

    const handleSetName = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ name: e.target.value, data: data?.data as string })
    }

    const handleSetValue = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ name: data?.name as string, data: e.target.value })
    }

    return (
        <div className='flex flex-col justify-center items-center mt-8'>
            <Input
                className='max-w-[20rem]'
                color='primary'
                onChange={handleSetName}
                placeholder='Name'
            ></Input>
            <Input
                className='max-w-[20rem]'
                color='primary'
                onChange={handleSetValue}
                placeholder='Value'
            >
            </Input>
            <div className='flex flex-row items-center justify-center'>
                <Button className='mx-3 my-5 bg-blue-300 ' color='primary' size='large' onClick={() =>
                    addData({
                        data: data?.data as string,
                        name: data?.name as string
                    })}>ADD</Button>
                <Button className='mx-3 my-5 bg-red-400' color='primary' size='large' onClick={() =>
                    removeData(
                        data?.name as string
                    )}>REMOVE</Button>
            </div>
            <div className='flex flex-row p-3'>
                {values.map((item) => {
                    return (
                        <>
                            <span className='p-3 mx-3 rounded-lg bg-slate-400'>Name: {item.name} <br></br> Data: {item.data}</span>
                        </>
                    );
                })}
            </div>
        </div>
    )
}
