import { Link } from "react-router-dom";
import '../styles/adminDashBoard.css'
const AdminDashBoard = () => {
    return ( 
        <div className="admindashboard">
            <div className="block2">
                <div className="top">

                </div>
                <div className="content">
                    <Link style={{fontSize:"xx-large", paddingBottom:"3px",margin:"5px 0px"}}>Signature Series: In the News with Fareed Zakaria</Link>
                    <p style={{marginTop:"5px"}}>By Erika Berlin on January 11, 2023</p>
                    <p style={{fontSize:"larger"}}>Greenwich Library’s Signature Series is pleased to welcome bestselling author and journalist Fareed Zakaria to the Library’s Berkley Theater on Thursday,…</p>
                    <Link style={{color:"orange"}}>Take a look</Link>
                </div>
            </div>
            <div className="block2">
                <div className="top">

                </div>
                <div className="content">
                    <Link style={{fontSize:"xx-large", paddingBottom:"3px",margin:"5px 0px"}}>At the Library this january...</Link>
                    <p style={{marginTop:"5px"}}>By Erika Berlin on December 29, 2022</p>
                    <p style={{fontSize:"larger"}}>Greenwich Library has a full schedule of (free!) enrichment events throughout January. Speak with a librarian or check the online…</p>
                    <Link style={{color:"orange"}}>Take a look</Link>
                </div>
            </div>
            <div className="block2">
                <div className="top">

                </div>
                <div className="content">
                    <Link style={{fontSize:"xx-large", paddingBottom:"3px",margin:"5px 0px"}}>Friends Friday Films Announces Its Winter Screenings</Link>
                    <p style={{marginTop:"5px"}}>By Erika Berlin on December 28, 2022</p>
                    <p style={{fontSize:"larger"}}>Greenwich Library’s longest-running program—the Friends Friday Films series—is back with a full slate of movies, beginning on January 6. The…</p>
                    <Link style={{color:"orange"}}>Take a look</Link>
                </div>
            </div>
        </div>
     );
}
 
export default AdminDashBoard;