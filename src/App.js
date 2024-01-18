import axios from 'axios';
import React, {useState} from 'react'
import { SiHeadlessui } from "react-icons/si";
import Company from './Company';

const App = () => {

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const zodiac = [
    {value: '10', title: '10'},
    {value: '20', title: '20'},
    {value: '30', title: '30'},
    {value: '40', title: '40'},
    {value: '50', title: '50'},
    {value: '60', title: '60'},
    {value: '70', title: '70'},
    {value: '80', title: '80'},
    {value: '90', title: '90'},
    {value: '100', title: '100'},
  ]

  const loadData = async() => {
    setIsLoading(true)
    try {
      if(search !== ""){
        await axios.get(`https://fakerapi.it/api/v1/companies?_quantity=${search}`)
        .then(res => {
          //console.log(res.data);
          setData(res.data.data)
          setIsLoading(false)
        })
      }
    } catch (error) {
      console.log('ERROR: ' + error.message);
      setIsLoading(false)
    }
  }

  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 paddingtb15'>
          <h1 className='logo-green'><SiHeadlessui style={{marginTop:-10}} color="#8AE1FC" />Companies<span className='logo-white'>App</span></h1>
        </div>
        <div className='col-lg-4 paddingtb45'>

          <select className='form-control' onChange={(e) => {setSearch(e.target.value)}}>
            <option value=''>Select...</option>
            {
              zodiac.map((zod,index) => (
                <option key={index} value={zod.value}>{zod.title}</option>
              ))
            }
          </select>

        </div>
        <div className='col-lg-2 paddingtb45' style={{paddingLeft:10}}>
            {
              isLoading ? (<>
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              </>) : (
                <>
                <button className='btn btn-info' onClick={loadData}>
                  Luckey Me
                </button>
                </>
              )
            }
        </div>
      </div>

      <div className='row'>
        <div className='col.lg-12 paddingtb45'>
          {
            isLoading ? (<>
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            </>) : (<>
              {
                data.length > 0 && <>
                {
                  data.map(company => <Company company={company} />)
                }
                </>
              }
            </>)
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default App