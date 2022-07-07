import React, { useState ,useEffect } from "react";

import axios from "axios"
import Items from "./Items";
function Blog() {
  const [detail , setDetail] = useState([])
  const [title, setTitle] = useState("");
  const [blogbody, setBlogbody] = useState("");
  const [links, setLinks] = useState("");

  

     useEffect(()=> {
       let data;

       axios
           .get("https://aditibansaln.herokuapp.com")
           .then((res) => {
               data = res.data;
               setDetail(data)
           })
           .catch((err) => {});
   })

   const handleSubmit = (e) => {
     axios
       .post("https://aditibansaln.herokuapp.com", {
         title: title,
         blogbody: blogbody,
         links :links,
         
        
       })
       .then((res) => {setTitle("")
       setBlogbody("")
      setLinks("")
 
   })
       .catch((err) => {});
    };


  return (
    <>
      {/* <div>
      
             
               <form onSubmit={handleSubmit}>
                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="NAME"
                        value={title}
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="CONTACT NO"
                        value={blogbody}
                        name="blogbody"
                        onChange={(e) => setBlogbody(e.target.value)}
                      />
                    </div>
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        placeholder="From LOcation"
                        value={links}
                        name="links"
                        onChange={(e) => setLinks(e.target.value)}
                      />
                    </div>
 
            

                    <div className="app-form-group buttons">
                      <button className="app-form-button">CANCEL</button>
                      <button type="submit" className="app-form-button">
                        SEND
                      </button>
                    </div>
                  </div>
                </div>
              </form> 
           
      </div> */}
      <div className="row " style={{marginTop:"20px" ,maxWidth:"100%"}}>
                             { detail.map((element) => {
                                return <div className="col-md-4" key={element.id}>
                                    <Items title={element.title}  blogbody={element.blogbody}  links= {element.links} />
                                </div>
                            })}
                        </div>
                       
      
    </>
  );
}

export default Blog;