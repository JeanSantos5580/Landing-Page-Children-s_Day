import { Box } from "@mui/material"
import style from './style.module.css'

export default function ArticleOrigins() {
    return (
        <Box className={style.container}>
            <Box className={style.containerComponents}>

                <Box className={style.containerImg}>
                    <img src="/images/imageAbout.png" alt="" />
                </Box>

                <Box className={style.containerArticleComponent}>
                    <Box className={style.about}>
                        <span className={style.subject}>Sobre</span>
                        <img src="/images/arrow.png" alt="" />
                    </Box>

                    <Box className={style.articleText}>
                        <span className={style.title}>Origem do dia das crianças no Brasil</span>
                        <span className={style.articleDescription}>Em 1924, o deputado federal Galdino do Vale Filho, propôs um dia que homenageassem as crianças, então, em 5 de novembro de 1924, oficializada pelo presidente Arthur Bernardes, os deputados aprovaram o dia 12 de outubro.  Mas em 1940, Getúlio Vargas instituiu um novo decreto, que "fixava as bases da organização da proteção à maternidade, à infância e à adolescência em todo o País", sendo assim criando uma nova data de comemoração em todos país, sendo no dia 25 de março. O fato é que, por alguma razão, a data de 25 de março ficou apenas "no papel".
                        </span>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}