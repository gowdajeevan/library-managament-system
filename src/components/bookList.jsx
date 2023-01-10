import '../styles/bookList.css'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const BookList = () => {
    let [books,setBooks]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response=await fetch("http://localhost:2000/books")
            let data=await response.json()
            setBooks(data)
            console.log(data);
        }
        fetchData()
        
    },[books])
    let handleDelete=(id,title)=>{
        fetch(`http://localhost:2000/books/${id}`,{
            method:'DELETE'
        });
        alert(`${title} will be deleted permanently`)
    }
    let navegate=useNavigate();
    let read=(id)=>{
        navegate(`/admin/book-list/${id}`)
    }
    return ( 
        <div className="bookList">
            <h1>Book List: {books.length}</h1>
            <div className="books_section">
                {books.map(data=>(
                    <div className="book_card">
                       <div className="book-img">
                        <img src={data.thumbnailUrl} alt="" />
                       </div>
                       <div className="book-details">
                       <h1>{data.title} </h1>
                        <h6>PageCount:{data.pageCount} </h6>
                        <h6><b>Authors:</b> {data.authors}</h6>
                        <h6><b>category:</b>{data.categories} </h6>
                        <button  onClick={()=>read(data.id)}>Read more</button>
                        <button style={{marginLeft:"20px"}} onClick={()=>handleDelete(data.id,data.title)}>Delete</button>
                       </div>
                    </div>
                )  )}
            </div>
        </div>
     );
}
 
export default BookList;