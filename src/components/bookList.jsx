import '../styles/bookList.css'
import { useEffect, useState } from "react";
import { useNavigate,useLocation } from 'react-router-dom';

const BookList = () => {
    let [books,setBooks]=useState([])
    let location=useLocation()
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
        if(location.pathname == '/admin/book-list'){
            navegate(`/admin/book-list/${id}`)
        }
        else{
            navegate(`/user/book-list/${id}`)
        }
    }
    return ( 
        <div className="bookList">
            <h1 style={{margin:"15px 0px",textAlign:"center"}}>Book List: {books.length}</h1>
            <div className="books_section">
                {books.map(data=>(
                    <div className="book_card">
                       <div className="book-img">
                        <img src={data.thumbnailUrl} alt="" />
                       </div>
                       <div className="book-details">
                        <p style={{textAlign:"center",fontSize:"xxx-large"}}>{data.title} </p>
                        <p>PageCount : {data.pageCount} </p>
                        <p>Authors : {data.authors}</p>
                        <p>Category : {data.categories} </p>
                        <div className="readmorebut">
                        <button onClick={()=>read(data.id)}>Read more</button>
                        </div>
                       <div className="bookdeletebutton">
                       { location.pathname == '/admin/book-list' && <button style={{marginLeft:"20px"}} onClick={()=>handleDelete(data.id,data.title)}>Delete</button>}
                       </div>
                       </div>
                    </div>
                )  )}
            </div>
        </div>
     );
}
 
export default BookList;