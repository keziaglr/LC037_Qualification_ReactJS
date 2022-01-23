import React, {useState, useEffect} from 'react'
import AlbumCard from '../../components/AlbumCard/AlbumCard'
import { gql, useQuery } from '@apollo/client'
import './SearchPage.css'

function SearchPage(){

    const [artist, setWord] = useState('')
    var result = ''

    const ARTIST_QUERY = gql`
            query GetArtist($n: String!){
                artist(name:$n){
                    albums{
                        id
                        name
                        image
                    }
                }
            }
        `

    const {loading, data} = useQuery(ARTIST_QUERY, {
        variables: {
            n: artist
        }
    })

    if(loading) return <div>Loading...</div>
    if(data != null){
        const albumList = data.artist.albums
        result = 
            <div className="album-container">
                {albumList?.map(album=>{
                    return(
                        <AlbumCard album={album} artist={artist} key={album.id}/>
                    )
                })}
            </div>
    }

    const searchClick = () => {
        setWord(document.getElementById('name').value)
    }

    return(
        <div>
            <div className="center">
                <h3>Search Page</h3>
                <div className="form-inline">
                    <input className="form-control mr-sm-2" type="text" name="name" id="name" placeholder="Search Artist..."/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={searchClick}>Search</button>
                </div>
            </div>
            <div className="album-container">
                {result}
            </div>
        </div>
    )
}

export default SearchPage