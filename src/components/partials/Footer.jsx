import {FooterContainer} from '../../styles/_Footer'
import logo from '../../assets/logo.svg'

export default function Footer(){
    return(
        <FooterContainer>
            <img src={logo} alt="logo" />
            <span>Todos os direitos reservados  -  2020</span>
        </FooterContainer>
    )
}