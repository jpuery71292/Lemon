import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import logo from './imagenes/logo.png'

class Menu extends Component{
    constructor (props){
        super(props);
        this.state={
            page: 'home'
        }
    }
    render(){
        return(
            <div className='Menu'>
                <img src={logo} className="Logo" alt="logo"/>
                <div className='Menu-Button'>
                    <Button className="link" onClick={()=>{this.setState({page:'home'})}}>Inicio</Button>
                    <Button className="link" onClick={()=>{this.setState({page:'nosotros'})}}>Nosotros</Button>
                    <Button className="link" onClick={()=>{this.setState({page:'mezcla'})}}>Mezcla y Master</Button>
                    <Button className="link" onClick={()=>{this.setState({page:'redes'})}}>Redes</Button>
                </div>
                <Cuerpo/>
            </div>
        )
    }
}

export default Menu;