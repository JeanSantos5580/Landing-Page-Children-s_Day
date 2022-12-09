import { Box } from "@mui/system";
import style from './style.module.css'

export default function MainTitleArticle () {
    return (
        <Box className={style.container}>
            <Box className={style.mainTitle}>
                <span>
                    Dicas para aproveitar o Dia das Crianças com muita diversão<b style={{ color: '#FF8B01' }}>!</b>
                </span>
            </Box>
        </Box>
    )
}