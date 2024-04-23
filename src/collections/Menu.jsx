import { Home } from "lucide-react";
import { Accessibility } from "lucide-react";
import { Cake } from "lucide-react";
import { Citrus } from "lucide-react";
import { Glasses } from "lucide-react";
import { CookingPot } from "lucide-react";


const Menu = [
    {label: 'Главная', url: '/', icon: Home},
    {label: 'Проекты', url: '/projects', icon: Accessibility},
    {label: 'Софт', url: '/soft', icon: Citrus},
    {label: 'Плагины', url: '/plugins', icon: CookingPot},
    {label: 'Макеты', url: '/design', icon: Cake},
    {label: 'Статьи', url: '/articles', icon: Glasses}
];

export default Menu;
