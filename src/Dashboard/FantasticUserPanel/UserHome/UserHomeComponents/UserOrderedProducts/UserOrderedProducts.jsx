import React, { useEffect, useState } from 'react';
import useDivisions from '../../../../../Hooks/Fantastic/useDivisions';
import axios from 'axios';

const UserOrderedProducts = () => {
    const { divisions, loading } = useDivisions()
    const [selectDivision, setSelectDivision] = useState("")
    const [selectCity, setSelectCity] = useState("")
    const [cities, setCities] = useState("")
    console.log(divisions.data)
    const HandleUserSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.fullname.value
        const selectValue = form.selectdivision.value;


    }
    console.log(selectDivision)
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
    console.log(selectCity)
    return (
        <section className='flex justify-center'>

            <form onSubmit={HandleUserSubmit} className='w-[70%] bg-white flex flex-col gap-y-6 p-10'>
                <div>
                    <p>Full Name</p>
                    <input className='outline-none border w-full py-2 pl-3 rounded' type="text" placeholder='Write full name' name='fullname' required/>
                    {/*  */}

                </div>
                {/*  */}
                <div>
                    <p>Address</p>
                    <input className='outline-none border w-full py-2 pl-3 rounded' type="text" placeholder='House no./building/street/area' name='address' required/>
                </div>
                {/*  */}
                <div>
                    <p>Mobile Number</p>
                    <input className='outline-none border w-full py-2 pl-3 rounded' type="number" placeholder='Write mobile number' name='mobile' required/>
                </div>
                {/*  */}
                <div>
                    <p>Division</p>
                    <select
                        name="selectdivision"
                        className='w-full outline-none border py-2'
                        value={selectDivision}
                        onChange={(e) => setSelectDivision(e.target.value)}
                        required
                    >
                        <option value="" disabled selected>
                            Choose your division
                        </option>
                        {
                            divisions.data ? divisions.data.map(division => (
                                <option value={division.division} key={division._id}>{division.division}</option>
                            )) : ""
                        }
                    </select>
                </div>
                {/*  */}
                <div>
                    <p>City</p>
                    <select
                        name="selectcity"
                        className='w-full outline-none border py-2'
                        value={cities}
                        onChange={(e) => setCities(e.target.value)}
                        disabled={!selectCity || !selectCity.data || selectCity.data.length === 0}
                        required
                    >
                        <option value="" disabled selected>
                            Choose your city
                        </option>
                        {selectCity && selectCity.data ? (
                            selectCity.data.map(city => (
                                city.upazilla.map(upazilla => (
                                    <option value={`${city.district}, ${upazilla}`} key={upazilla}>
                                        {`${city.district}, ${upazilla}`}
                                    </option>
                                ))
                            ))
                        ) : (
                            <option value="" disabled>
                                No cities available
                            </option>
                        )}
                    </select>

                </div>
                {/*  */}
                <div>
                    <p>Area</p>
                    <input className='outline-none border w-full py-2 pl-3 rounded' type="text" placeholder='Please choose your area' name='city' required/>
                </div>
                {/*  */}
                <div>
                    <p>Landmark(Optional)</p>
                    <input className='outline-none border w-full py-2 pl-3 rounded' type="text" placeholder='E.G. beside train station' name='name' required/>
                </div>
                <input style={{ backgroundColor: "#19D895" }} className=' w-full py-2 pl-3 rounded' type="submit" value="Save" />
            </form>
        </section>
    );
};

export default UserOrderedProducts;