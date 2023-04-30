import { createBoard } from '@wixc3/react-board';
import { My_Carousel } from '../../../components/my-carousel/my-carousel';

export default createBoard({
    name: 'My_Carousel',
    Board: () => <My_Carousel />,
    environmentProps: {
        windowWidth: 1176,
    },
});
