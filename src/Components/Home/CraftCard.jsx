

const CraftCard = ({ craft }) => {
  console.log(craft)
  const { image, item_name, made_by, price,
    processing_time, rating, short_description, stock_status, subcategory_Name, _id, customization

  } = craft
  return (
    <div className="card card-compact  bg-red-200 shadow-xl">
      <figure className="h-60 md:h-72"><img src={image} alt="Shoes" /></figure>
      <div className="card-body">
        
        <div className="card-title flex justify-between  text-black ">
          <h2>{item_name}</h2>
          
          <p className="flex justify-end gap-1"> <span className="text-xl">৳</span> {price}</p>
        </div>
        <p className="text-black text-base">{short_description}</p>
        <div className="card-actions justify-end">
          <button className="btn w-full text-xl  btn-secondary "> View Details</button>
        </div>
      </div>
    </div>
  );
};

export default CraftCard;