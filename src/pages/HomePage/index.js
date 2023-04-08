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
        <div><LineChartBox title={'Progress'}
            data={data2}opNum={1}/></div>);
}

export default HomePage;
