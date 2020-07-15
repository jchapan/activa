import React, { useState, useEffect } from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import TablaEmpresa from "../TablaEmpresa/TablaEmpresa";
import "./Home.css";

import axios from "axios";


function Home() {
  const URL = `https://directorioactiva.firebaseio.com/.json`;
  const [empresa, setEmpresa] = useState([]);
  const [filtroEmpresa, setFiltroEmpresa] = useState("");
  
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        let allEmpresa = response.data
        setEmpresa(allEmpresa);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [filtroEmpresa, empresa]);

  const giros = empresa.map((f)=>{
    return f.giro
  })

  const distinct = (value, index, self)=>{
    return self.indexOf(value) ===index
  }

  const listaGiros = giros.filter(distinct)
  
  


  return (
    <>
      <Header />
      <div className="container">
        {
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h3>Directirio Activa</h3>
                <br />
                <select
                  className="form-control col-4"
                  name="filtroEmpresa"
                  value={filtroEmpresa}
                  onChange={(e) => {
                    setFiltroEmpresa(e.target.value);
                  }}
                >
                  <option value="0">Selecciona un giro</option>
                  {
                    listaGiros.map((g)=>{
                      return (
                      <option value={g}>{g}</option>
                      )
                    })
                  }
                </select>
                <br />
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th scope="col-sm-4">Empresa</th>
                      <th scope="col-sm-1">Telefono</th>
                      <th scope="col-sm-1">Web</th>
                      <th scope="col-sm-1">Mail</th>
                      <th scope="col-sm-1">Direccion</th>
                      <th scope="col-sm-1">Giro</th>
                    </tr>
                    {empresa.map((e) => {
                      // if(filtroEmpresa = 0){
                      return (
                        <tr>
                          <TablaEmpresa
                            name={e.name}
                            address={e.address}
                            phone={e.phone}
                            web={e.web}
                            mail={e.mail}
                            maps={e.maps}
                            giro={e.giro}
                            key={e.name}
                          />
                        </tr>
                      );
                    // }
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        }
      </div>
      <Footer />
    </>
  );
}

export default Home;
