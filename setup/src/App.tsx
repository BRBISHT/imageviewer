import { useState } from "react"
import Lightbox from "yet-another-react-lightbox";
import { GiImage } from "./data";
import "yet-another-react-lightbox/styles.css";
import { Captions, Download, Fullscreen, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import  "./index.css"

function App() {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
     <div className="container"><button className="button-1" onClick={() => setOpen(true)}>
      Image Gallery
      </button>
      </div> 
      <Lightbox open={open}  slides={GiImage} plugins={[Captions,Download,Fullscreen,Zoom,Thumbnails]}close={()=> setOpen(false)}/>
    </>

  )
}

export default App
