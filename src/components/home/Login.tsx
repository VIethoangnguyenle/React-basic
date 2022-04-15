import { Button, Checkbox, Form, Input } from 'antd'
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import React from 'react'

export const Login = () => {
    const onFinish = (values: string) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: ValidateErrorEntity<string>) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='h-[100vh] w-screen flex justify-center items-center'>
            <div className='m-auto h-auto w-[22%]'>
                <Form className='shadow-xl'>
                    <Form.Item className='bg-[#1f1d48] rounded-t-lg mb-10'>
                        <div className=' flex flex-col justify-center items-center p-7 rounded-sm'>
                            <img src="https://cms-web-staging.kienlongbank.co/assets/img/main-logo.svg" alt="" />
                        </div>
                    </Form.Item>
                    <Form.Item className='px-8' name='username'>
                        <div className=''>
                            <span className='absolute z-10 pl-3 text-lg text-gray-500 pt-2'>Tai khoan*</span>
                            <div className='border-b-[4px] border-[#1f1d48]'>
                                <Input className='pt-7 bg-gray-100' placeholder='User name' size='large' ></Input>
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item className='px-8' name='password'>
                        <div className=''>
                            <span className='absolute z-10 pl-3 text-lg text-gray-500 pt-2'>Tai khoan*</span>
                            <div className='border-b-[4px] border-[#1f1d48]'>
                                <Input.Password className='pt-7 bg-gray-100 rounded-t-lg' placeholder='Password' size='large' bordered={false} ></Input.Password>
                            </div>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <div className='px-8 flex flex-row justify-between'>
                            <Checkbox><span className='text-lg'>Nho mat khau</span></Checkbox>
                            <a href="#" className='text-lg'>Quen mat khau?</a>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <Button block type='primary' htmlType='submit' className='bg-blue-500'>Login</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>

    )
}
