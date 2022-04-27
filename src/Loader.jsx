import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import $ from 'jquery';
import { Button } from '@mui/material';

const Loader =()=>{

    return(
        <Button onClick={()=>{console.log("done");}} className='container-fluid' style={{backgroundColor:"black",justifyContent:"center",height:"100vh",width:"100vw",display:"flex"}}>
            <div style={{alignSelf:"center",alignItems:"center"}}><img className='mx-ato' src={require('./assets/images/route.png')} style={{height:"10vh"}}/>
            <div style={{color:"white"}}>Tap Here</div>
            </div>
        </Button>
    );

}

export default Loader;