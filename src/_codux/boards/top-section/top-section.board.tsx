import { createBoard } from '@wixc3/react-board';
import { TopSection } from '../../../components/top-section/top-section';

export default createBoard({
    name: 'TopSection',
    Board: () => <TopSection />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
