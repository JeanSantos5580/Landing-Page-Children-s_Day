import { Box } from "@mui/system";
import style from './style.module.css'

export default function ScrollTopButton() {
    return (
        <Box className={style.container}>
            <img src="/images/iconButtonScrollTop.png" alt="" />
        </Box>
        )
}