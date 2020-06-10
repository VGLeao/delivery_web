import React from 'react';
import './App.css';
import './Components/PaperCard';
import PaperCardList from './Components/PaperCardList';
import items from './Data/items';
import stores from './Data/stores';
import Container from '@material-ui/core/Container';
import SearchAppBar from './Components/Navbar';
import StoreInfoCard from './Components/StoreInfoCard';


function App() {
  return (
    
    <div className="App">
      <SearchAppBar></SearchAppBar>
      <Container style={{maxWidth: '80%'}}>
      <StoreInfoCard stores={stores}></StoreInfoCard>
      <PaperCardList items={items}></PaperCardList>
      </Container>
    </div>
    
  );
}

export default App;
