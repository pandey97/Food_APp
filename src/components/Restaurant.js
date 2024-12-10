import { useDispatch } from "react-redux";
import { RESTAURANT_IMAGE_URL } from "../utils/constants";
import { addItem } from "../redux/slice/RestaurantSlice";

const Restaurant = (props) => {
    const dispatch = useDispatch();
    const {name,areaname,avgRatingString,costForTwo,cuisines,cloudinaryImageId} = props?.data?.info;

    const CardItemAdded = (item) => {
        dispatch(addItem(item));
    }
    
    return(
        <div className="restaurant_card">
            <img className="restaurant_image" src={RESTAURANT_IMAGE_URL + cloudinaryImageId} alt="restaurant_image" />
            <h4>{name}</h4>
            <h4>{areaname}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{costForTwo}</h4>
            <button className="add_button" onClick={() => CardItemAdded(props.data)}>Add</button>
        </div>
    )
};

export default Restaurant;