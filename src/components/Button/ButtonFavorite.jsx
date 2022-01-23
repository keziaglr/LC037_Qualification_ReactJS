import { Link } from 'react-router-dom'

const handleFavorite = (trackId)=>{
    var idx = 0
    do {
        if(localStorage.getItem(idx) == null){
            localStorage.setItem(idx, trackId)
            idx = 0
            break
        }else if(localStorage.getItem(idx) === trackId){
            localStorage.removeItem(idx)
            idx = 0
            break
        }else{
            idx++
        }
    } while (true);
}

function checkId(trackId){
    var idx = 0
    do {
        if(localStorage.getItem(idx) == null){
            return null;
        }else if(localStorage.getItem(idx) === trackId){
            return idx;
        }else{
            idx++
        }
    } while (true);
}

function ButtonFavorite(props){
    var id = props.track.id

    if(checkId(id) == null){
        return(
            <button type="button" class="btn btn-success" onClick={()=>handleFavorite(id)}>
                Add to Favorite
            </button>
        )
    }else{
        return(
            <button type="button" class="btn btn-danger" onClick={()=>handleFavorite(id)}>
                Remove from Favorite
            </button>
        )
    }
}

export default ButtonFavorite