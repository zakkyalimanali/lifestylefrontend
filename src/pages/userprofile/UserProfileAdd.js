import React , {useState , useEffect} from 'react'
import UserProfileAPI from '../../api/UserProfileAPI'
import {Button, Form } from "react-bootstrap";
import {useNavigate } from 'react-router-dom';

function Userprofileadd() {
  const [users , setUsers] = useState([])
  const [full_name , setFullName] = useState('')
  const [date_of_birth , setDateOfBirth] = useState('')
  const [smart_card_number , setSmartCardNumber] = useState('')
  const [address , setAddress] = useState('')
  const navigate =useNavigate()

  useEffect(() => {
    fetchUsers()
  },[])

  const fetchUsers = () => {
    UserProfileAPI.get('/')
    .then((res) => {
      setUsers(res.data)
    })
    .catch(console.log)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let item = {
      full_name,
      date_of_birth,
      smart_card_number,
      address,
    }
    navigate(-1)
    UserProfileAPI.post('/', item).then(() => fetchUsers())
    .catch((error) => {
      console.log("Error: ", error);
    })
  }

  return (
      <div className="brandpage">
      <div className="container pb-5">
            <div className="row">
              <div className= "col-md-4"></div>
              <div className="col-md-4 ">
                <h3 className="float-left mt-3">Add Person</h3>
                
                <Form onSubmit={onSubmit} 
                className="mt-4">
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      value={full_name}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </Form.Group>
                  
                 
                 
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Date of Birth"
                      value={date_of_birth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Smart Card Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Smart Card Number"
                      value={smart_card_number}
                      onChange={(e) => setSmartCardNumber(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Group>
                
                  
                  <div className="mt-3 float-right">
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={onSubmit}
                      className="mx-2"
                    >
                      Save
                    </Button>
                  </div>
                </Form>    
              </div>            
            </div>
          </div>
          </div>
  )
}

export default Userprofileadd
