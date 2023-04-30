import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasHeight: 700,
        windowWidth: 1024,
        canvasWidth: 1076,
        windowHeight: 768,
    },
});
