import React from 'react'
import { Table } from 'react-bootstrap'

const NstedARaays = () => {

    const students = [
        {
            names: "anil", email: "jamshed", Adress: [
                { hm: "10", city: "karaci", Cou: "pakistan" }
            ]
        },
        {
            names: "Peter", email: "jamshed", Adress: [
                { hm: "1", city: "karaci", Cou: "pakistan" }
            ]
        },
        {
            names: "Guddo", email: "Jimmi", Adress: [
                { hm: "13", city: "karai", Cou: "pakistan" }
            ]
        },
        {
            names: "Guddo", email: "Jimmi", Adress: [
                { hm: "16", city: " karaci", Cou: " pakistan" }
            ]
        },

    ]




    return (
        <div>
            <h2>
                Hello NEsted Arrays

                <Table variant='dark' striped>
                    <tbody>
                        <tr>
                            <td>S.N</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Adress</td>

                        </tr>
                        {
                            students.map((data, i) => 
                                <tr key={i+1}>
                                    <td>{i}</td>
                                    <td>{data.names}</td>
                                    <td>{data.email}</td>
                                   
                                  
                                    <td>
                                    <Table variant='dark' striped>
                                        <tbody>
                                        {
                                    data.Adress.map((items,i)=>
                                        <tr key={i}>
                                            <td>{items.hm}</td>
                                            <td>{items.city}</td>
                                            <td>{items.Cou}</td>

                                        </tr>
                                    )
                                        }</tbody>
                                         </Table>
                                        </td>
                                        
                                       

                                </tr>
                            )}
                        
                    </tbody>
                </Table>
            </h2>
        </div>
    )
}

export default NstedARaays
