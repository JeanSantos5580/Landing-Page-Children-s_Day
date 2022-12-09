import { Box } from "@mui/material"
import { useState } from "react"
import style from './styles.module.css'

export default function NavBar() {

    const [burguerBar, setBurguerBar] = useState('burguerBar unclicked')

    const [sideBar, setSideBar] = useState('sideBar hidden')

    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burguer menu change

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurguerBar('burguerBar clicked')
            setSideBar('sideBar visible')
        }

        else {
            setBurguerBar('burguerBar unclicked')
            setSideBar('sideBar hidden')
        }

        setIsMenuClicked(!isMenuClicked)

    }

    return (
        <Box className={style.container}>
            <Box className={style.burguerBar} onClick={updateMenu}>
                <span 
                className={burguerBar}>
                </span>
                <span 
                className={burguerBar}>
                </span>
                <span 
                className={burguerBar}>
                </span>
            </Box>

            <Box className={style.containerSideBar}>
                <Box className={sideBar}>
                    <span>Inicio</span>
                    <span>Historia</span>
                    <span>Dicas</span>
                    <span>Contato</span>
                </Box>
            </Box>
        </Box>
    )
}
