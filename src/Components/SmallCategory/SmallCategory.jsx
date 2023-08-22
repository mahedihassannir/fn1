// import useCategory from "../CodeWorms/Hooks/useCategory";
import { Link } from 'react-router-dom'


const SmallCategory = () => {

    // const [category] = useCategory();
    // console.log(category);


    return (
        <div className="">
            <div className="mt-12 mx-auto max-w-7xl container mb-2 shadow">
                <h2 className="text-3xl font-bold mb-4">Categories</h2>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-x-4 sm:gap-x-2 md:gap-x-2">

                    <Link to='/drone'>
                        <div className="w-[140px] mb-2 hover:shadow-2xl ">
                            <div className="flex justify-center items-center ">
                                <img className="pt-2" src="https://i.ibb.co/9pkQGZ7/img17.png" alt="" />
                            </div>
                            <p className="font-bold  text-center">Drone Category..</p>
                        </div>
                    </Link>


                    <Link to='/mobile'>
                        <div className="w-[140px] hover:shadow-2xl mb-2">
                            <div className="flex justify-center items-center ">
                                <img className="pt-2" src="https://i.ibb.co/Cb8LV8T/img16.png" alt="" />
                            </div>
                            <p className="font-bold text-center">Mobile Accessories..</p>
                        </div>
                    </Link>

                    <Link to='iphone'>
                        <div className="w-[140px] hover:shadow-2xl mb-2">
                            <div className="flex justify-center items-center ">
                                <img className="pt-2" src="https://i.ibb.co/k0gnpwT/img13.png" alt="" />
                            </div>
                            <p className="font-bold text-center">iPhone Charger..</p>
                        </div>
                    </Link>
                    <Link to='computer'>
                        <div className="w-[140px] hover:shadow-2xl mb-2 ">
                            <div className="flex justify-center items-center ">
                                <img className="pt-2" src="https://i.ibb.co/XXfvpQZ/img15.png" alt="" />
                            </div>
                            <p className="font-bold text-center">Computer Accessories..</p>
                        </div>
                    </Link>
                    <Link to='wireless'>
                        <div className="w-[140px] hover:shadow-2xl mb-2">
                            <div className="flex justify-center items-center ">
                                <img className="pt-2" src="https://i.ibb.co/tLsJXZS/img14.png" alt="" />
                            </div>
                            <p className="font-bold text-center">Wireless Category..</p>
                        </div>
                    </Link>
                    <Link to='charger'>
                        <div className="w-[140px] hover:shadow-2xl mb-2 ">
                            <div className="flex justify-center items-center ">
                                <img className="pt-2" src="https://i.ibb.co/k0gnpwT/img13.png" alt="" />
                            </div>
                            <p className="font-bold text-center">Charger Categories..</p>
                        </div>
                    </Link>
                    <Link to='cable'>
                        <div className="w-[140px] mb-2 hover:shadow-2xl ">
                            <div className="flex justify-center items-center ">
                                <img className="pt-2" src="https://i.ibb.co/G9LYKHP/img11.png" alt="" />
                            </div>
                            <p className="font-bold text-center">Electrical Cable..</p>
                        </div>
                    </Link>
                    <Link to='electronics'>
                        <div className="w-[140px] mb-2 hover:shadow-2xl">
                            <div className="flex justify-center items-center ">
                                <img className="pt-2" src="https://i.ibb.co/Zx6fNhs/img10.png" alt="" />
                            </div>
                            <p className="font-bold text-center">Electronics Categories..</p>
                        </div>
                    </Link>
                </div>
            </div>


            <div className="mt-4 mx-auto max-w-7xl container shadow">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-x-4 md:gap-x-4">
                    <Link to='wifi'>
                        <div className="w-[140px] hover:shadow-2xl mb-2 ">
                            <div className="flex justify-center items-center ">
                                <img className="pt-2" src="https://i.ibb.co/jM6X1cR/img9.png" alt="" />
                            </div>
                            <p className="font-bold text-center">WiFi Routers Categories..</p>
                        </div>
                    </Link>
                    <Link to='headphones'>
                        <div className="w-[140px] hover:shadow-2xl mb-2 ">
                            <div className="flex justify-center items-center">
                                <img className="pt-2" src="https://i.ibb.co/B4jgz7G/img8.png" alt="" />
                            </div>
                            <p className="font-bold text-center">Headphones Categories..</p>
                        </div>
                    </Link>
                    <Link to='toys'>
                        <div className="w-[140px] mb-2 hover:shadow-2xl ">
                            <div className="flex justify-center items-center">
                                <img className="pt-2" src="https://i.ibb.co/CBjM8x2/img7.png" alt="" />
                            </div>
                            <p className="font-bold text-center">Electrical Toys Categories..</p>
                        </div>
                    </Link>
                    <Link to='tablet'>
                        <div className="w-[140px] mb-2 hover:shadow-2xl">
                            <div className="flex justify-center items-center">
                                <img className="pt-2" src="https://i.ibb.co/g4zfYFK/img6.png" alt="" />
                            </div>
                            <p className="font-bold text-center">Tablet Computers Categories..</p>
                        </div>
                    </Link>
                    <Link to='keyboard'>
                        <div className="w-[140px] mb-2 hover:shadow-2xl">
                            <div className="flex justify-center items-center">
                                <img className="pt-2" src="https://i.ibb.co/1MmpqnT/img5.png" alt="" />
                            </div>
                            <p className="font-bold text-center">Keyboards Categories..</p>
                        </div>
                    </Link>
                    <Link to="mouse">
                        <div className="w-[140px] mb-2 hover:shadow-2xl">
                            <div className="flex justify-center items-center">
                                <img className="pt-2" src="https://i.ibb.co/tMLrHq1/img3.png" alt="" />
                            </div>
                            <p className="font-bold text-center">Mouse Categories..</p>
                        </div>
                    </Link>
                    <Link to='laptop'>
                        <div className="w-[140px] mb-2 hover:shadow-2xl">
                            <div className="flex justify-center items-center">
                                <img className="pt-2" src="https://i.ibb.co/MDmRtYf/img2.png" alt="" />
                            </div>
                            <p className="font-bold text-center">Laptop Computer Category..</p>
                        </div>
                    </Link>
                    <Link to='socket'>
                        <div className="w-[140px] mb-2 hover:shadow-2xl">
                            <div className="flex justify-center items-center">
                                <img className="pt-2" src="https://i.ibb.co/0FYqrZM/img1.png" alt="" />
                            </div>
                            <p className="font-bold text-center">Remote control Toys..</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default SmallCategory;