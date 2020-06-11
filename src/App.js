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
import FadedModal from './Components/FadedModal';


function App() {
    return (

        <div className="App">
            <SearchAppBar></SearchAppBar>
            <div style={{ display: 'flex' }}>
                <Container className="container">
                    <StoreInfoCard stores={stores}></StoreInfoCard>
                    <PaperCardList items={items} modal={FadedModal}></PaperCardList>
                </Container>
                <Cart></Cart>
            </div>
        </div>

    );
}

export default App;
