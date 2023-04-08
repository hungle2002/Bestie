import NotionTodo from '../../components/notionTodo';
import suggestHistory from '../../utils/suggestHistory';
function SummaryPage () {
    const tasks = suggestHistory();
    return (
        <div className='w-[700px] h-[700px]'>
            <NotionTodo />
        </div>
    );
}

export default SummaryPage;
