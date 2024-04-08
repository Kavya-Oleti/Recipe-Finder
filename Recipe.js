import { useState } from "react";
import ProductList from "./ProductList";
import "./Recipe.css";
function Navbar() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const app_id = "a4b5cf27";
  const app_key = "b9fe25c66a8718d26260113b2c28d868	";
  function ontextChange(e) {
    setSearch(e.target.value);

    //   //   clearTimeout(timeoutstate);
    //   //   const timeout = setTimeout(() => console.log("Api call"), 5000);
    //   //   updateTimeOutState(timeout);
  }
  function searchClick(e) {
    e.preventDefault();
    // console.log(timeoutstate);
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${app_id}&app_key=${app_key}`
    )
      .then((response) => response.json())
      .then(
        (data) => setData(data.hits)
        // console.log(data);
      );
    console.log(data);
  }

  return (
    <div>
      <div className="container">
        <div className="title">
          <h1>Recipe Finder</h1>
        </div>
        <div className="input">
        <i class="fa-solid fa-bowl-food"></i>
          <input
            type="text"
            placeholder="search recipe"
            value={search}
            onChange={ontextChange}
          />
          <button onClick={searchClick}>Search</button>
        </div>
      </div>
      {data.length >= 1 ? <ProductList data={data}></ProductList> : null}

      {/* </div> */}
      {/* <h1>hello</h1> */}
      {/* <div className="Recipelistcontainer">
        <div className="recipecontainer"> */}
      {/* {data.length>=1 ?data:data}
        {data.map((data) => {
          <div>
            <img />
            <h1>{data.recipe.label}</h1>
            <p className="ingredients">Ingredients</p>
            <p className="complete">see complete recipe</p>
            <button>buy</button>
          </div>;
        })}
        {/* </div>
      </div> */}
    </div>
  
  );
}

export default Navbar;
