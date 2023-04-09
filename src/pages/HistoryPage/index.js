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
            content: 'One day sleepless for deployemnt',
            header: 'Packaging application',
            type: 'Bestie'
        },
        {
            title: '5/4/2023',
            content: 'I love my family',
            header: 'Farther birthday',
            type: 'Family'
        },
        {
            title: '4/4/2023',
            content: 'I just have 4 hours slept all of week',
            header: 'Web implementation',
            type: 'Bestie project'
        },
        {
            title: '3/4/2023',
            content: 'I feel so happy when my app come to this stage',
            header: 'Chrome extension for Bestie',
            type: 'Bestie'
        },
        {
            title: '2/4/2023',
            content: 'Get only 6.5 scores on IETLS online testing',
            header: 'Bestie Project',
            type: 'Self-study'
        },
        {
            title: '1/4/2023',
            content: 'Overnight with friend for design UI of UWC project',
            header: 'UX/UI',
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
        <div className='flex justify-center gap-0 px-[440px] items-center mt-20'>
            <DiaryTimeline w={1000} h = {800} diary={adiary} />
            <Lottie options={defaultOptions}
                height={500}
                width={300}
            />
        </div>
    );
};
export default HistoryPage;
