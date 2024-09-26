import React, { useState } from "react";
function ProductList({ data }) {
  const [showIngredients, setShowIngredients] = useState({});

  function buttonClick(index) {
    setShowIngredients((prev) => ({ ...prev, [index]: !prev[index] }));
  }
  function handleOk(index){
    setShowIngredients((prev) => ({ ...prev, [index]:false }));
  }
  return (
    <div className="recipeListcontainer">
      {data.map((item, index) => (
        <div className=".recipeContainer">
          <div className="items">
            <img src={item.recipe.image} />
            <h5>{item.recipe.label}</h5>
            <p>No of Calories:{Math.floor(item.recipe.calories)}</p>
            <div>
              <button
                className="ingredients"
                onClick={() => buttonClick(index)}
              >
                Ingredients
              </button>
            </div>
            <button
              className="complete"
              onClick={() => window.open(item.recipe.url)}
            >
              See complete recipe
            </button>
            <div className="popup">  
              {showIngredients[index] && (
                <ul>
                  <h5>Ingredients</h5>
                  {item.recipe.ingredientLines.map((ingredient, i) => (
                    <div>
                      
                      <li key={i}>{ingredient}</li>
                    </div>
                  ))}
                  <button onClick={()=>handleOk(index)}>Ok</button>
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
