import React from 'react'
import Table from 'react-bootstrap/Table';

const Maps = () => {

//   const student = ["Anil","jaMsed","Jimmi","Asad"]
   const students = [
    {names :"anil",email:"jamshed",number:"0987666666666"},
    {names :"Peter",email:"jamshed",number:"777"},
    {names :"Guddo",email:"Jimmi",number:"777"},
    {names :"Guddo",email:"Jimmi",number:"777"},

   ]
  return (
    <div>
        <Table variant='black'>
            <tbody>
            <tr>
                
                <td>Name</td>
                <td>Email</td>
                <td>Name</td>

            </tr>
        {
        students.map((data,i)=>
        <tr key={i}>
            <td>{data.names}</td>
            <td>{data.email}</td>
            <td>{data.number}</td>

        </tr>
            
            
        )
        }
        </tbody>
        </Table>
      <h1>Maps Functions</h1>
    </div>
  )
}

export default Maps
