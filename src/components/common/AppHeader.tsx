import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faBars } from '@fortawesome/fontawesome-free-solid'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Anchor, Button, Drawer, Menu } from 'antd'
import AnchorLink from 'antd/lib/anchor/AnchorLink'
import { MenuItem } from 'rc-menu'
import { faBolt } from '@fortawesome/fontawesome-free-solid'

const { Link } = Anchor;

export const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div className='w-screen bg-[#f8f8f8]'>
        <div className='py-5 centerPage'>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex justify-between items-center'>
              <FontAwesomeIcon icon={faBolt as IconProp} color='#1890ff' size='3x'></FontAwesomeIcon>
              <a href="https://www.google.com/" className='ml-2 text-2xl'>TECH</a>
            </div>
            <Anchor targetOffset={65}>
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </div>
        </div>
      </div>
    </>
  )
}
