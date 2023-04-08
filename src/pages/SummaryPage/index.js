import suggestHistory from '../../utils/suggestHistory';
function SummaryPage () {
    const tasks = suggestHistory();
    return (
        <div>
            <h1>This is chattingPage!</h1>
            <div>
                {tasks.done.length}
            </div>
            {/* {<div>suggestHistory() ? <div>1</div> : <div>0</div>} */}
        </div>
    );
}

export default SummaryPage;
