import Header from './Header';

function DefaultLayout ({ children }) {
    return (
        <div className="gap-0 min-w-full h-full">
            <div className='h-20 mb-2'><Header /></div>
            {children}
        </div>
    );
}

export default DefaultLayout;
