import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";

const useFetchdata = () => {
    
    const[resData, setResData] = useState([]);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        try {
            const response = await fetch(SWIGGY_API);
            const responseJSON = await response.json();
            const restaurants =
                responseJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setResData(restaurants || []);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return resData;
};

export default useFetchdata;