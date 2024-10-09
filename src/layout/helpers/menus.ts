export const menus = [
    {
        name: 'menu1',
        subMenus: [
            {
                name: 'menu1-1',
                path: '/'
            },
            {
                name: 'menu1-2',
                path: '/about'
            }
        ]
    },
    {
        name: 'menu2',
        subMenus: [
            {
                name: 'menu2-1',
                path: '/'
            },
            {
                name: 'menu2-2',
                path: '/about'
            }
        ]
    }
]

export interface IMenu {
    name: string;
    subMenus: IMenu[];
    path?: string;
}