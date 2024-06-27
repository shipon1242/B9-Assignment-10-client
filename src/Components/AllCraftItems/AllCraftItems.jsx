import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";

import "./pagination.css"
import CraftCard from "../Home/CraftCard";
const AllCraftItems = () => {
    // const [currentPage, setCurrentPage] = useState(1)
    const [allCrafts,setAllCrafts]=useState([])
    const [limit, setLimit] = useState(9)
    const [pageCount, setPageCount] = useState(1)
  const currentPage = useRef()
    useEffect(() => {
        currentPage.current =1;
        getPaginated()

    }, [])
    const handlePageClick = e => {
        console.log(e)
        currentPage.current =e.selected + 1

        getPaginated()
    }

    const getPaginated = () => {
        fetch(`http://localhost:5001/allcrafts?page=${currentPage.current}&limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPageCount(data.pageCount)
                setAllCrafts(data.result)
            })
    }

    return (
        <div className="mt-6">
            
           <div className="grid md:grid-cols-3 gap-6 ">
            {
                allCrafts.map(craft=> <CraftCard key={craft._id} craft={craft}></CraftCard>)
            }
           </div>
            <ReactPaginate className="pagination  page-item.active  page-item:hover"
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                marginPagesDisplayed={2}

                containerClassName="pagination justify-content-center"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                activeClassName="active"
            >

            </ReactPaginate>
        </div>
    );
};

export default AllCraftItems;