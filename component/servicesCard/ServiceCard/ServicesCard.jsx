import "./ServicesCard.css";

const ServicesCard = (props)=>{
    
    return(
        
        <div className="service-card">
            <div>
               <span className="img-serviceCard">
                <center><img  src = {props.imgProps} alt="" height="100px" width="100px"/></center>
                </span>
            </div>
            <div className="data_numbers"><center>{props.data_numberProps}</center></div>
            <p className="data_para" style={{textAlign:"center"}}>{props.titleProps}</p>
           
        </div>
        
        
    )
}

export default ServicesCard;