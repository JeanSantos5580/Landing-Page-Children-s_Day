import Image from "next/image";
import { Box, color, style } from "@mui/system"
import styles from './styles.module.css'

export default function Logo () {
    return (
        <>
        <Box className={styles.logoProps}>
            <Box className={styles.logo}>
                <img src="/images/logo.png" alt="" />
            </Box>
        </Box>
        </>
    )
}