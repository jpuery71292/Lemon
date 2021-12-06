/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa'
import './cuerpos.css'

function Redes() {
    return(
        <div className="Cuerpo">
            <div>
                <a className="Link" target="_blank" href="https://www.facebook.com/lemoor.pra">
                    <FaFacebook className="icon"/>  https://www.facebook.com/lemoor.pra
                </a>
            </div>
            <div>
                <a className="Link" href="https://www.instagram.com/lemoor_pra/" target="_blank">
                    <FaInstagram className="icon"/>  https://www.instagram.com/lemoor_pra/ 
                </a>
            </div>
            <div>
                <a className="Link" href="https://www.youtube.com/channel/UCFUj4H2k9E1jcwjwyXdcawg" target="_blank">
                    <FaYoutube className="icon"/>  https://www.youtube.com/channel/UCFUj4H2k9E1jcwjwyXdcawg 
                </a>
            </div>
            <div>
                <a className="Link" href="https://open.spotify.com/artist/4lBFts0fM8PzDLGZzHJL1q?si=cfoSCEL1SVeOLKrAEClRqw"  target="_blank">
                    <FaSpotify className="icon"/>  https://open.spotify.com/artist/4lBFts0fM8PzDLGZzHJL1q?si=cfoSCEL1SVeOLKrAEClRqw 
                </a>
            </div>
        </div>
    )
}

export default Redes
