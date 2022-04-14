import { faDesktop } from '@fortawesome/fontawesome-free-solid';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Carousel } from 'antd';
import React from 'react'

export const Hero = () => {
    const items = [
        {
          key: '1',
          title: 'Web and mobile payment built for developers',
          content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        },
        {
          key: '2',
          title: 'Work better together. Schedule meetings',
          content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        },
        {
          key: '3',
          title: 'The best app to increase your productivity',
          content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        },
      ]
  return (
    <div id='hero' className='w-screen bg-hero bg-cover bg-center h-[54rem]'>
        <Carousel className='h-[100%]'>
        {items.map(item => {
          return (
            <div key={item.key} className="flex flex-col justify-center items-center">
              <div className=" max-w-2xl m-auto">
                <h3 className='text-3xl font-semibold my-7'>{item.title}</h3>
                <p className='my-7'>{item.content}</p>
                <div className="flex flex-row my-5">
                  <Button type="primary" size="large" className='bg-[#1890ff] mr-2'>Learn More</Button>
                  <Button size="large" className='mx-2'><FontAwesomeIcon icon={faDesktop as IconProp} className= 'mx-2'></FontAwesomeIcon> Watch a Demo</Button>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  )
}
