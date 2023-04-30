import { createBoard } from '@wixc3/react-board';
import { Logo } from '../../../components/logo/logo';
import logo from "../../../assets/logo.png"

export default createBoard({
    name: 'Logo',
    Board: () => <Logo src={logo} alt="logo"/>
});
