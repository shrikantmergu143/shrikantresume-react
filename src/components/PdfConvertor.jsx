import { useState } from "react";
import "../style.css";
import "../styles.css";

export default function PdfConvertor() {
    const [state, setState] = useState([]);
    function fileToDataURL(file) {
        var reader = new FileReader()
        return new Promise(function (resolve, reject) {
          reader.onload = function (event) {
            resolve(event.target.result)
          }
          reader.readAsDataURL(file)
        })
    }
    const handleChange = ({target}) =>{
        const payload = [];
        [...target.files].map((data)=>{
            payload.push(URL.createObjectURL(data));
        });
        setState(payload)
    }
    if(state?.length===0){
        return(
            <main class="main">
                <div class=" mx-auto">
                    <div class="row sticky-parent">
                        <div class="col-12 col-md-12 col-xl-12">
                            <form>
                                <input type='file' name='files[]' multiple onChange={handleChange} />
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
  return (
    <main class="main">
      <div class=" mx-auto">
        <div class="row sticky-parent">
          <div class="col-12 col-md-12 col-xl-12">
           {state?.map((item, index)=>(
               <page size="A4" key={index} class="box-outer page pdf-images">
                   <img src={item} alt={item} />
               </page>
           ))}
          </div>
        </div>
      </div>
    </main>
  );
}
