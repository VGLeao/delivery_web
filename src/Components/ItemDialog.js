import React from 'react';
import { connect, useStore } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import FadedDialog from './FadedDialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fade from '@material-ui/core/Fade';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { addToCartClick } from '../actions';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        // backgroundColor: theme.palette.background.paper,
        // border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    shoppingCartIconStyles: {
        marginRight: '10px'
    }
}));

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCartClick: (item) => dispatch(addToCartClick(item))
    }
};


function ItemDialog({ open, handleClose, item }) {

    const { name, longDescription } = item

    const classes = useStyles();

    const handleClick = (item) => {
        item.quantity = 0;
        store.dispatch(addToCartClick(item));
        handleClose()
    }
    
    const store = useStore()

    return (
        <FadedDialog
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={open}
        >
            <DialogTitle id="simple-dialog-title">{name}</DialogTitle>
            <Fade in={open}>
                <div className={classes.paper}>
                    <Typography>{longDescription}</Typography>
                    <Button variant="contained" color="primary" onClick={() => handleClick(item)}>
                        <ShoppingCartIcon
                            className={classes.shoppingCartIconStyles}
                        ></ShoppingCartIcon>
                        {"Adicionar ao Carrinho"}
                    </Button>
                </div>
            </Fade>
        </FadedDialog>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDialog);