import React from 'react'

function TablaEmpresa(props) {
    const mail =`mailto:${props.mail}`
    const tel =`tel:${props.phone}`
    return (
        <>
            <th scope="col-sm-4">{props.name}</th>
            <th scope="col-sm-1"><a href={tel}>{props.phone}</a></th>
            <th scope="col-sm-1"><a href={props.web} target="blank">{props.web}</a></th>
            <th scope="col-sm-1"><a href={mail} target="blank">{props.mail}</a></th>
            <th scope="col-sm-1"><a href={props.maps} target="blank">{props.address}</a></th>
            <th scope="col-sm-1">{props.giro}</th>
            
        </>
    )
}

export default TablaEmpresa

