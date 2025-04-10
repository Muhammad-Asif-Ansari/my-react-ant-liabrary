import Spacer from "./components/space/Spacer.js";
import DividerText from "./components/divider/DividerText.js";
import MenuItem from "./components/menu/MenuItem.js";
import StepsIcon from "./components/steps/StepsIcon.js";
import TransferData from "./components/transfer/Transferdata.js";
import UploadImage from "./components/upload/UploadImage.js";
import AvatarIcon from "./components/avatar/AvatarIcon.js";
import Carousels from "./components/carousel/Carousels.js";
import Description from "./components/descriptions/Description.js";
import QRCodes from "./components/QR Code/QRCodes.js";

function App() {
  return (
    <>
    <div style={{ border: "2px solid green", width: "50%", borderRadius: "10px", margin: "auto" }}>
      <div style={{ margin: "50px" }}>
        <h1 style={{ color: "red", padding: "10px" }}>Button</h1>
        <Spacer />
      </div>
      
    </div>
    <div style={{border:"2px solid chocolate",width: "50%", borderRadius: "10px", margin: "auto", marginTop:"10px"}}>
        <h1 style={{color:"blue",textAlign:"center"}}>DividerText</h1>
        <DividerText />
      </div>

      <div style={{border:"2px solid salmon",width: "50%", borderRadius: "10px", margin: "auto", marginTop:"10px",padding:"2px" }}>
        <h1 style={{color:"grey",textAlign:"center"}}>Menu Item</h1>
        <MenuItem/>
      </div>

      <div style={{border:"2px solid aqua",width: "50%", borderRadius: "10px", margin: "auto", marginTop:"10px",padding:"2px" }}>
        <h1 style={{color:"#ff8376",textAlign:"center"}}>Steps Icon</h1>
        <StepsIcon/>
      </div>

      <div style={{border:"2px solid brown",width: "50%", borderRadius: "10px", margin: "auto", marginTop:"10px",padding:"2px" }}>
        <h1 style={{color:"#939346",textAlign:"center"}}>Transfer Data</h1>
        <TransferData/>
      </div>

      <div style={{border:"2px solid fusia",width: "50%", borderRadius: "10px", margin: "auto", marginTop:"10px",padding:"2px" }}>
        <h1 style={{color:"#831896",textAlign:"center"}}>UploadImage</h1>
        <UploadImage/>
      </div>

      <div style={{border:"2px solid gold",width: "50%", borderRadius: "10px", margin: "auto", marginTop:"10px",padding:"2px" }}>
        <h1 style={{color:"#021896",textAlign:"center"}}>AvatarIcon</h1>
        <AvatarIcon/>
      </div>

      <div style={{border:"2px solid green",width: "50%", borderRadius: "10px", margin: "auto", marginTop:"10px",padding:"2px" }}>
        <h1 style={{color:"#975896",textAlign:"center"}}>Carousel</h1>
        <Carousels/>
      </div>

      <div style={{border:"2px solid red",width: "50%", borderRadius: "10px", margin: "auto", marginTop:"10px",padding:"2px" }}>
        <h1 style={{color:"#235696",textAlign:"center"}}>Descriptions</h1>
        <Description/>
      </div>

      <div style={{border:"2px solid ",width: "50%", borderRadius: "10px", margin: "auto", marginTop:"10px",padding:"2px" }}>
        <h1 style={{color:"#235696",textAlign:"center"}}>QRCode</h1>
        <QRCodes/>
      </div>
    </>
    
  );
}

export default App;
