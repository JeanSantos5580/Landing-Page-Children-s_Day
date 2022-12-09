import { Box } from "@mui/system";
import style from './style.module.css'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

export default function ButtonSeeMore () {
    return (
        <Box className={style.containerButton}>
            <span>Ver mais</span>
            <KeyboardArrowDownRoundedIcon style={{fontSize: '50px'}}/>
        </Box>
    )
}