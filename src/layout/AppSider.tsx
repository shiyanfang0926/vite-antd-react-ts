import { useState } from 'react'
import { menus, IMenu } from './helpers/menus'

const AppSider = () => {
    const [isShowSubMenus, setIsShowSubMenus] = useState(false)
    const [subMenus, setSubMenus] = useState([])

    const handleMenu = (menu:any) => {
        return (event: any) => {
            setSubMenus(menu.subMenus)
            setIsShowSubMenus(!isShowSubMenus)
        }
    }

    const handleClickSubMenu = () => {
        setIsShowSubMenus(false)
    }
    const menuList = menus.map(menu =>
         <div className='h-[40px] leading-[40px] px-[10px]  hover:bg-pink-300' key={menu.name} onClick={handleMenu(menu)}>
            {menu.name}
        </div>
    )

    const subMenuList = subMenus.map(subMenu =>
        <div className='h-[40px] leading-[40px] px-[10px]  hover:bg-pink-300' key={subMenu?.name}>
            {subMenu?.name}
        </div>
    )

    return (
        <>
            <div className='w-[200px] h-full bg-pink-200'>
                {menuList}
            </div>
            {
                isShowSubMenus && subMenus.length ? 
                <div className='w-[200px] h-full bg-pink-400 fixed top-[40px] left-[200px] z-10' onClick={handleClickSubMenu}>
                    {subMenuList}
                </div> : null
            } 
        </>
    )
}



export default AppSider
