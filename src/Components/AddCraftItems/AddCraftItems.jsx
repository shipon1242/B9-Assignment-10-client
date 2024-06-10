import './addCraft.css'
const AddCraftItems = () => {
    const handleAddCraft = e =>{
    e.preventDefault()
    const form =e.target;
    const image =form.image.value;
    const item_name =form.item_name.value;
    const subcategory_Name =form.subcategory_Name.value;
    const short_description =form.short_description.value;
    const price =form.price.value;
    const rating =form.rating.value;
    const customization =form.customization.value;
    const processing_time =form.processing_time.value;



    console.log(image,item_name,short_description,subcategory_Name,price,rating,customization,processing_time)
    
    }


    return (
        <div className=" w-10/12 mx-auto bg-red-200 rounded-xl mt-4 pt-3 md:pt-4">
            <h2 className=" abril mt-4 md:mt-8 mb-3 md:mb-6   text-2xl md:text-5xl text-center text-rose-950"> Adding New Craft Items  </h2>

            <form onSubmit={handleAddCraft} >
                <div className="grid md:grid-cols-2 gap-4 md:gap-8  p-4 md:p-12">
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950 ">Image</span>

                            </div>
                            <input type="text" name='image' placeholder="Image url" className="bodoni-4 opacity-70 input input-bordered w-full input-secondary bg-white text-black " />

                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950  ">item_name
                                </span>

                            </div>
                            <input type="text" name='item_name' placeholder="item_name
                " className="bodoni-4 opacity-70 input input-bordered w-full input-secondary bg-white text-black " />

                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950 "> subcategory_Name
                                </span>

                            </div>
                            <input type="text" name='subcategory_Name' placeholder=" subcategory_Name
           " className="input input-bordered w-full input-secondary bodoni-4 opacity-70 bg-white text-black " />

                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950 ">short description
                                </span>

                            </div>
                            <input type="text" name='short_description' placeholder="short description
               " className="input input-bordered w-full input-secondary bodoni-4 opacity-70 bg-white text-black " />

                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950 "> price</span>

                            </div>
                            <input type="text" name='price' placeholder=" price" className="input input-bordered w-full input-secondary bodoni-4 opacity-70 bg-white text-black " />

                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950 ">rating</span>

                            </div>
                            <input type="text" name='rating' placeholder="rating" className="input input-bordered w-full input-secondary bodoni-4 opacity-70 bg-white text-black " />

                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950 ">customization</span>

                            </div>
                            <input type="text" name='customization' placeholder="customization" className="input input-bordered w-full input-secondary bodoni-4 opacity-70 bg-white text-black " />

                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950 "> processing_time</span>

                            </div>
                            <input type="text" name='processing_time' placeholder=" processing_time" className="input input-bordered w-full input-secondary bodoni-4 opacity-70 bg-white text-black " />

                        </label>
                    </div>
                    <button type='submit' className="btn sub  md:col-span-2 btn-sm  md:btn-md w-full bg-red-400 hover:bg-red-400  md:text-xl text-white  bodoni-6">submit</button>
                    
                </div>
                
                

            </form>

        </div>
    );
};

export default AddCraftItems;