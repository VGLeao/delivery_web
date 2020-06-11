import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';


const cartStyles = makeStyles ((theme) => ({
    root: {
        display: 'flex',
        height: '100vh',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '-3px 0 10px -5px rgba(0, 0, 0, 0.3)',
        
    },
    '@media (max-width: 1248px)': {
        root: {
            display: 'none'
        }
    },
    test: {
        position: 'sticky'
    }
}));

const Cart = () => {
    const classes = cartStyles();

    return (
        <Container className={classes.root}>
            <Typography className={classes.test}>
                {'test cart'}
            </Typography>
        </Container>
        
    )
};

export default Cart;