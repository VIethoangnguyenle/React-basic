import { faChartPie, faDatabase, faDesktop } from '@fortawesome/fontawesome-free-solid'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row } from 'antd'
import React from 'react'

export const About = () => {
    const items = [
        {
            key: '1',
            icon: <FontAwesomeIcon icon={faChartPie as IconProp} color='#1890ff' size='3x'></FontAwesomeIcon>,
            title: 'High Performance',
            content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        },
        {
            key: '2',
            icon: <FontAwesomeIcon icon={faDesktop as IconProp} color='#1890ff' size='3x'></FontAwesomeIcon>,
            title: 'Flat Design',
            content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        },
        {
            key: '3',
            icon: <FontAwesomeIcon icon={faDatabase as IconProp} color='#1890ff' size='3x'></FontAwesomeIcon>,
            title: 'Simplified Workflow',
            content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        },
    ]

    return (
        <div id="about" className='block h-[60vh]'>
            <div className='centerPage'>
                <div className='mt-12'>
                    <div className='flex flex-col justify-center items-center after:w-16 after:bg-[#1890ff] after:h-[0.2rem] after:content-[""] after:m-8'>
                        <h1 className='font-semibold text-3xl p-1'>About Us</h1>
                        <span className='p-1 mt-1 text-lg'>dolor sit amet, consectetur adipisicing elit</span>
                    </div>
                    <div className='px-5 text-lg text-center'>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit necessitatibus officiis repudiandae est deserunt delectus dolorem iure porro distinctio fuga, nostrum doloremque. Facilis porro in laborum dolor amet ratione hic? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aut a porro, adipisci quidem sint enim pariatur ducimus, saepe voluptatibus inventore commodi! Quis, explicabo molestias libero tenetur temporibus perspiciatis deserunt.</span>
                    </div>
                </div>
                <div className='mt-7'>
                    <Row gutter={[16, 16]}>
                        {items.map((item) => {
                            return (
                                <Col md={{ span: 8 }} key={item.key}>
                                    <div className="flex flex-col justify-center items-center text-center p-2">
                                        <div className="mb-2">
                                            {item.icon}
                                        </div>
                                        <h3 className='p-2 text-2xl font-bold'>{item.title}</h3>
                                        <p className='p-2 text-lg'>{item.content}</p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </div>

            </div>
        </div>
    )
}
