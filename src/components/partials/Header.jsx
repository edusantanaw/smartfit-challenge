import { HeaderContainer } from "../../styles/HeaderStyle"
import logo from '../../assets/logo.svg'

export default function  Header(){
    return(
        <HeaderContainer>
            <img src={logo} alt="logo smartifit" />
        </HeaderContainer>
    )
}