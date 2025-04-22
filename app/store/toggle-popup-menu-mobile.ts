export const useTogglePopupStore = defineStore('popup-menu', () => {
    const toggleMenu = ref(false)
    const openMenu = () => toggleMenu.value = true
    const closeMenu = () => toggleMenu.value = false

    return {toggleMenu, openMenu, closeMenu}
})