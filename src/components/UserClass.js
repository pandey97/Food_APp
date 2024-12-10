import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super();
        this.state = {
            count:0
        }
        console.log("constructor called");
    }

    componentDidMount() {
        console.log("component mounted");
    }

    componentDidUpdate() {
        console.log("component didupdate");
    }

    componentWillUnmount() {
        console.log("component unmount");
    }
    render() {
        const {count} = this.state;
        const {name, location} = this.props;
        console.log("render called");
        return(
            <div className="user-card">
                <h4>Count: {count}</h4>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count+1
                    })
                }}>Count Increase</button>
                <h4>name: {name}</h4>
                <h4>Location: {location}</h4>
                <h4>Contact: sudhanshu7@gmail.com</h4>
            </div>
        )
    }
};

export default UserClass;