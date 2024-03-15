
const WantToCooks = ({recipies}) => {
    // const{recipe_name, preparing_time, calories} = recipies;
    return (
        <div className="w-1/3 mt-6 ml-12 border-2 rounded-2xl text-center h-fit">
            
            {/* ************************** want to cook start ********************** */}

            <div className=" p-4 text-center">
                <h1 className="text-2xl font-semibold text-[#282828]">Want to Cook:{recipies.length}</h1>
                <hr className="mt-2" />
            </div>

            <div className="flex justify-around"> 
                <div className="text-lg font-medium text-[#878787] ">
                    <h3>Name</h3>
                </div>
                <div className="text-lg font-medium text-[#878787] ">
                    <h3>Time</h3>
                </div>
                <div className="text-lg font-medium text-[#878787] ">
                    <h3>Calories</h3>
                </div>
            </div>

            <div className="mt-4 p-4 flex gap-6 bg-[#28282808]"> 
                <div className="text-lg font-medium text-[#878787]">
                        {
                          recipies.map((recipie,idx) =>(
                            <h1 key={idx}>{recipie.recipe_name}</h1>
                          ))  
                        }
                </div>
                <div className="text-lg font-medium text-[#878787] ">
                        {
                          recipies.map((recipie,idx) =>(
                            <h1 key={idx}>{recipie.preparing_time}</h1>
                          ))  
                        }
                </div>
                <div className="text-lg font-medium text-[#878787] ">
                        {
                          recipies.map((recipie,idx) =>(
                            <h1 key={idx}>{recipie.calories}</h1>
                          ))  
                        }

                        
                </div>
            </div>

            {/* ************************** want to cook end ********************** */}

            {/* ************************** Currently cooking start ********************** */}

            <div className=" p-4 text-center">
                <h1 className="text-2xl font-semibold text-[#282828]">Currently cooking:</h1>
                <hr className="mt-2" />
            </div>

            <div className="grid grid-cols-3"> 
                <div className="text-lg font-medium text-[#878787] ">
                    <h3>Name</h3>
                </div>
                <div className="text-lg font-medium text-[#878787] ">
                    <h3>Time</h3>
                </div>
                <div className="text-lg font-medium text-[#878787] ">
                    <h3>Calories</h3>
                </div>
            </div>

            <div className="mt-4 p-4 grid grid-cols-3 bg-[#28282808]"> 
                <div className="text-lg font-medium text-[#878787] ">
                    <h3>name</h3>
                </div>
                <div className="text-lg font-medium text-[#878787] ">
                    <h3>name</h3>
                </div>
                <div className="text-lg font-medium text-[#878787] ">
                    <h3>name</h3>
                </div>
            </div>

        </div>
    );
};

export default WantToCooks;