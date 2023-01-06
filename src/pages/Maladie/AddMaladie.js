import React from 'react'
import MaladieServices from '../../services/MaladieServices';

function AddMaladie() {


    const [nom, setNom] = React.useState("")

    let [openAdd, setOpenAdd] = React.useState();


    

    const makeid = (length) => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const addMaladie = (e) =>{
        e.preventDefault()
        const maladie = {nom: nom, code: makeid(20)}
        MaladieServices.addMaladie(maladie)
        console.log(maladie)

        setNom("")

        setOpenAdd(openAdd?false:true)
    }




    


    


  return (
    <>
    <div className={`bs-toast toast toast-placement-ex m-2 bg-success top-0 end-0 fade ${openAdd?"show":"hide"}`} role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
        <div className="toast-header">
          <i className="bx bx-bell me-2"></i>
          <div className="me-auto fw-semibold">Item created</div>
          <small>now</small>
          <button type="button" className="btn-close" data-bs-dismiss="toast" onClick={(e)=>setOpenAdd(openAdd?false:true)} aria-label="Close"></button>
        </div>
        <div className="toast-body">This item was added successfully in the database.</div>
      </div>
    <h1 className="h3 mb-3"><strong>Pages/</strong> Add Disease</h1>

        <div className="card">
            <div className="card-header">
                <h5 className="card-title mb-0">Disease form</h5>
            </div>
        <div className="card-body">
    							

        <form>


        <div className="form-group mb-3">
            <label className="form-label" for="inputAddress">Nom</label>
            <input type="text" className="form-control" name='nom' id="nom" placeholder="Disease Name" value={nom} onChange={(e)=>setNom(e.target.value)}/>
        </div>
        <div className='mt-4'>
            <div className='col-2 float-end'>
            <button type="submit" className="btn btn-primary me-2" onClick={(e)=>addMaladie(e)}>Add</button>
            <button type="reset" className="btn btn-secondary">Cancel</button>
            </div>
        </div>
        </form>
        </div>
							</div>

    </>
  )
}

export default AddMaladie