import React from 'react';
import PaperCard from './PaperCard';
import { makeStyles } from '@material-ui/core';


const paperCardListStyles = makeStyles((theme) => ({
    
    paperCardList: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'left',
        margin: 'auto'
    }
}));

const PaperCardList = ({ items }) => {
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
                                longDescription = {items[i].longDescription}
                                imageThumbURL = {items[i].imageThumbURL}
                                price = {items[i].price}
                                />
                                
                        );
                    })  
                }
            </div>
    );
}

export default PaperCardList;