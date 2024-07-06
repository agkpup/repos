import React from "react";
import { useParams } from 'react-router-dom';
const DynamicRoute =()=>{
    let { id } = useParams();
    return (
        
        <div>
            This is dynamic page route {id}
        </div>
    );
}
export default DynamicRoute;