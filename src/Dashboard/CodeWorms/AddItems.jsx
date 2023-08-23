import React from 'react';

const AddItems = () => {


    const handleItem = (event) => {
        event.preventDefault();

        const form  = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const seller = form.seller.value;
        const category = form.category.value;
        const email = form.email.value;
        const price = form.email.value;
        const quantity = form.email.value;
        const description = form.description.value;


        const postData = {name, photo, seller, category, email, price, quantity, description };
        console.log(postData);

    }

    return (
        
           <div className="card-body">
            <h2 className='text-center text-3xl font-bold text-[#0A1727] mb-4'>Add Products</h2>
             <form onSubmit={handleItem}>
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
                     <div className="form-control">
                         <label className="label">
                                <span className="label-text font-bold text-[#0A1727]">Product Name</span>
                         </label>
                         <input type="text" name="name" placeholder="Product Name" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                         <label className="label">
                             <span className="label-text font-bold text-[#0A1727]">Photo URL</span>
                         </label>
                         <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                     </div>
                     <div className="form-control">
                         <label className="label">
                             <span className="label-text font-bold text-[#0A1727]">Seller Name</span>
                             </label>
                            <input type="text" name="seller" placeholder="seller name" className="input input-bordered" />
                        </div>
                       <div className="form-control">
                           <label className="label">
                               <span className="label-text font-bold text-[#0A1727]">Product Category</span>
                           </label>
                            <input type="text" name="category" placeholder="product category" className="input input-bordered" />

                         </div>
                     <div className="form-control">
                             <label className="label">
                                 <span className="label-text font-bold text-[#0A1727]">Seller Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                     </div>
                        <div className="form-control">
                            <label className="label">
                             <span className="label-text font-bold text-[#0A1727]">Price</span>
                         </label>
                         <input type="text" name="price" placeholder="price" className="input input-bordered" />

                     </div>
                 <div className="form-control">
                            <label className="label">
                             <span className="label-text font-bold text-[#0A1727]">Quantity</span>
                         </label>
                            <input type="text" name="quantity" placeholder="quantity" className="input input-bordered" />

                         </div>
                         <div className="form-control">
                             <label className="label">
                                 <span className="label-text font-bold text-[#0A1727]">Description</span>
                             </label>
                             <input type="text" name="description" placeholder="description" className="input input-bordered" />

                         </div>
                         <div className="form-control">
                             <label className="label">
                                 <span className="label-text font-bold text-[#0A1727]">Role</span>
                             </label>
                             <input type="text" name="role" defaultValue={'pending'} placeholder="Role" className="input input-bordered" />

                         </div>
                     </div>
                     <div className="form-control mt-6">
                         <input className='py-2 text-white font-bold bg-[#0A1727] cursor-pointer' type="submit" value="Add Products" />
                     </div>
                 </form>
          </div>
    );
};

export default AddItems;