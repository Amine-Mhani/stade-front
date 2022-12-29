import React from 'react'
import PatientService from '../../services/PatientService'
import { useParams } from 'react-router-dom'
import { render } from '@testing-library/react'

function Detections() {

    const {id} = useParams()

  const [patient, setPatient] = React.useState({})
  const [maladies, setMaladies] = React.useState([{nom: "", code: "", id: ""}])
  const [detections, setDetection] = React.useState([{code: "", date: "", stade: "", description: ""}])


  const getPatient = () =>{
    return PatientService.getPatientById(id)
  }

  React.useEffect(()=>{
    getPatient().then((res)=>{
      setPatient(res.data)
      setMaladies(res.data.maladies)
      setDetection(res.data.detections)

      console.log(patient)
      console.log(maladies)
    })
  }, [])

  return (
    <>
<h1 class="h3 mb-3"><strong>Detections</strong></h1>
       <div class="row">
                <div class="col-xl-12 col-xxl-5 d-flex">
                    <div class="w-100">
                        <div class="row">
                        {detections.map((detection) => (
                            <div class="card">
                           
                                <div class="card-body">
                                    <div class="row">
                                    
                                    
                                    <div class="col mt-0">
                                                <h5 class="card-title">{detection.code}</h5>
                                            </div>   
                                    </div>
                                    
                                    <h1 class="mt-1 mb-3">{detection.stade.level}</h1>
                                    <p className='text-muted'> {detection.description}</p>
                                    
                                </div>
                                
                            </div>
                            
                        
                        ) )}
                        
                            
                            
                                
                        </div>
                    </div>
                </div>

                
            </div>
</>
  )
}

export default Detections