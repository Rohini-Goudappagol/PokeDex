import PokeMonList from '../PokeMonList/PokeMonList'
import Search from '../Search/Search'
import './Pokedex.css'


function Pokedex(){
    return(
        <div className='pokedex-wrapper'>
            <h1>POKEDEX</h1>
            <Search/>
            <PokeMonList/>
        </div>
    )
}
export default Pokedex