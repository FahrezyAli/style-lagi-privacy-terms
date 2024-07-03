import { createBoard } from '@wixc3/react-board';
import { PageNoNavigation } from '../../board-wrappers/page-no-navigation';
import { Privacy } from '../../../components/privacy/privacy';

export default createBoard({
    name: 'Page-Privacy',
    Board: () => (
        <PageNoNavigation>
            <Privacy />
        </PageNoNavigation>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    },
});
