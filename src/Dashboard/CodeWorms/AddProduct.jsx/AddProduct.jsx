import Test from "../../../Components/Test";
// import ReactRichEditor from 'react-rich-text-editor'

import { useState } from 'react';

import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const AddProduct = () => {

    const [editorHtml, setEditorHtml] = useState('');

    const handleChange = (html) => {
        setEditorHtml(html);
    };
    const [editorHtml2, setEditorHtml2] = useState('');

    const handleChangetext = (html) => {
        setEditorHtml2(html);
    };


    return (
        <div className="w-[98%] border-4 border-[#e1e8f0] rounded-md bg-white py-5">
            <div className="h-14 w-full bg-[#f7f8fa]">
                <h3 className="font-semibold text-lg p-2 text-orange-600">Basic information</h3>
            </div>

            {/* this section is for product and image adding starts*/}
            <div className="w-[99%] mx-auto  border-2 p-3 mb-2 rounded-md">

                <h3 className="text-2xl font-semibold">Product Images & Video</h3>
                <p>Your product images is the first thing your customer sees on the product page.</p>


                <div className="pt-3">
                    <p className="text-black">Product Images*</p>
                    <p className="text-black">Upload between 3 to 8 images   </p>
                </div>
                {/* this is image section */}
                <div className="pt-10 ">

                    <Test></Test>

                </div>
                {/* this is image section ends */}

                {/* this is video section */}

                <div className="pt-4 ">

                    <span>video</span>

                    <div className="pt-2 flex items-center gap-1">
                        <input className="bg-orange-500 rounded-full cursor-pointer" type="radio" />
                        <span>
                            Product Video URL
                        </span>

                    </div>

                    {/* this is the main input for the seller */}
                    <div className="">
                        <input className="w-[99%] py-2 mt-2 pl-2  border-2 rounded-lg focus:outline-none focus:border-orange-500 border-gray-300" type="text" placeholder="input youtube video link  " />

                        <br />
                        <span className="mt-3 text-red-700">Should be youtube url</span>
                    </div>
                    {/* this is the main input for the seller ends */}
                </div>

            </div>
            {/* this is video section ends */}

            {/* this section is for product and image adding ends */}

            {/* this section is for the Product Information */}
            <section className="w-[99%] mx-auto  border-2 p-3 mb-2 rounded-md">

                <h3 className="text-lg text-[#f85f14] font-semibold">
                    Product Information
                </h3>
                <p className="pt-1">Having accurate product information raises discoverability.</p>



                {/* ends of title  */}
                <div className="">
                    <label htmlFor="">
                        <span>Product Name <span className="text-orange-600 text-lg">*</span></span>
                    </label>

                    {/* this is the input */}
                    <div className="relative">

                        <input className="w-[99%] py-2 mt-2 pl-32  border-2 rounded-lg focus:outline-none focus:border-blue-500 border-gray-300" type="text" placeholder=" type Product name  " />

                        <div className="absolute -mt-[41.7px] ml-[2px]">
                            <button className=" rounded-lg py-2 px-4 bg-[#fafafa] text-black ">

                                English

                            </button>
                        </div>
                    </div>
                    {/* this is the input ends */}

                    <div className="mt-2">
                        <div className="">
                            <p>Category*</p>
                        </div>

                        <div className="">

                            <input className="w-[99%] py-2 mt-1 pl-2  border-2 rounded-lg focus:outline-none focus:border-orange-500 border-gray-300" type="text" placeholder="select your category  " />

                        </div>
                    </div>

                </div>
                {/* category selection ends */}


            </section>
            {/* this section is for the Product Information ends */}

            {/* this is product highlisghts section */}
            <div className="w-[99%] mx-auto  border-2 p-3 mb-2 rounded-md">
                <div className="">
                    <h3 className="text-lg font-semibold">Product Highlights</h3>
                    <p>Having accurate product information raises discoverability. <span className="pl-4 hover:text-blue-500">Learn More</span></p>
                </div>
                {/* this is instructions starts */}
                <div className="mt-2">
                    <p className="textlg">Buyer Promotion Image</p>
                    <h3 className="font-semibold pt-2">White Background Image</h3>
                    <p className="">Upload an image with white background. (Aspect Ratio 1:1)</p>
                </div>
                {/* here is upload system */}
                <div className="">
                    <img className="w-20" src="data:image/png;base64,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" alt="" />
                </div>
                <div className="">
                    {/* this text editor is for the product high lighting section starts*/}
                    <div className=" flex mb-10 ">
                        <div className="lg:w-3/4 w-full p-6   ">
                            <ReactQuill
                                value={editorHtml2}
                                onChange={handleChangetext}
                                className="h-64"
                                modules={{
                                    toolbar: [
                                        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                        ['bold', 'italic', 'underline'],
                                        [{ 'align': [] }],
                                        ['link'],
                                    ],
                                }}
                                placeholder="Make A Product Highlights"
                            />
                        </div>
                    </div>
                    {/* this text editor is for the product high lighting section ends */}



                </div>
                {/* this is instructions ends */}
            </div>
            {/* this is product highlisghts section ends */}





            {/* this is for the text-editor */}
            <section className=" mt-3 bg-white  w-[99%] mx-auto border-2 rounded-lg pb-16 ">
                <div className="w-full h-10 pl-2 bg-[#f7f8fa]">

                    <h1 className="text-[#f85f14] font-bold">Description</h1>

                </div>

                {/* <ReactRichEditor height={200} /> */}
                <div className=" flex ">
                    <div className="lg:w-3/4 w-full p-6   ">
                        <ReactQuill
                            value={editorHtml}
                            onChange={handleChange}
                            className="h-64"
                            modules={{
                                toolbar: [
                                    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                    ['bold', 'italic', 'underline'],
                                    [{ 'align': [] }],
                                    ['link'],
                                ],
                            }}
                            placeholder="Make A description"
                        />
                    </div>
                </div>

            </section>
            {/* this is for the text-editor */}


            {/* this is price related work */}

            {/* this is for the text-editor */}
            <section className=" mt-3 bg-white  w-[99%] mx-auto border-2 rounded-lg pb-16 ">

                <div className="w-full h-10 pl-2 bg-[#f7f8fa]">
                    <h1 className=" text-[#f85f14] font-bold ">Variants, Price, Stock</h1>
                </div>
                {/* this is input fields starts */}
                {/* title starts */}
                <span className="pl-2">Price & Stock *</span>
                {/* title ends */}
                <div className="p-2 grid grid-cols-1  justify-center lg:justify-start lg:flex ">


                    <div className="relative mt-2 ml-4">

                        <input className="  w-40 border-2 py-2 focus:outline-none focus:border-orange-500 border-gray-300 pl-14 hover:shadow-md" placeholder="Price" type="text" />

                        <div className="absolute top-0">
                            <button className="py-[10px] px-3 bg-[#f2f3f7] ">BDT</button>
                        </div>



                    </div>

                    <div className="relative mt-2 ml-4">

                        <input className="  w-60 border-2 py-2 focus:outline-none focus:border-orange-500 border-gray-300 pl-14 hover:shadow-md" placeholder="Promo Price" type="text" />

                        <div className="absolute top-0">
                            <button className="py-[10px] px-3 bg-[#f2f3f7] ">BDT</button>
                        </div>



                    </div>


                    {/* this field is for the product pice related  */}
                    <div className="relative mt-2 ml-4">

                        <input className="  w-40 border-2 py-2 focus:outline-none pl-2 rounded-md hover:shadow-md focus:border-orange-500 border-gray-300" placeholder="Promo Price" type="number" />





                    </div>

                    {/* this field is for the product pice related ends  */}

                    <div className="mt-2 ml-4">

                        <input className="  w-60 border-2 py-2 focus:outline-none focus:border-orange-500 border-gray-300 pl-2 hover:shadow-md" placeholder="Seller Sku" type="text" />




                    </div>

                    <div className="mt-2 ml-4">

                        <button className="py-[10px] px-5 rounded-md bg-orange-500 text-white ">
                            Apply All

                        </button>


                    </div>


                </div>

                {/* this is input fields ends */}





            </section>

            {/* this is price related work ends */}

        </div>
    );
};

export default AddProduct;