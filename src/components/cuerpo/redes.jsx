/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa'
import './cuerpos.css'

function Redes() {
    return(
        <div className="icon">
            <div className="tarjeta">
                <a className="Link" target="_blank" href="https://www.facebook.com/lemoor.pra">
                    <FaFacebook size="8em"/>
                </a>
            </div>
            <div className="tarjeta">
                <a className="Link" href="https://www.instagram.com/lemoor_pra/" target="_blank">
                    <FaInstagram size="8em"/> 
                </a>
            </div>
            <div className="tarjeta">
                <a className="Link" href="https://www.youtube.com/channel/UCFUj4H2k9E1jcwjwyXdcawg" target="_blank">
                    <FaYoutube size="8em"/>
                </a>
            </div>
            <div className="tarjeta">
                <a className="Link" href="https://open.spotify.com/artist/4lBFts0fM8PzDLGZzHJL1q?si=cfoSCEL1SVeOLKrAEClRqw"  target="_blank">
                    <FaSpotify size="8em"/>
                </a>
            </div>
        </div>
    )
}

export default Redes
