import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';
import Table from './Table';
import Home from './Home';

// import ReactDOM from 'react-dom/client';

const Header = () => {

    // 
    const [ cat, setCat ] = useState( [] );
    const LoadUser = async () => {
        const result = await axios.get( "http://localhost/phpbackend/allcat.php" );
        setCat( result.data.allcat );
        // console.log( "data from php", result.data.allcat );
    }
    useEffect( () => {
        LoadUser();
    }, [] );
    //


    const [ sendcat, setsendCat ] = useState( [] );
    const navigate = useNavigate()


    const mycat = async ( type ) => {
        console.log( "inside send cat an cat is ", type );
        //   
        const result = await axios.get( `http://localhost/phpbackend/view.php`,
            {
                params:
                    { cat: type }
            } );
        setsendCat( result.data.phpresult );
        console.log( "inside my cat and data from api is", result.data.phpresult );

        // const props = result.data.phpresult;
        // navigate( '/table' )
        /////////////////////////////////////////////////////////////////
        // return (
        //     <div  >
        //         <table className="table table-bordered mt-5 ">
        //             <thead>
        //                 <tr>
        //                     <th scope="col">Id</th>
        //                     <th scope="col">Type</th>
        //                     <th scope="col">Full Name</th>
        //                     <th scope="col">Email</th>
        //                     <th scope="col">Mobile</th>
        //                     <th scope="col">Company</th>
        //                     <th scope="col">Designation</th>
        //                     <th scope="col">Message</th>
        //                     {/* <th scope="col">Attaced Files</th> */}
        //                     <th scope="col">Status</th>
        //                     <th scope="col">Created</th>
        //                     <th scope="col">Web Url</th>
        //                     <th scope="col">Talent Required</th>
        //                     <th scope="col">Subject</th>
        //                     <th scope="col">Country</th>
        //                     <th scope="col">City</th>
        //                     <th scope="col">Address</th>
        //                     <th scope="col">Poll</th>
        //                     <th scope="col">Revenues</th>
        //                     <th scope="col">seekedInformation</th>
        //                     <th scope="col">First Goal</th>
        //                     <th scope="col">Second Goal</th>
        //                     <th scope="col">Third Goal</th>
        //                     <th scope="col">Time to Begin</th>
        //                 </tr>
        //             </thead>

        //         </table>
        //     </div>
        // )
        /////////////////////////////////////////////////////////////////

    }

    useEffect( () => {
        mycat();

    }, [] );


    const callcomp = ( type ) => {
        console.log( "insde callcomp" );
        navigate( '/table' )
        return (
            <Table />
        );

    }
    // useEffect( () => {
    //     callcomp();

    // }, [] );


    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button pos={'fixed'}
                top={'4'}
                zIndex={"overlay"}
                left={'4'}
                p={'0'}
                w={'10'}
                h={'10'}
                borderRadius={'full'}
                colorScheme="purple"
                onClick={onOpen}
            >
                <BiMenuAltLeft size={'20'} />
            </Button>
            <Drawer isOpen={isOpen} placement='left'
                onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>My Virtuos</DrawerHeader>
                    <DrawerBody>
                        {
                            cat.map( ( elm, key ) => {
                                {/* console.log( "elm is", elm ); */ }
                                return ( <>
                                    <VStack alignItems={'flex-start'}>
                                        {/* onClick={() => { mycat( elm.type ) }} */}
                                        <Button colorScheme="purple" onClick={onClose} onClick={() => { mycat( elm.type ) }}
                                            variant={'ghost'}>
                                            <Link > {elm.type}</Link>
                                            {/* <Link to={'/table'}> {elm.type}</Link> */}
                                        </Button>


                                    </VStack>
                                </> );
                            } )
                        }
                        <HStack pos={'absolute'}
                            bottom={'10'}
                            left={'0'}
                            // bgColor={"red"}
                            w={'full'}
                            justifyContent={'space-evenly'}
                        >
                            {/* <Button colorScheme="purple">
                                <Link to={'/login'}>Log In</Link>
                            </Button>
                            <Button
                                onClick={onClose}
                                colorScheme={'purple'}
                                variant={'outline'}
                            >
                                <Link to={'/signup'}>Sign Up</Link>
                            </Button> */}
                        </HStack>
                    </DrawerBody>

                </DrawerContent>

            </Drawer>



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
                        sendcat?.map( ( elm ) => {
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


        </>
    )
}

export default Header
