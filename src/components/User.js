import { useState } from "react";

const User = ({name,location}) => {
  const[count,setCount] = useState(0);

    return(
        <div className="user-card">
            <h4>Count: {count}</h4>
            <h4>name: {name}</h4>
            <h4>Location: {location}</h4>
            <h4>Contact: sudhanshu7@gmail.com</h4>
        </div>
    )
};

export default User;