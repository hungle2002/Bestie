import Header from './Header';

function DefaultLayout ({ children, title }) {
    return (
        <div className="gap-0 min-w-full h-full">
            <div className='h-20 mb-2'><Header /></div>
            <div className='px-48 flex flex-row w-full gap-12 h-[880px]'>
                <div className='basis-3/5 flex flex-col gap-6'>
                    <div className='bg-orange-300 basis-6/12'>Chart</div>
                    <div className='bg-green-300 basis-6/12'>Notion</div>
                </div>
                <div className='basis-2/5 flex flex-col gap-6'>
                    <div className='bg-orange-300 basis-9/12'>Plan</div>
                    <div className='bg-green-300 basis-3/12'>Discord</div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
