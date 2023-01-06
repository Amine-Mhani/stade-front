import React from 'react'

function AddPatient() {
  return (
    <>
    <h1 className="h3 mb-3"><strong>Pages/</strong> Add Patient</h1>

        <div className="card">
            <div className="card-header">
                <h5 className="card-title mb-0">Patient form</h5>
            </div>
        <div className="card-body">
    							

        <form>
        <div className="row mb-2">
            <div className="form-group col-md-6">
            <label className="form-label" for="inputEmail4">First Name</label>
            <input type="text" className="form-control"  placeholder="First name"/>
            </div>
            <div className="form-group col-md-6">
            <label className="form-label" for="inputPassword4">Last Name</label>
            <input type="text" className="form-control"  placeholder="Last name"/>
            </div>
        </div>
        <div className="row mb-2">
            <div className="form-group col-md-6">
            <label className="form-label" for="inputCity">Phone Number</label>
            <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="form-group col-md-4">
            <label className="form-label" for="inputState">Birthdate</label>
            <input type="date" className="form-control" id="inputZip"/>
            </div>
            <div className="form-group col-md-2">
            <label className="form-label" for="inputZip">Gender</label>
            
            <select className="form-control">
                <option selected>Choose...</option>
                <option>Male</option>
                <option>Female</option>
            </select>
            </div>
        </div>
        <div className="form-group mb-3">
            <label className="form-label" for="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
        </div>
        <div className="row mb-2">
            <div className="form-group col-md-3">
            <label className="form-label" for="inputCity">Height</label>
            <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="form-group col-md-3">
            <label className="form-label" for="inputCity">Weight</label>
            <input type="text" className="form-control" id="inputCity"/>					
            </div>
            <div className="form-group col-md-6">
            <label className="form-label" for="inputZip">Picture</label>
            <input type="file" className="form-control" id="inputZip"/>
            </div>
        </div>
        <div className='mt-4'>
            <div className='col-2 float-end'>
            <button type="submit" className="btn btn-primary me-2">Add</button>
            <button type="reset" className="btn btn-secondary">Cancel</button>
            </div>
        </div>
        </form>
        </div>
							</div>

    </>
  )
}

export default AddPatient