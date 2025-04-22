export interface MenuItem{
    label: string;
    link: string;
    elementId: string;
}

export const useMenuItemStore = defineStore("menu-items", ()=> {
    const menuItems = loadItems();
    const items = ref<MenuItem[]>(menuItems);

    return { items }
})


function loadItems(): MenuItem[]{
    const home: MenuItem = {
            label: 'Home',
            link: '/',
            elementId: '',
    }
    const articles: MenuItem = {
            label: 'Articles',
            link: '#articles',
            elementId: 'articles',
    }
    const labs: MenuItem = {
        label: 'Labs',
        link: '#labs',
        elementId: 'labs',
    }

    return [ home, articles, labs ]
}

