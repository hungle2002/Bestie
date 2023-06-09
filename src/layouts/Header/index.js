import { Link } from 'react-router-dom';

import Images from '../../assets/images';
import { direction } from '../../routes'; ;
function Header () {
    return (
        <div className='flex flex-col h-full w-full '>
            <div className="h-full px-48 flex flex-row justify-between items-center">
                <div className="font-bold text-4xl h-full flex flex-col justify-center items-center " >
                    <img className=' w-36 h-fit mx-4' src={Images.logoMini}/>
                </div>
                <div className="space-x-20 flex flex-row font-semibold text-lg">
                    {direction.map((direct, index) => {
                        console.log(direction);
                        return (<div key = {index} >
                            <Link to={direct.path}>{direct.title}</Link>
                        </div>);
                    })}
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
        </div>
    );
}

export default Header;
