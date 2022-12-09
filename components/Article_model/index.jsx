import { Box } from "@mui/system";
import style from './style.module.css'

export default function Article({ srcImg, altImg, subtitle, texto }) {
    return (

        <Box className={style.container}>
            
            <Box className={style.containerArticle}>

                <Box className={style.containerImg}>

                    <img className={style.articleImg} src={srcImg} alt={altImg} />

                    <Box className={style.subtitleImg}>
                        <span>{subtitle}</span>
                    </Box>
                </Box>

                <Box className={style.containerTextIcons}>
                    <Box className={style.article}>
                        <span>{texto}</span>
                    </Box>

                    <Box className={style.socialMediaIcons}>
                        <img
                            className={style.facebookIcon}
                            src="/socialMediaIcons/facebookIcon.png" alt="Icone Facebook" />
                        <img
                            className={style.twitterIcon}
                            src="/socialMediaIcons/twitterIcon.png" alt="Icone Twitter" />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}