import { useState, useEffect } from "react";
import Restaurant from "./Restaurant";
import useFetchData from "../utils/useFetchData";
import EnhancedRestaurantcard from "./EnhancedRestaurantHoc";

const Body = () => {
    const [textValue, setTextValue] = useState("");
    const [filterResdata, setFilterResdata] = useState([]);
    const resData = useFetchData();

    const EnhancedRestaurant = EnhancedRestaurantcard(Restaurant);

    useEffect(() => {
        setFilterResdata(resData || []);
        console.log(resData);
    }, [resData]);

    const handleChange = (e) => {
        setTextValue(e.target.value);
    };

    const handleSearch = () => {
        const filterData = resData?.filter((item) =>
            item?.info?.name?.toLowerCase().includes(textValue.toLowerCase())
        );
        setFilterResdata(filterData);
    };

    if (!resData || resData.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="body_container">
            <div className="search_container">
                <input
                    className="input_style"
                    value={textValue}
                    onChange={handleChange}
                    placeholder="Search restaurants..."
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <h4>Restaurants Available :</h4>
            <div className="Restaurant_container">
                {filterResdata.length > 0 ? (
                    filterResdata.map((item, index) => (
                        item?.info?.parentId > 1000 ? 
                            <EnhancedRestaurant key={item?.info?.id || index} data={item}/> : 
                            <Restaurant key={item?.info?.id || index} data={item} />
                    ))
                ) : (
                    <p>No restaurants found.</p>
                )}
            </div>
        </div>
    );
};

export default Body;
