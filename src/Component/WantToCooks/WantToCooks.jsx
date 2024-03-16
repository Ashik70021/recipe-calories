import { useState } from "react";

const WantToCooks = ({recipies}) => {
     

    const [current, setCurrent] = useState([])
     const handleCurrent = (recipe) =>{
           const newCurrent = [...current, recipe]
           setCurrent(newCurrent)
     }

    return (
        <div className="w-[50%] mt-6 ml-12 border-2 rounded-2xl text-center h-fit">
            
            {/* ************************** want to cook start ********************** */}

            <div className=" p-4 text-center">
                <h1 className="text-2xl font-semibold text-[#282828]">Want to Cook:{recipies.length}</h1>
                <hr className="mt-2" />
            </div>

            <div className="grid grid-cols-3 text-lg font-medium text-[#878787]">
                    <h3>Name</h3>
                    <h3>Time</h3>
                    <h3>Calories</h3>
               
            </div>

            <div className="mt-4 p-4 bg-[#28282808]">
                {recipies.map((recipe, idx) => (
                    <div key={idx} className=" grid grid-cols-3 m-6 p-4">
                        <h1 className="text-lg font-medium text-[#878787]">{recipe.recipe_name}</h1>
                        <h1 className="text-lg font-medium text-[#878787]">{recipe.preparing_time}</h1>
                        <div className="flex gap-2">
                            <h1 className="text-lg font-medium text-[#878787]">{recipe.calories}</h1>
                            <button onClick={()=>handleCurrent(recipe)} className="bg-[#0BE58A]  text-[#150B2B] text-lg font-bold  px-4 rounded-2xl" type="button">Preparing</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* ************************** want to cook end ********************** */}

            {/* ************************** Currently cooking start ********************** */}

            <div className=" p-4 text-center">
                <h1 className="text-2xl font-semibold text-[#282828]">Currently cooking:{current.length}</h1>
                <hr className="mt-2" />
            </div>

            <div className="grid grid-cols-3 text-lg font-medium text-[#878787]">
                    <h3>Name</h3>
                    <h3>Time</h3>
                    <h3>Calories</h3>
               
            </div>

            <div className="mt-4 p-4 gap-6 bg-[#28282808]">
                {current.map((curr, idx) => (
                    <div key={idx} className=" grid grid-cols-3 gap-6 mb-4">
                        <h1 className="text-lg font-medium text-[#878787]">{curr.recipe_name}</h1>
                        <h1 className="text-lg font-medium text-[#878787]">{curr.preparing_time}</h1>
                        <div className="flex gap-2">
                            <h1 className="text-lg font-medium text-[#878787]">{curr.calories}</h1>
                            
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default WantToCooks;