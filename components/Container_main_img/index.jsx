import { Box } from "@mui/system";
import style from './styles.module.css'
import ButtonSeeMore from "../Button_see_more"

export default function ContainerMainImage() {
    return (
        <Box className={style.container}>
            <Box className={style.containerComponents}>

                    <span className={style.title1}>
                        CHILDREN'S DAY
                    </span>
 
                    <span className={style.title2}>
                        ESPECIAL DIA DAS CRIANÇAS: O
                        MOMENTO PERFEITO PARA RELEMBRAR A
                        INFÂNCIA.
                    </span>
                
                <ButtonSeeMore/>
            </Box>

            <img className={style.waveImg} src="/images/wave.png" alt="wave Image" />
        </Box>
    )
}