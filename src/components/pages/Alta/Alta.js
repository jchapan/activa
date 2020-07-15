import React, { useState } from 'react'
import Header from '../../layout/header/Header'
import Footer from '../../layout/footer/Footer'
import axios from 'axios'

function Alta() {
    const URL = 'https://directorioactiva.firebaseio.com/.json'
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [giro, setGiro] = useState('');
    const [mail, setMail] = useState('');
    const [maps, setMaps] = useState('');
    const [phone, setPhone] = useState('');
    const [web, setWeb] = useState('');
    const clear = ()=>{
        setName('');
        setAddress('');
        setGiro('');
        setMail('');
        setMaps('');
        setPhone('');
        setWeb('');
    }
    const saveTodo = (event)=>{
        event.preventDefault();
        console.log('Dieron click')
        axios.post(URL, {
            name,
            address,
            giro,
            mail,
            maps,
            phone,
            web,
        }).then(()=>{
            alert ('Creado con exito')
            clear()
        }).catch((error)=>{
            alert('Hubo un error')
            console.log(error)
         });
    }
    return (
    <>
    <Header />
    <div className= "container">
    <h3>Dar de alta Empresa</h3>
    <form onSubmit={saveTodo}>
        <div className="form-group">
        <input 
            className= "form-control" 
            type ="text"   
            placeholder = "Nombre" 
            value={name}
            required
            onChange ={(e)=>{setName(e.target.value)}}
        />
        <br />  
        <input 
            className= "form-control" 
            type ="text"   
            placeholder = "Direccion" 
            value={address}
            required
            onChange ={(e)=>{setAddress(e.target.value)}}
        />
        <br />
        <input 
            className= "form-control" 
            type ="text"   
            placeholder = "Giro" 
            value={giro}
            required
            onChange ={(e)=>{setGiro(e.target.value)}}
        />
        <br />
        <input 
            className= "form-control" 
            type ="email"   
            placeholder = "Mail" 
            value={mail}
            required
            onChange ={(e)=>{setMail(e.target.value)}}
        />
        <br />
        <input 
            className= "form-control" 
            type ="url"   
            placeholder = "URL Google Maps" 
            value={maps}
            required
            onChange ={(e)=>{setMaps(e.target.value)}}
        />
        <br />
        <input 
            className= "form-control" 
            type ="phone"   
            placeholder = "Telefono" 
            value={phone}
            required
            onChange ={(e)=>{setPhone(e.target.value)}}
        />
        <br />
        <input 
            className= "form-control" 
            type ="url"   
            placeholder = "Pagina web" 
            value={web}
            required
            onChange ={(e)=>{setWeb(e.target.value)}}
        />
        <br />
        <button type = "submit" className="btn btn-success">Crear</button>
        </div>
    </form>
    </div>
    <Footer />           
    </>
    );
}

export default Alta
