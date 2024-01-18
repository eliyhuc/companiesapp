import React from 'react'
import { FaMale, FaFemale } from "react-icons/fa";
const Company = ({company}) => {
  
  console.log(company);

  return (
    <div className='row box'>
      <div className='col-lg-4'>
        <h3>{company.name}</h3>
        <p>{company.email}</p>
        <p><b>{company.country}</b></p>
      </div>
      <div className='col-lg-3'>
        <h5>CONTACT MAN {company.contact.gender === 'female' ? <FaFemale size={20} color='#EB8A90' /> : <FaMale size={20} color='#48B8D0' />}</h5>
        <p>
          <b>Name: </b> {company.contact.firstname} {company.contact.lastname}<br/>
          <b>Email: </b> {company.contact.firstname} {company.contact.email}<br/>
          <b>Phone: </b> {company.contact.firstname} {company.contact.phone}
        </p>
      </div>
      <div className='col-lg-5'>
      <h5>ADDRESSES</h5>
      <ul>
      {
        company.addresses.map(add => (<li><b>{add.city}</b> - {add.street}</li>))
      }
      </ul>
      </div>
    </div>
  )
}

export default Company