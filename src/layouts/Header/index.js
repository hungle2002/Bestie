import Images from '../../assets/images';

function Header () {
    return (<div className='flex flex-col h-full w-full '>
        <div className="h-full px-48 flex flex-row justify-between items-center">
            <div className="font-bold text-4xl" >
                <img className='mt-4 w-36 h-36 mx-4' src={Images.logo}/>
            </div>
            <div className="space-x-20 flex flex-row font-semibold text-lg">
                <div>Dashboard</div>
                <div className="text-zinc-400">Show diary</div>
                <div className="text-zinc-400">Planning</div>
                <div className="text-zinc-400">About us</div>
            </div>
            <div className='flex flex-row items-center'>
                <img className='w-16 h-16 rounded-full mx-4' src={Images.user}/>
                <div className='flex flex-col'>
                    <div className='text-xl font-semibold'>Hung Le</div>
                    <div>Admin</div>
                </div>
            </div>
        </div>
        <div className='border mx-64'></div>
    </div>);
}

export default Header;
