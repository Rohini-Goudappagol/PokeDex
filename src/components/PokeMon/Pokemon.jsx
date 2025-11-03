import './Pokemon.css'
function Pokemon({name,image}){
    return(
       <div className="pokemon-card">
         <h3>{name}</h3>
        <img src={image}  />
           
        </div>
    )
}

export default Pokemon