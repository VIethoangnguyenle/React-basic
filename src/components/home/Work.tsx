import { faPlay } from '@fortawesome/fontawesome-free-solid';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Modal } from 'antd';
import React, { useState } from 'react'

export const Work = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const handleModal = () => {
        setVisible(true);
    }
    const handleCancel = () => {
        setVisible(false);
    }
    return (
        <div id='works' className='w-[100wh] h-auto py-10 bg-work bg-center bg-fixed bg-no-repeat'>
            <div className='pageCenter'>
                <div className=''>
                    <div className='flexColCenter'>
                        <div className='flexColCenter lineBreak'>
                            <h1 className='titleText'>How it works</h1>
                            <p className='p-1 mt-1 text-lg'>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
                        </div>

                        <div className='mt-10 mb-10'>
                            <Button size='large' shape='circle' className='flex justify-center items-center h-auto w-auto text-7xl border-2 border-white p-5 ' onClick={() => handleModal()}>
                                <FontAwesomeIcon icon={faPlay as IconProp}></FontAwesomeIcon>
                            </Button>
                        </div>
                        <Modal
                            title="Woocommerce Tutorial"
                            visible={visible}
                            onCancel={handleCancel}
                            footer={null}
                            destroyOnClose={true}
                        >
                            <iframe title='Woocommerce Tutorial' width="100%" height="350" src="https://www.youtube.com/embed/8f8_JYIzOno?list=PLiUrl-SQRR7LQINGQGE99pXWDuKq4SxfU"> </iframe>
                        </Modal>
                    </div>
                </div>

            </div>
        </div>
    )
}
