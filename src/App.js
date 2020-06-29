import React from 'react';
import './App.css';
import './Components/PaperCard';
import PaperCardList from './Components/PaperCardList';
import items from './Data/items';
import stores from './Data/stores';
import Container from '@material-ui/core/Container';
import SearchAppBar from './Components/Navbar';
import StoreInfoCard from './Components/StoreInfoCard';
import Cart from './Components/Cart';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: red['A700'],
        },
    },
});


function App () {

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <SearchAppBar></SearchAppBar>
                <div style={{ display: 'flex' }}>
                    <Container className="container">
                        <StoreInfoCard stores={stores}></StoreInfoCard>
                        <PaperCardList items={items}></PaperCardList>
                    </Container>
                    <Cart></Cart>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
