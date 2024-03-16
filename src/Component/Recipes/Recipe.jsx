import { CiClock1 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
const Recipe = ({ recipe, handleCookButton }) => {
    const { recipe_image, recipe_name, short_description, ingredients,
        preparing_time, calories } = recipe;
    const listItems = ingredients.map((item, idx) => <li key={idx}>{item}</li>);
    return (
        <div className="card border-2 m-2 p-4 bg-base-100 shadow-xl">
            <img className="h-[230px] rounded-2xl" src={recipe_image} alt="" />
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold text-[#282828]">{recipe_name}</h2>
                <p className="mb-4 text-lg font-normal text-[#878787]">{short_description}</p>

                <hr className="text-[#2828281A]" />

                <h3 className="mt-6 text-xl font-medium text-[#282828]">Ingredients: {ingredients.length}</h3>
                <ul className="text-lg font-normal text-[#878787] list-disc ml-8 space-y-2">
                    {listItems}
                </ul>
                <div className="flex gap-6 text-lg font-normal text-[#282828]">
                    <div className="flex gap-2 align-center">
                        <CiClock1></CiClock1>
                        {preparing_time}
                    </div>
                    <div className="flex align-center">
                        <AiOutlineFire></AiOutlineFire>
                        {calories}
                    </div>
                </div>
            </div>
            <button onClick={() => handleCookButton(recipe)} className='m-2 py-3 px-6 text-[#150B2B] text-xl font-semibold rounded-[30px] bg-[#0BE58A]'>Want to Cook</button>
        </div>
    );
};

export default Recipe;