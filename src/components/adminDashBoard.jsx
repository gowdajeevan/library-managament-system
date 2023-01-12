import { Link } from "react-router-dom";
import '../styles/adminDashBoard.css'
const AdminDashBoard = () => {
    return ( 
        <div className="admindashboard">
            <div className="block2">
                <div className="top">

                </div>
                <div className="content">
                    <p style={{fontSize:"xx-large", paddingBottom:"10px",margin:"5px 0px", borderBottom:"2px solid orange"}}>Signature Series: In the News with Fareed Zakaria</p>
                    <p style={{marginTop:"0px"}}>By Erika Berlin on January 11, 2023</p>
                    <p style={{fontSize:"larger"}}>Greenwich Library’s Signature Series is pleased to welcome bestselling author and journalist Fareed Zakaria to the Library’s Berkley Theater on Thursday,…</p>
                    <Link>Take a look</Link>
                </div>
            </div>
            <div className="block2">
                <div className="top">

                </div>
                <div className="content">
                    <p style={{fontSize:"xx-large", paddingBottom:"10px",margin:"5px 0px", borderBottom:"2px solid orange"}}>At the Library this january...</p>
                    <p style={{marginTop:"0px"}}>By Erika Berlin on December 29, 2022</p>
                    <p style={{fontSize:"larger"}}>Greenwich Library has a full schedule of (free!) enrichment events throughout January. Speak with a librarian or check the online…</p>
                    <Link>Take a look</Link>
                </div>
            </div>
            <div className="block2">
                <div className="top">

                </div>
                <div className="content">
                    <p style={{fontSize:"xx-large", paddingBottom:"10px",margin:"5px 0px", borderBottom:"2px solid orange"}}>Friends Friday Films Announces Its Winter Screenings</p>
                    <p style={{marginTop:"0px"}}>By Erika Berlin on December 28, 2022</p>
                    <p style={{fontSize:"larger"}}>Greenwich Library’s longest-running program—the Friends Friday Films series—is back with a full slate of movies, beginning on January 6. The…</p>
                    <Link>Take a look</Link>
                </div>
            </div>
        </div>
     );
}
 
export default AdminDashBoard;