import React from 'react';
import PaperCard from './PaperCard';
import { makeStyles } from '@material-ui/core';


const paperCardListStyles = makeStyles((theme) => ({
    
    paperCardList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 300px)',
        width: '100%',
        justifyContent: 'center'
        
    }
}));

const PaperCardList = ({ items, modal }) => {
    const classes = paperCardListStyles();

    return (
            <div className = {classes.paperCardList}>
                {
                    items.map((item, i) => {
                        return (

                                <PaperCard 
                                key = {items[i].id}
                                name = {items[i].name} 
                                description = {items[i].description} 
                                imageThumbURL = {items[i].imageThumbURL}
                                price = {items[i].price}
                                modal = {modal}
                                />
                                
                        );
                    })  
                }
            </div>
    );
}

export default PaperCardList;