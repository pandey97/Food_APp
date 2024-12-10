import Restaurant from "./Restaurant";

const EnhancedRestaurantcard = (Restaurant) => {
    return (props) => {
        console.log("props",props)
        return(
            <div>
                <label className="enhanced_restaurant_label">FAMOUS</label>
                <Restaurant {...props}/>
            </div>
        )
    }
};

export default EnhancedRestaurantcard;