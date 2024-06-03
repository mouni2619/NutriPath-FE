import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";
import ApiRoutes from "../utis/ApiRoutes";
import AxiosService from "../utis/AxiosService";
import Food from "./Food";
import Header from "./Header";
import "./navbar.css"

function Track() {
  const { user } = useContext(UserContext);
  const [foodItems, setFoodItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState(null);

  async function searchFood(event) {
    const searchTerm = event.target.value.trim();
    setSearchTerm(searchTerm);
    if (searchTerm.length === 0) {
      setFoodItems([]);
      setSelectedFood(null);
      return;
    }

    try {
      if (!user || !user.token) {
        throw new Error("User or token is not available.");
      }

      const response = await AxiosService.get(
        ApiRoutes.FOOD_SEARCH.path + `/${searchTerm}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const data = response.data;

      if (data.message === undefined) {
        setFoodItems(data);
      } else {
        setFoodItems([]);
      }
    } catch (error) {
      console.error("Error searching food:", error);
    }
  }

  function handleFoodItemClick(item) {
    setSelectedFood(item);
    setSearchTerm(item.name);
    console.log(item);
    setFoodItems([]);
  }

  return (
    <div id="track" style={{backgroundImage:"url(https://img.freepik.com/free-photo/top-close-up-view-vegetables-tomatoes-with-pedicels-garlic-bell-peppers-lemon-oil-onion_140725-72203.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717286400&semt=ais_user)", backgroundRepeat:"none", backgroundSize:"cover"}} >
    <Header/>
     
      <div className="container" >
        <h2 className="text mt-5" style={{ fontSize:"25px" }}>
          <b>Track Food</b>
        </h2>
        <input
          className="box"
          type="search"
          placeholder="Search Food Item"
          value={searchTerm}
          onChange={searchFood}
          style={{ width: "300px", height: "40px", fontSize: "16px" }}
        />
        {foodItems.length !== 0 ? (
          <div className="search-results">
            {foodItems.map((item) => (
              <p
                className="item"
                onClick={() => {
                  handleFoodItemClick(item);
                }}
                key={item._id}
              >
                {item.name}
              </p>
            ))}
          </div>
        ) : null}

        {selectedFood !== null ? <Food food={selectedFood} /> : null}
      </div>
    </div>
  );
}

export default Track;
