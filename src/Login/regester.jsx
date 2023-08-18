

/**
 * 
 * author:mahedi hassan
 * description:authinticate the user
 * date:18/8/2023
 * 
 */



import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { ContexM } from "../Authentication/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";




// reg conpo
const Register = () => {



    // for navigation 
    const navigate = useNavigate();
    // for navigation ends


    // the contex form authprovider
    // contex
    const { creareUser, UpdateUser } = useContext(ContexM)

    // handler for registration
    const handleReg = (e) => {
        // for no reloade 
        e.preventDefault();
        // for no reloade ends 

        // from iput values
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // temp image
        const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8kVrRKvn48kDPt79Je7wZIuT6nUSr3l5DQ&usqp=CAU"
        // from iput values ends


        console.log({ name, email, password });

        creareUser(email, password)
            // create user res
            .then(res => {
                const user = res.user;
                console.log(user);



                // update user name
                UpdateUser(name, image)
                    .then(() => {
                        console.log("profiel update done");
                    })

                    .catch(err => {
                        console.log({ massageFromphoto: err.message });
                    })


                // user info to upload in server
                const userinfo = { name: name, email: user.email, password: password, emailVerified: user.emailVerified, anonimus: user.isAnonymous, }
                // user info to upload in ends




                // this section is for upload data in server 

                // this section is for upload data in server  ends




                // if all ok navigate in home page 
                navigate("/")
                // if all ok navigate in home page ends 
            })
            // any err 
            .catch(err => {
                console.log({ massagehere2: err.message });
            })
        // any err 




    }

    return (

        < div className="w-11/12 mx-auto my-4 h-auto md:h-[80vh] flex justify-center items-center" >

            <div className="w-11/12 shadow-md py-10 px-2   ">
                <h3 className="text-black pb-4 md:pb-10 text-1xl md:text-3xl font-semibold ">Welcome To E-com</h3>

                {/* handle reg  */}
                <form onSubmit={handleReg} className="md:flex   ">

                    {/* this is from div */}
                    <div className="md:w-1/2">
                        <label htmlFor="">
                            <span>Your Name</span>
                        </label>
                        <br />

                        <input name="name" className=" my-2 w-full md:w-3/4 py-3 border-[2px] pl-2 border-gray-400" type="text" placeholder="Please enter your Name" />

                        {/* email */}
                        <br />
                        <label htmlFor="">
                            <span>Your Email</span>
                        </label>
                        <br />


                        <input name="email" className=" my-2 w-full md:w-3/4 py-3 border-[2px] pl-2 border-gray-400" type="email" placeholder="Please enter your Email" />

                        {/* email */}
                        <br />
                        <label className="" htmlFor="">
                            <span>Type password</span>
                        </label>
                        <br />

                        <input name="password" className=" my-2 w-full md:w-3/4 py-3 border-[2px] pl-2 border-gray-400" type="password" placeholder="Please enter your Password" />

                        {/* email */}


                    </div>

                    {/* this is btn and other div */}
                    <div className="md:w-1/2   mt-2 md:mt-0">

                        {/* login btn  */}
                        <div className="mt-4 text-center md:text-left">

                            <button className=" w-11/12 md:w-3/5 mx-auto bg-orange-600 py-5 rounded-sm text-white font-semibold  ">
                                Login
                            </button>
                        </div>
                        {/* login btn  ends */}




                        <samp className="flex pl-3 my-2 ">
                            Or, login with
                        </samp>

                        <div className="mt-4 text-center md:text-left">

                            <button className="  w-11/12 md:w-3/5 mx-auto bg-blue-600 py-3 rounded-sm text-white font-semibold  ">
                                <span className="flex justify-center items-center">
                                    <span><FaFacebook className="text-3xl text-white mr-4"></FaFacebook></span> <span>Fackbook</span>

                                </span>
                            </button>

                        </div>
                        {/* fackbook login ends */}

                        {/* Google login starts */}
                        <div className="mt-4 text-center md:text-left">

                            <button className="  w-11/12 md:w-3/5 mx-auto bg-red-600 py-3 rounded-sm text-white font-semibold  ">
                                <span className="flex justify-center items-center">
                                    <span><FaGoogle className="text-3xl text-white mr-4"></FaGoogle></span> <span>Fackbook</span>

                                </span>
                            </button>

                        </div>
                        {/* google  login ends */}


                    </div>

                </form>
                {/* handle reg ends  */}

            </div>




        </ div >
    );
};

export default Register;