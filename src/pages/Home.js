import React from 'react'

export default function Home() {
  return (
    <div style={{padding: 80}}>
    <div className="card-group">
        <div className="card bg-warning text-light m-2 border-warning rounded">
            <div className="card-body">
                <h3 className="card-title">Refill your phone</h3>
                <p className="card-text">Texte de la carte.</p>
                <a href="/Phone-Internet/phone" type="button" className="btn btn-dark">Pay</a>
            </div>
        </div>
        <div className="card bg-secondary text-light m-2 border-secondary rounded">
            <div className="card-body">
                <h3 className="card-title">Pay your Internet</h3>
                <p className="card-text">Texte de la carte.</p>
                <a href="/Phone-Internet/internet" type="button" className="btn btn-dark">Pay</a>
            </div>
        </div>
    </div>


</div>
  )
}
