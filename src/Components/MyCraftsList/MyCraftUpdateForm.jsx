import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const MyCraftUpdateForm = () => {
    const id = useParams().id
    // console.log(id)
    const craft = useLoaderData()
    const { image, item_name, short_description, subcategory_Name, price, rating, customization, processing_time, stock_status, made_by } = craft
    // console.log(craft)

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target
        const image = form.image.value;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stock_status = form.stock_status.value;
        const made_by = form.made_by.value;

        const updCraft = { image, item_name, short_description, subcategory_Name, price, rating, customization, processing_time, stock_status, made_by }
        console.log(updCraft)

        fetch(`http://localhost:5001/crafts/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updCraft)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Successfully added!",
                        text: "You clicked the button!",
                        icon: "success"
                    });



                }
            })


    }
    return (
        <div className=" w-10/12 mx-auto bg-red-200 rounded-xl mt-4 pt-3 md:pt-4">
            <Helmet>
                <meta charSet="utf-8" />
                <title>update | myCraft | pottery studio </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>


            <h2 className=" abril mt-4 md:mt-8 mb-3 md:mb-6   text-2xl md:text-5xl text-center text-rose-950">Updating  Craft Item  </h2>

            <form onSubmit={handleUpdate} >
                <div className="grid md:grid-cols-2 gap-4 md:gap-8  p-4 md:p-12">
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950 ">Image</span>

                            </div>
                            <input type="text" name='image' placeholder="Image url" defaultValue={image} className="bodoni-4  input input-bordered w-full input-secondary bg-white text-black " />

                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950  ">Item_name
                                </span>

                            </div>
                            <input type="text" name='item_name' placeholder="item_name
            "defaultValue={item_name} className="bodoni-4  input input-bordered w-full input-secondary bg-white text-black " />

                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950 "> Subcategory_Name
                                </span>

                            </div>
                            <input type="text" name='subcategory_Name' placeholder=" subcategory_Name
       " defaultValue={subcategory_Name} className="input input-bordered w-full input-secondary bodoni-4  bg-white text-black " />

                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950 ">Short description
                                </span>

                            </div>
                            <input type="text" name='short_description' placeholder="short description
           " defaultValue={short_description} className="input input-bordered w-full input-secondary bodoni-4  bg-white text-black " />

                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950 "> Price</span>

                            </div>
                            <input type="text" name='price' placeholder=" price" defaultValue={price} className="input input-bordered w-full input-secondary bodoni-4  bg-white text-black " />

                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950 ">Rating</span>

                            </div>
                            <input type="text" name='rating' placeholder="rating" defaultValue={rating} className="input input-bordered w-full input-secondary bodoni-4  bg-white text-black " />

                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950 ">Customization</span>

                            </div>
                            <input type="text" name='customization' placeholder="customization" defaultValue={customization} className="input input-bordered w-full input-secondary bodoni-4  bg-white text-black " />

                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950 "> Processing_time</span>

                            </div>
                            <input type="text" name='processing_time' placeholder=" processing_time" defaultValue={processing_time} className="input input-bordered w-full input-secondary bodoni-4  bg-white text-black " />

                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950 "> Stock_status</span>

                            </div>
                            <input type="text" name='stock_status' placeholder=" stock_status" defaultValue={stock_status} className="input input-bordered w-full input-secondary bodoni-4  bg-white text-black " />

                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label ">
                                <span className="label-text bodoni-5 md:bodoni-6 text-lg md:text-xl text-rose-950 "> Made_by</span>

                            </div>
                            <input type="text" name='made_by' placeholder=" made_by" defaultValue={made_by} className="input input-bordered w-full input-secondary bodoni-4  bg-white text-black " />

                        </label>
                    </div>

                    <button type='submit' className="btn sub  md:col-span-2 btn-sm  md:btn-md w-full bg-red-400 hover:bg-red-400  md:text-xl text-white  bodoni-6">Update</button>

                </div>

            </form>

        </div>
    );
};

export default MyCraftUpdateForm;