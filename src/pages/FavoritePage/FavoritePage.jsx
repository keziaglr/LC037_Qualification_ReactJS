import './FavoritePage.css'
import { gql, useQuery } from '@apollo/client';

function FavoritePage(){

	var trackList = []
    var idx = 0
    do {
        if(localStorage.getItem(idx) != null){
            let track = localStorage.getItem(idx)
            let trackObj = {
                trackId: track
            }
            trackList.push(trackObj)
            idx++
        }else{
            break
        }
    } while (true);

    return(
        <div className="album-page-container">
            <div className="track-container">
                {trackList?.map((track) => (
                    <Track trackId={track['trackId']}/>
                ))
                }
            </div>
        </div>
    )
	
	function handleFavorite (trackId){
        var idx = 0
        do {
            if(localStorage.getItem(idx) === trackId){
                localStorage.removeItem(idx)
                idx = 0
                break
            }else{
                idx++
            }
        } while (true);
	}

	function Track (props){
		const ALBUM_QUERY = gql`
			query GetTrack($id: String!){
				track(id: $id){
					name
				}
			}
		`
		let id = props.trackId
		const {loading, data} = useQuery(ALBUM_QUERY, {
			variables: {
				id: id
			}
		})
	
		if(loading) return <div>Loading...</div>
		let track = data.track
		return(
			<div className="card track-card">
				<div className="card-body">
					<h3 className="card-title">{track.name}</h3>
					<audio src={track.preview_url} controls/> 
				</div>
                <div class="removeBtn">
                    <button type="button" class="btn btn-danger" id="removeBtn" onClick={()=>handleFavorite(id)}>
                        Remove from Favorite
                    </button>
                </div>
			</div>															
		)
	}

}

export default FavoritePage;
