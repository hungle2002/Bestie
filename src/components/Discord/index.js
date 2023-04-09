/* eslint-disable max-len */

const DiscordBox = () => {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-2xl'>Your Contact</h1>
            <div className='bg-white shadow sm:rounded-md flex flex-col gap-2 p-3'>
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center'>
                        <img className='w-fit h-10 pt-1' src ={require('../../assets/discord.png')}/>
                        <div className="flex rounded-full bg-blue-400 w-6 h-6 text-white items-center justify-center"> 2 </div>
                    </div>
                    <p className='pl-1 text-zinc-500'> You currently have 2 message! </p>
                </div>
                <div className='border w-96'></div>
                <div className='flex flex-col'>
                    <div className='flex flex-row gap-2 text-gray-500 font-bold items-center pl-1'>
                        <img className='w-fit h-5' src ={require('../../assets/gmail.png')}/>
                        <h2 className='text-xl'>Gmail</h2>
                    </div>
                    <p className='pl-1 text-zinc-500'> You currently dont have any mail! </p>
                </div>
            </div>
        </div>
    );
};
export default DiscordBox;
