import React from 'react'
import { useParams } from 'react-router-dom'
import { firebase } from './firebase'
import ButtonReturn from './ButtonReturn'


const TableStatus = (index) => {

    const {id} = useParams()
    //console.log(id)


    
    const[dataTable, setDataTable]= React.useState([])

    React.useEffect(() => {
        const db = firebase.firestore()
        var docRef = db.collection("tables").doc(id);

        docRef.get().then(function(doc) {
            if (doc.exists) {
               console.log("Document data:", doc.data());
                setDataTable(doc.data())
                console.log(setDataTable)
               
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });



      
   
     }, [])


    return (

        
        <div>
        
        {
       
            <div 
            key={index}>
           
           <h1>Mesa: <span className="badge badge-dark">{dataTable.number}</span></h1>
           <h4>Cliente: <span className="badge badge-dark">{dataTable.client}</span></h4>
           <h4>Meser@: <span className="badge badge-dark">{dataTable.employ}</span></h4>
           <h4>Orden: <span className="badge badge-dark">{dataTable.orden}</span></h4>
           <h4>Estatus: <span className="badge badge-dark">{dataTable.status}</span></h4>
           <h4>Total: <span className="badge badge-dark">{dataTable.price}</span></h4>
        
             </div>
 
}


            <button className="btn btn-danger">Agregar algo a la orden</button>
             <button className="btn btn-danger">Cerrar mesa</button>
             <button className="btn btn-danger">Cuenta</button>


             <ButtonReturn
            ruta = "/roles/piso"
            btnStyles= "btn btn-warning"
            text = "Ver Mesas"/>
        </div>
    )
}

export default TableStatus