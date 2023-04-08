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

import { Chrono } from 'react-chrono';

const diaryTimeLine = () => {
    const dates = [
        {
            title: '1-1-2023'
        },
        {
            title: '1-1-2023'
        },
        {
            title: '1-1-2023'
        },
        {
            title: '1-1-2023'
        },
        {
            title: '1-1-2023'
        },
        {
            title: '1-1-2023'
        },
        {
            title: '1-1-2023'
        },
        {
            title: '1-1-2023'
        },
        {
            title: '1-1-2023'
        },
        {
            title: '1-1-2023'
        },
        {
            title: '1-1-2023'
        },
        {
            title: '1-1-2023'
        }
    ];
    const items = [
        {
            content: ' ccontent here cfjshjhsdkjfhs jskafdhkjashfkasjdfhontent herecontent herecontent  herecontent here',
            header: 'header'
        },
        {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
            header: 'header'
        },
        {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
            header: 'header'
        },
        {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
            header: 'header'
        },
        {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
            header: 'header'
        },
        {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
            header: 'header'
        },
        {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
            header: 'header'
        },
        {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
            header: 'header'
        },
        {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
            header: 'header'
        },
        {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
            header: 'header'
        },
        {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
            header: 'header'
        },
        {
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum cfjshjhsdkjfhs jskafdhkjashfkasjdfhontent hereLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumcontent  herecontent heLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum cfjshjhsdkjfhs jskafdhkjashfkasjdfhontent hereLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumcontent  herecontent heLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum cfjshjhsdkjfhs jskafdhkjashfkasjdfhontent hereLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumcontent  herecontent heLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum cfjshjhsdkjfhs jskafdhkjashfkasjdfhontent hereLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumcontent  herecontent heLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum cfjshjhsdkjfhs jskafdhkjashfkasjdfhontent hereLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumcontent  herecontent heLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum cfjshjhsdkjfhs jskafdhkjashfkasjdfhontent herecontent herecontent  herecontent here',
            header: 'header'
        }
    ];
    return (
        <div className='w-screen h-screen'>
            <Chrono
                items={dates}
                mode="VERTICAL"
                slideItemDuration={4000}
                scrollable={{ scrollbar: false }}
                // enableDarkToggle
                cardHeight={0}
                // cardWidth={150}
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
                        return <div key={index} className=''>
                            <div>{item.content}</div>
                        </div>;
                    })
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
export default diaryTimeLine;
