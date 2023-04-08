import EndDayBox from '../../components/endDayBox';
import LineChartBox from '../../components/lineChart';
function HomePage () {
    const data2 = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Progress',
                // yAxisID: 'consumption',
                data: [70, 90, 50, 60, 30, 40, 20],
                fill: true,
                borderColor: 'rgba(0, 82, 255, 1)',
                backgroundColor: 'rgba(0, 82, 255, 0.2)',
                tension: 0.2,
                yAxisID: 'y'
            }
        ]
    };
    return (
        <div className='px-48 flex flex-row w-full gap-12 h-[880px]'>
            <div className='basis-3/5 flex flex-col gap-6'>
                <div className='bg-orange-300 basis-6/12'>Chart</div>
                <div className='bg-green-300 basis-6/12'>Notion</div>
            </div>
            <div className='basis-2/5 flex flex-col gap-6'>
                <div className='bg-orange-300 basis-9/12'>Plan</div>
                <div className='bg-green-300 basis-3/12'>Discord</div>
            </div>
        </div>);
}

export default HomePage;
