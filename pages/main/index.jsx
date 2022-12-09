import { GlobalStyle } from "../../styles/GlobalStyle"
import { Box } from "@mui/material"
import style from './style.module.css'
import NavBar from "../../components/Container_NavBar"
import ContainerMainImage from "../../components/Container_main_img"
import ArticleOrigins from "../../components/Article_origins"
import Article from '../../components/Article_model'
import MainTitleArticle from "../../components/Article_main_title"
import DivisionLine from "../../components/Division_line"
import Footer from "../../components/Footer"
import ScrollTopButton from "../../components/Scroll_top_button"

export default function Main() {
    return (
        <Box>
            <GlobalStyle />
            <Box className={style.container}>
                <ContainerMainImage className={style.topImage}/>
                <ArticleOrigins className={style.articleOrigins}/>
                <DivisionLine className={style.divisionLine}/>
                <MainTitleArticle />

                <Article
                    srcImg='/images/picnicImg.png'
                    altImg='Piquenique em família'
                    subtitle='Piquenique ao ar livre'
                    texto='O piquenique é uma experiência única para as crianças. Através dela os pequenos tem a possibilidade de estreitar laços com as demais crianças e com os adultos. Passar um tempo ao lado da família e curtindo atividades ao ar livre incentiva os pequenos a deixarem um pouco o contato com as telas dos smartphones, permitindo-os vivenciarem novos momentos'
                />

                <Article
                    srcImg='/images/cinemaImg.png'
                    altImg='Cinema em família'
                    subtitle='Cinema em casa'
                    texto='E quem não gosta de assistir aquele filme do momento, comendo uma pipoquinha com mais um monte de guloseimas!? Levar as crianças ao cinema é outra atividade incrível, que incentiva a criatividae e as coloca em contato com diferentes culturas e experiências. Mas claro, para os mais caseiros, tem como se divertir muito com os filhos assistindo os títulos que eles mais gostam nos streams mais queridinhos como a Netflix, Disney Plus, Amazon Prime Vídeo e muitos outros'
                />

                <Article
                    srcImg='/images/treasureHuntImg.png'
                    altImg='Caça ao tesouro'
                    subtitle='Caça ao Tesoruro'
                    texto='Uma brincadeira simples mas que pode render muitos bons momentos das crianças com os pais e amigos, além de estreitar as relações sociais e incentivar a criatividade dos pequenos na procura das recompensas. '
                />

                <Article
                    srcImg='/images/statueImg.png'
                    altImg='Brincadeira Estátua'
                    subtitle='Estátua!'
                    texto='A brincadeira estátua é uma ótima forma de entreter as crianças e adultos em festas infantis, durante um café ou mesmo quando você está recebendo alguns amiguinhos de seu filho em casa.O desafio é segurar a risada e ficar parado quando a música parar, uma tarefa nada fácil quando se está dançando em posições divertidas e diferentes.
                Se não tem como improvisar um aparelho de som para tocar a música, o jeito é improvisar e levar a brincadeira para parques, praças e onde mais a imaginação mandar!'
                />

                <Footer />
                <ScrollTopButton />

            </Box>
        </Box>
    )
}