import { createBoard } from '@wixc3/react-board';
import { TopSection } from '../../../components/top-section/top-section';

export default createBoard({
    name: 'TopSection',
    Board: () => <TopSection />
});
