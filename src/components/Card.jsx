import "../styles/index.css"
const Card = (props) =>{
    const name = props.name;
    const img = props.cardImg;
    const desc = props.description;
    const status = props.status;
    const statusIcon = props.statusIcon;
    
   return(
    <div className="card-wrapper">
    <img className="card-img" src={img} alt="" />
    <div className="card-data">
    <h2>{name}</h2>
    <p>{desc}</p>
    <div className="status-bar">
        <h5>{status}</h5>
        <img width="30" height="30" src={statusIcon} alt="" />
    </div>
    </div>
    </div>
   )
}
export default Card