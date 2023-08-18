import { useState } from "react";

const Login = () => {

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     // Add your login logic here using username and password
    //     alert(`Logging in with username: ${username}`);
    // };


    return (

       
        <div className="bg-teal-500 flex justify-center items-center h-screen">

            {/* login form */}
            <form className=" p-8 bg-white rounded-lg shadow-lg " >
                <h1 className="text-2xl font-semibold mb-4">Login</h1>

                {/* input form */}

                
               
                
                <div className="mb-4">
                    <h3 className=" block font-medium text-gray-700 ">Email: </h3>
                    <input className=" w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500" type="email" name="email" id="" />
                </div>
                
                <div className="mb-4" >
                    <h3 className=" block font-medium ">Password: </h3>
                    {/* <input className=" w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500" type="password" name="password" value="" /> */}

                    <input type="password" className=" w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500 " placeholder="Password" />
                </div>

                <div className="text-center">
                <button type="submit" className=" text-lg  font-semibold bg-blue-600 px-2 rounded-lg text-white   " >Login</button>
                </div>
                

                </form >
        </div>


  

       
    
    );
};

export default Login;