import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './AlbumPage.css'
import { gql, useQuery } from '@apollo/client';
import ButtonFavorite from "../../components/Button/ButtonFavorite"

function AlbumPage(){
    let {id} = useParams();

    const ALBUM_QUERY = gql`
        query GetAlbum($id: String!){
            album(id: $id){
                name
                image
                tracks{
                    id
                    name
                    preview_url
                }
            }
        }
    `
    const {loading, error, data} = useQuery(ALBUM_QUERY, {
        variables:{
            id: id
        }
    })

    if(loading) return <div>Loading...</div>
    const album = data.album
    const trackList = data.album.tracks

    return(
        <div className="album-container">
            {trackList?.map(track=>{
                return(
                    <div>
                        <div className="card track-card">
                            <div className="card-body">
                                <img className="class-img-top" src={album.image}  alt=""/>
                                <div className="card-body">
                                    <div>
                                        <h3 className="card-title">{track.name}</h3>
                                        <audio src={track.preview_url} controls/> 
                                    </div>
                                </div>    
                                <div className="button">
                                    <ButtonFavorite track={track} key={track.id}/>
                                </div>
                            </div>
                        </div>
                </div>
                )
            })}
        </div>
    )

}

export default AlbumPage