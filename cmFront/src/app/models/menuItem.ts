export interface MenuItem {
    title: string;
    imagePath: string;
    path: string;
    submenues?: MenuItem[];
    submenu?: MenuItem[]

}