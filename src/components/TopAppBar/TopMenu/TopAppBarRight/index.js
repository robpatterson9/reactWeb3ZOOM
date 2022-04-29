
import React, {useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap';
import './App.css';

function TopAppBarRight() {


  const [dropdown, setDropdown]=useState(false);

  const abrirCerrarDropdown=() =>{
    setDropdown(!dropdown);
  }

  const PACK1=()=>{
    window.open('http://www.mint-A.emyem.es', '_blank');
  }

  const PACK2=()=>{
    window.open('http://www.mint-B.emyem.es', '_blank');
  }

  const PACK3=()=>{
    window.open('http://www.mint-C.emyem.es', '_blank');
  }

  const PACK4=()=>{
    window.open('http://www.mint-D.emyem.es', '_blank');
  }

  const PACK5=()=>{
    window.open('http://www.mint-E.emyem.es', '_blank');
  }

  const PACK6=()=>{
    window.open('http://www.mint-F.emyem.es', '_blank');
  }

  const PACK7=()=>{
    window.open('http://www.mint-G.emyem.es', '_blank');
  }

  const PACK8=()=>{
    window.open('http://www.mint-H.emyem.es', '_blank');
  }

  const PACK9=()=>{
    window.open('http://www.mint-I.emyem.es', '_blank');
  }

  const PACK10=()=>{
    window.open('http://www.mint-J.emyem.es', '_blank');
  }

  const PACK11=()=>{
    window.open('http://www.mint-K.emyem.es', '_blank');
  }

  const PACK12=()=>{
    window.open('http://www.mint-L.emyem.es', '_blank');
  }

 return (

    <div className="TopAppBarRight">
      
     <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
       <DropdownToggle caret className="botonDropdown">
       BUY NOW
       </DropdownToggle>

       <DropdownMenu>
        <DropdownItem header> Common </DropdownItem>
        <DropdownItem onClick={()=>PACK1()}> PACK 1 </DropdownItem>
        <DropdownItem onClick={()=>PACK2()}> PACK 2 </DropdownItem>
        <DropdownItem onClick={()=>PACK3()}> PACK 3 </DropdownItem>

        <DropdownItem header> Weird </DropdownItem>
        <DropdownItem onClick={()=>PACK4()}> PACK 1 </DropdownItem>
        <DropdownItem onClick={()=>PACK5()}> PACK 2 </DropdownItem>
        <DropdownItem onClick={()=>PACK6()}> PACK 3 </DropdownItem>

        <DropdownItem header> Legendary </DropdownItem>
        <DropdownItem onClick={()=>PACK7()}> PACK 1 </DropdownItem>
        <DropdownItem onClick={()=>PACK8()}> PACK 2 </DropdownItem>
        <DropdownItem onClick={()=>PACK9()}> PACK 3 </DropdownItem>

        <DropdownItem header> Epic </DropdownItem>
        <DropdownItem onClick={()=>PACK10()}> PACK 1 </DropdownItem>
        <DropdownItem onClick={()=>PACK11()}> PACK 2 </DropdownItem>
        <DropdownItem onClick={()=>PACK12()}> PACK 3 </DropdownItem>

       </DropdownMenu>
     </Dropdown>
    </div>
    
   );
}

export default TopAppBarRight;
