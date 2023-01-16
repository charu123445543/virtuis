import React, { useState, useEffect } from 'react'
import axios from "axios";
const Table = ( props ) => {
    console.log( "inside yable props os", props );


    const [ user, setUser ] = useState( [] );
    const LoadUser = async () => {
        const result = await axios.get( "http://localhost/phpbackend/view.php" );
        setUser( result.data.phpresult );
        console.log( "data from php", result.data.phpresult );
    }
    useEffect( () => {
        // LoadUser();
    }, [] );

    return (
        <div  >
            <table className="table table-bordered mt-5 ">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Type</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Company</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Message</th>
                        {/* <th scope="col">Attaced Files</th> */}
                        <th scope="col">Status</th>
                        <th scope="col">Created</th>
                        <th scope="col">Web Url</th>
                        <th scope="col">Talent Required</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Country</th>
                        <th scope="col">City</th>
                        <th scope="col">Address</th>
                        <th scope="col">Poll</th>
                        <th scope="col">Revenues</th>
                        <th scope="col">seekedInformation</th>
                        <th scope="col">First Goal</th>
                        <th scope="col">Second Goal</th>
                        <th scope="col">Third Goal</th>
                        <th scope="col">Time to Begin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map( ( elm ) => {
                            return (
                                <>
                                    <tr>

                                        <td>{elm.id}</td>
                                        <td>{elm.type}</td>
                                        <td>{elm.full_name}</td>
                                        <td>{elm.email}</td>
                                        <td>{elm.mobile}</td>
                                        <td>{elm.company}</td>
                                        <td>{elm.designation}</td>
                                        <td>{elm.message}</td>
                                        {/* <td>{elm.attached_file}</td> */}
                                        <td>{elm.status}</td>
                                        <td>{elm.created}</td>
                                        <td>{elm.webURL}</td>
                                        <td>{elm.talentRequired}</td>
                                        <td>{elm.subject}</td>
                                        <td>{elm.subject}</td>
                                        <td>{elm.subject}</td>
                                        <td>{elm.address}</td>
                                        <td>{elm.address}</td>
                                        <td>{elm.address}</td>
                                        <td>{elm.seekedInformation}</td>
                                        <td>{elm.seekedInformation}</td>
                                        <td>{elm.secondGoal}</td>
                                        <td>{elm.thirdGoal}</td>
                                        <td>{elm.timeToBegin}</td>

                                    </tr>
                                </>
                            );
                        } )
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Table
