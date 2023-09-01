// Author:Masum
// Date:08/28/2023
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { ContexM } from '../../../Authentication/AuthProvider/AuthProvider';
import useDivisions from '../../../Hooks/Fantastic/useDivisions';
import { ScaleLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCustomers from '../../../Hooks/Fantastic/useCustomers';



const UserAddressForm = () => {
    const { divisions } = useDivisions()
    const { customers } = useCustomers()
    const [loader, setLoader] = useState(false)
    const [selectDivision, setSelectDivision] = useState("")
    const [selectCity, setSelectCity] = useState("")
    const [cities, setCities] = useState("")
    const { user } = useContext(ContexM)
    const [errors, setErrors] = useState({
        fullname: "",
        contactEmail: "",
        address: "",
        mobile: "",
        selectdivision: "",
        selectcity: "",
        area: "",
    });

    const HandleUserSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.fullname.value;
        const contactEmail = form.contactEmail.value;
        const address = form.address.value;
        const selectdivision = form.selectdivision.value;
        const selectcity = form.selectcity.value;
        const mobile = form.mobile.value;
        const area = form.area.value;
        const landmark = form.landmark.value;

        // Create an object to store individual error messages
        const newErrors = {
            fullname: "",
            contactEmail: "",
            address: "",
            mobile: "",
            selectdivision: "",
            selectcity: "",
            area: "",
        };

        // Check if any required field is empty and set error messages accordingly
        if (!name) {
            newErrors.fullname = "Full Name is required.";
        }
        if (!contactEmail) {
            newErrors.contactEmail = "Email is required.";
        }
        if (!address) {
            newErrors.address = "Address is required.";
        }

        const mobileRegex = /^(01[3-9]\d{8}|017\d{8}|018\d{8}|019\d{8})$/;
        if (!mobile.match(mobileRegex) || mobile.length !== 11) {
            newErrors.mobile = "Please enter a valid 11-digit Bangladeshi mobile number.";
        }

        if (!selectdivision) {
            newErrors.selectdivision = "Please choose your division.";
        }

        if (!selectcity) {
            newErrors.selectcity = "Please choose your city.";
        }

        if (!area) {
            newErrors.area = "Area is required.";
        }

        // Update the errors state with the new error messages
        setErrors(newErrors);

        // If there are any errors, prevent form submission
        if (Object.values(newErrors).some(error => error !== "")) {
            return;
        }

        const AllValue = { name, contactEmail, address, selectdivision, selectcity, mobile, area, email: user.email };

        if (landmark) {
            AllValue.landmark = landmark;
        }
        console.log(AllValue);


        // send customer info to db
        setLoader(true)
        axios.put('http://localhost:5000/customerInfo', AllValue)
            .then(response => {
                console.log('Data sent successfully:', response.data);
                toast(' Your Data has been saved!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setLoader(false)
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
    }

    // get cities based on divisions
    useEffect(() => {
        axios.get(`https://bdapis.com/api/v1.1/division/${selectDivision}`)
            .then((response) => {
                // Handle the API response data
                setSelectCity(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data from API:", error);
            });
    }, [selectDivision])


    // get input default values if user has already data in db
    const findCustomer = customers.filter(customer => {
        // Check if user exists and has an email property
        if (user && user.email) {
            return customer.email === user.email;
        }
        return false; // Handle the case where user or user.email is null or undefined
    });







    return (
        <section className=''>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='flex justify-center'>
                <form onSubmit={HandleUserSubmit} className='w-[70%]  flex flex-col gap-y-6 p-10 bg-white'>
                    <div>
                        <p>Full Name</p>
                        <input  className='outline-none border w-full py-2 pl-3 rounded' type="text" placeholder={findCustomer.length > 0 && findCustomer[0].name || "Write your full name"} name='fullname' />
                        <p className="text-yellow-300">{errors.fullname}</p>
                    </div>
                    <div>
                        <p>Email</p>
                        <input className='outline-none border w-full py-2 pl-3 rounded' type="email" placeholder={findCustomer.length > 0 && findCustomer[0].contactEmail || "Write your email"} name='contactEmail' />
                        <p className="text-yellow-300">{errors.contactEmail}</p>
                    </div>

                    <div>
                        <p>Address</p>
                        <input className='outline-none border  w-full py-2 pl-3 rounded' type="text" placeholder={findCustomer.length > 0 && findCustomer[0].address || "House no./building/street/area"} name='address' />
                        <p className="text-yellow-300">{errors.address}</p>
                    </div>

                    <div>
                        <p>Mobile Number</p>
                        <input className='outline-none border  w-full py-2 pl-3 rounded' type="text" placeholder={findCustomer.length > 0 && findCustomer[0].mobile || 'Write mobile number'} name='mobile' onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                        }} />
                        <p className="text-yellow-300">{errors.mobile}</p>
                    </div>

                    <div>
                        <p>Division</p>
                        <select
                            name="selectdivision"
                            className='w-full outline-none border  py-2'
                            value={selectDivision}
                            onChange={(e) => setSelectDivision(e.target.value)}
                        >
                            {
                                findCustomer.length > 0 ? <option value="" disabled selected>{findCustomer[0].
                                    selectdivision}</option> : <option value="" disabled selected>
                                Choose your division
                            </option>
                            }
                            {
                                divisions.data ? divisions.data.map(division => (
                                    <option value={division.division} key={division._id}>{division.division}</option>
                                )) : ""
                            }
                        </select>
                        <p className="text-yellow-300">{errors.selectdivision}</p>
                    </div>

                    <div>
                        <p>City</p>
                        <select
                            name="selectcity"
                            className='w-full outline-none border  py-2'
                            value={cities}
                            onChange={(e) => setCities(e.target.value)}
                            disabled={!selectCity || !selectCity.data || selectCity.data.length === 0}
                        >
                            {
                                findCustomer.length > 0 ? <option value="" disabled selected>{findCustomer[0].
                                    selectcity}</option> : <option value="" disabled selected>
                                Choose your City
                            </option>
                            }
                            {selectCity && selectCity.data && (
                                selectCity.data.map(city => (
                                    city.upazilla.map(upazilla => (
                                        <option value={`${city.district}, ${upazilla}`} key={upazilla}>
                                            {`${city.district}, ${upazilla}`}
                                        </option>
                                    ))
                                ))
                            ) }
                        </select>
                        <p className="text-yellow-300">{errors.selectcity}</p>
                    </div>

                    <div>
                        <p>Area</p>
                        <input className='outline-none border  w-full py-2 pl-3 rounded' type="text" placeholder={findCustomer.length > 0 && findCustomer[0].area || 'Please choose your area'} name='area' />
                        <p className="text-yellow-300">{errors.area}</p>
                    </div>
                    {/*  */}
                    <div>
                        <p>Landmark(Optional)</p>
                        <input className='outline-none border  w-full py-2 pl-3 rounded' type="text" placeholder={findCustomer.length > 0 && findCustomer[0].landmark || 'E.G. beside train station'}  name='landmark' />
                    </div>
                    {loader ? (
                        <ScaleLoader style={{ backgroundColor: "#fff" }} color="#36d7b7" className='flex justify-center border btn-outline' />
                    ) : (
                        <input
                            style={{ backgroundColor: "#19D895" }}
                            className='w-full py-2 pl-3 rounded'
                            type="submit"
                            value="Save"
                        />
                    )}

                </form>
            </div>
        </section>
    );
};

export default UserAddressForm;