import ChartBox from '../../components/chart';
import EndDayBox from '../../components/endDayBox';
function HomePage () {
    const pieChartData = [63, 25, 12];
    const pieChartOptions = {
        labels: ['Your files', 'System', 'Empty'],
        colors: ['#4318FF', '#6AD2FF', '#EFF4FB'],
        chart: {
            width: '50px'
        },
        states: {
            hover: {
                filter: {
                    type: 'none'
                }
            }
        },
        legend: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        hover: { mode: null },
        plotOptions: {
            donut: {
                expandOnClick: false,
                donut: {
                    labels: {
                        show: false
                    }
                }
            }
        },
        fill: {
            colors: ['#4318FF', '#6AD2FF', '#EFF4FB']
        },
        tooltip: {
            enabled: true,
            theme: 'dark',
            style: {
                fontSize: '12px',
                fontFamily: undefined,
                backgroundColor: '#000000'
            }
        }
    };
    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };
    return (
        <div><EndDayBox/></div>);
    //     // <div className="justify-center">

    //         {/* <ChartBox options={pieChartOptions} series={pieChartData}/> */}
    //     // </div>
    // );
}

export default HomePage;
