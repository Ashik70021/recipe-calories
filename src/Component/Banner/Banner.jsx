import image from '../../assets/images/Rectangle 1.jpg'

const Banner = () => {
    return (
        <div className='mt-12 mx-auto relative text-center text-white'>
            <div>
            <img src={image} alt="" />
            </div>
            <div className='p-4 space-y-6 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h1 className='text-5xl font-bold'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='text-xl font-normal'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className='w-ful'>
                    <button className='m-2 py-3 px-6 text-[#150B2B] text-xl font-semibold rounded-[50px] bg-[#0BE58A]'>Explore Now</button>
                    <button className='border m-2 py-2 px-4 text-xl font-semibold rounded-[50px]'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;