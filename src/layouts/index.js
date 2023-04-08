/* eslint-disable react/prop-types */
function DefaultLayout ({ children, title }) {
    return (
        <div className="gap-0 min-w-full">
            <div className="bg-orange-300">{children}</div>
        </div>
    );
}

export default DefaultLayout;
