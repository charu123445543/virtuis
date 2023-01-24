import React from 'react'
import {
    Grid, GridItem
} from '@chakra-ui/react';
import Nav from './Nav';
import Navbar from './Navbar';
import MainTable from './MainTable';
const UpdatedHeader = () => {
    return (
        <>

            <Grid
                templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
                gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'150px 1fr'}
                h='100vh'
                // gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem pl='2' area={'header'}>
                    <Navbar />
                </GridItem>
                <GridItem area={'nav'}>
                    <Nav />
                </GridItem>
                <GridItem pl='2' area={'main'}>
                    <MainTable />
                </GridItem>
                <GridItem pl='2' bg='blue.300' area={'footer'}>
                    Footer
                </GridItem>
            </Grid>
        </>
    )
}

export default UpdatedHeader