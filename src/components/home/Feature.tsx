import { Card, Col, Row } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React from 'react'

export const Feature = () => {
    const items = [
        {
            key: '1',
            src: '../../assets/modern-design.jpg',
            title: 'Modal design',
        },
        {
            key: '2',
            src: '../../assets/clean-design.jpg',
            title: 'Clean and Elegant',
        },
        {
            key: '3',
            src: '../../assets/great-support.jpg',
            title: 'Great Support',
        },
        {
            key: '4',
            src: '../../assets/easy-customise.jpg',
            title: 'Easy to customize',
        },
        {
            key: '5',
            src: '../../assets/unlimited-features.jpg',
            title: 'Unlimited Features',
        },
        {
            key: '6',
            src: '../../assets/advanced-option.jpg',
            title: 'Advanced Options',
        },
    ]

    return (
        <div id='feature' className='block h-[90vh]'>
            <div className='centerPage'>
                <div className='mt-12'>
                    <div className='flex flex-col justify-center items-center after:w-16 after:bg-[#1890ff] after:h-[0.2rem] after:content-[""] after:m-8'>
                        <h1 className='font-semibold text-3xl p-1'>Key Features and Benefits</h1>
                        <span className='p-1 mt-1 text-lg'>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</span>
                    </div>
                </div>
                <div className='py-5'>
                    <Row gutter={[16, 16]}>
                        {items.map((item) => {
                            return (
                                <>
                                    <Col id={item.key} span='8'>
                                        <Card
                                            hoverable
                                            cover={<img src={require('../../assets/modern-design.jpg')}></img>}
                                        >
                                            <Meta title={item.title}></Meta>
                                        </Card>
                                    </Col>
                                </>
                            );
                        })}
                    </Row>
                </div>

            </div>

        </div>
    )
}
