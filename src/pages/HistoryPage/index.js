import Lottie from 'react-lottie';

import DiaryTimeline from '../../components/diaryTimeLine';
import animationData from '../../lotties/quote.json';
const HistoryPage = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const adiary = [
        {
            title: '8/4/2023',
            content: 'Earn only 5.5, too low for all my attempt',
            header: 'IETLS self-learning',
            type: 'Studying'
        },
        {
            title: '7/4/2023',
            content: 'I were sick and can not complete the lab',
            header: 'Miss deadline for OS lab',
            type: 'Minathon project'
        },
        {
            title: '6/4/2023',
            content: 'Overnight with friend for design UI of UWC project',
            header: 'Design UX/UI',
            type: 'UWC project'
        },
        {
            title: '5/4/2023',
            content: 'Fine by police went hang out with friend',
            header: 'Farther birthday',
            type: 'Family'
        },
        {
            title: '4/4/2023',
            content: 'Overnight with friend for design UI of UWC project',
            header: 'Design UX/UI',
            type: 'UWC project'
        },
        {
            title: '3/4/2023',
            content: 'Overnight with friend for design UI of UWC project',
            header: 'Design UX/UI',
            type: 'UWC project'
        },
        {
            title: '2/4/2023',
            content: 'Get only 4.5 scores on IETLS online testing',
            header: 'IETLS self-study',
            type: 'Self-study'
        },
        {
            title: '1/4/2023',
            content: 'Overnight with friend for design UI of UWC project',
            header: 'Design UX/UI',
            type: 'UWC project'
        },
        {
            title: '28/3/2023',
            content: 'Get schoolarship for hard studying',
            header: 'Schoollarship',
            type: 'Studying'
        },
        {
            title: '26/3/2023',
            content: 'Get 9.5 marks on PPL midterm exams',
            header: 'School mark',
            type: 'Studying'
        }
    ];
    return (
        <div className='flex justify-center gap-0 px-48 items-center'>
            <DiaryTimeline w={1000} h = {800} diary={adiary} />
            <Lottie options={defaultOptions}
                height={500}
                width={500}
            />
        </div>
    );
};
export default HistoryPage;
