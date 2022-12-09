import { Box } from "@mui/system";
import style from './style.module.css'

export default function Footer() {
    return (
        <Box className={style.container}>
            
            <Box className={style.containerCopyright}>
                <img src="/images/logo.png" alt="" />
                <span className={style.slogan}>
                    Lorem ipsum dolor sit amet, cons aring elit sed dllao the eimod tempor inciunt ullaco laboris aliquip alora.
                </span>
                <span className={style.copyright}>
                    Copyright © 2021 ORG. All rights reserved.
                </span>
            </Box>


            <Box className={style.containerInformations}>
                
                <span>
                    Contact Information
                    Lorem Ipsum  dummy, 90
                    (+000) 0000-0000
                    loremipsum@ipsum.com
                </span>

                <Box className={style.socialMediaIcons}>
                    <img
                        className={style.facebookIcon}
                        src="/socialMediaIcons/facebookIcon.png" alt="Icone Facebook" />
                    <img
                        className={style.twitterIcon}
                        src="/socialMediaIcons/twitterIcon.png" alt="Icone Twitter" />
                </Box>
            
            </Box>

            <Box className={style.containerImg}>
                <img src="/images/babyCart.png" alt="" />
            </Box>

        </Box>
    )
} 