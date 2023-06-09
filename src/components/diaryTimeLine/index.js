/* eslint-disable max-len */
// // @ts-ignore

// import { useState } from 'react';
// const myCustomCard = (props) => {
//     const [visible, setVisible] = useState(false);
//     const { children } = props;
//     const onClickHandle = (event) => {
//         event.preventDefault();
//         setVisible(value => !value);
//     };
//     const onNormalClickHandle = (event) => {
//         event.stopPropagation();
//     };
//     return <div>
//         {visible &&
//         <div
//             className='fixed top-0 left-0 w-screen
//             h-screen bg-black/20 flex justify-center items-center z-[999]'
//             onClick={onClickHandle}
//         >
//             <div
//                 className='w-[700px] h-[800px] bg-white z-[1000]'
//                 onClick={onNormalClickHandle}
//             >
//                 Hello
//             </div>
//         </div>
//         }
//         <div
//             className='w-[400px] h-fit bg-white rounded-[20px]
//             flex justify-center items-center py-[40px]'
//             onClick={onClickHandle}
//         >
//             {children}
//         </div>
//     </div>;
// };
// const customTheme = createTheme(themes.default, {
//     card: {
//         backgroundColor: '#efefef'
//     },
//     date: {
//         backgroundColor: 'rebeccapurple'
//     },
//     marker: {
//         borderColor: 'rebeccapurple'
//     },
//     timelineTrack: {
//         backgroundColor: 'rebeccapurple'
//     }
// });
// const DiaryTimeline = (props) => {
//     const {
//         diaries = [
//             {
//                 title: 'titlee',
//                 time: '20/12/2023',
//                 content: 'aodfjasdklfjaodfjasdklfjaodfjasdklfjodfjasdklfj'
//             }
//         ]
//     } = props;
//     return (
//         <div>
//             <div>hel</div>
//             <Timeline
//                 theme={customTheme}
//             >
//                 {diaries.map((item, index) => {
//                     return (
//                         <Events key={index}>
//                             <TextEvent date='20-12-2023' text={item.title} card={myCustomCard}/>
//                         </Events>
//                     );
//                 })}
//             </Timeline>
//         </div>
//     );
// };
// export default DiaryTimeline;

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chrono } from 'react-chrono';

const DiaryTimeLine = ({ w, h, diary }) => {
    const dates =
        diary.map((d) => {
            return {
                title: d.title
            };
        });
    const items = diary.map((d) => {
        return {
            content: d.content,
            header: d.header,
            current: !!d.current,
            type: d.type
        };
    });

    return (
        <div
            style={{
                width: w.toString() + 'px',
                height: h.toString() + 'px'
            }}
            // className={`w-[${w}px] h-[${h}px]`}
        >
            <Chrono
                items={dates}
                mediaSettings={{ align: 'left' }}
                mode="VERTICAL"
                slideItemDuration={4000}
                scrollable={{ scrollbar: true }}
                // enableDarkToggle
                cardHeight={0}
                cardWidth={500}
                borderLessCards={true}
                allowDynamicUpdate={true}
                showAllCardsHorizontal={true}
                theme={{
                    primary: 'black',
                    secondary: 'white',
                    cardBgColor: 'white',
                    titleColor: 'black',
                    titleColorActive: 'BLACK'
                }}
                hideControls
                useReadMore
            >
                {
                    items.map((item, index) => {
                        return <div key={index} className=' flex flex-row w-full justify-between items-start'>
                            <div className='flex-1  min-w-52'>
                                <h1 className='text-lg font-semibold'>{item.header}</h1>
                                <p>{item.content}</p>
                            </div>
                            <div className='flex flex-row items-center justify-end gap-[20px]'>
                                <div className='flex flex-row justify-end items-center'>
                                    {item.current && <FontAwesomeIcon icon={faArrowLeft} className='p-0 text-lg'/>}
                                </div>
                                <div className='rounded-[20px] w-fit h-fit border flex justify-center items-center p-2 bg-green-100 font-semibold'>{item.type}</div>
                            </div>
                        </div>;
                    })
                }
                {
                    <div className='chrono-icons'>
                        {
                            items.map((item, index) => {
                                return (
                                    <div key={index} className='w-[10px] h-[10px] rounded-[50px]' style={{ backgroundColor: 'black' }}></div>
                                );
                            })}
                    </div>
                }
            </Chrono>
        </div>
    );
    // const items = [
    //     {
    //         title: 'Timeline title 1',
    //         cardTitle: 'Card Title 1',
    //         items: [
    //             { cardTitle: 'nested card title 1' },
    //             { cardTitle: 'nested card title 2' }
    //         ]
    //     },
    //     { title: 'Timeline title 2', cardTitle: 'Card Title 2' }
    // ];
    // return <div>
    //     <Chrono
    //         mode="VERTICAL"
    //         items={items}
    //         theme={{
    //             primary: 'red',
    //             secondary: 'blue',
    //             cardBgColor: 'yellow',
    //             titleColor: 'black',
    //             titleColorActive: 'red'
    //         }}
    //         buttonTexts={{
    //             first: 'Jump to First',
    //             last: 'Jump to Last',
    //             next: 'Next',
    //             previous: 'Previous'
    //         }}
    //     >
    //     </Chrono>;
    // </div>;
};
export default DiaryTimeLine;
