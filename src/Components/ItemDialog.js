import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    shoppingCartIconStyles: {
        marginRight: '10px'
    }
}));

function ItemDialog ({ name, longDescription }) {
    const classes = useStyles();

    return (
        <div>
            <Typography>
                {longDescription}
            </Typography>
            <Button variant='contained' color='primary'>
                <ShoppingCartIcon className={classes.shoppingCartIconStyles}></ShoppingCartIcon>
                {'Adicionar ao carrinho'}
            </Button>
        </div>
    );
}

export default ItemDialog;