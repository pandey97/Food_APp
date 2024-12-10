import React from 'react'
import User from './User'
import UserClass from './UserClass'

// class About extends React.Component {
//     constructor(props){
//         super(props);
//         console.log("Parent constructor called")
//     };

//     componentDidMount() {
//         console.log("Parent component mounted");
//     }

//     componentDidUpdate() {
//         console.log("Parent component didupdate");
//     }

//     componentWillUnmount() {
//         console.log("Parent component unmount");
//     }

//     render() {
//         console.log("Parent render called");
//         return (
//             <div>
//                 <h1>This is About Us page</h1>
//                 {/* <User name="Sudhanshu Kumar Pandey(function)" location="Sec-12 Noida"/> */}
//                 <UserClass name="Sudhanshu Kumar Pandey(class)" location="Sec-12 Noida"/>
//                 <UserClass name="Sudhanshu Kumar Pandey(class)" location="Sec-12 Noida"/>
//             </div>
//           )
//     }
// }

const About = () => {
  return (
    <div>
        <h1>This is About Us page</h1>
        <User name="Sudhanshu Kumar Pandey(function)" location="Sec-12 Noida"/>
        {/* <UserClass name="Sudhanshu Kumar Pandey(class)" location="Sec-12 Noida"/> */}
    </div>
  )
}

export default About;