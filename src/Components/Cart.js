import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { connect, useSelector } from "react-redux";

const cartStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: "100vh",
        width: "30%",
        alignItems: "center",
        boxShadow: "-3px 0 10px -5px rgba(0, 0, 0, 0.3)",
    },
    "@media (max-width: 1248px)": {
        root: {
            display: "none",
        },
    },
    cartItemStyles: {},
    cartContainerStyles: {
        display: 'block',
        textAlign: 'left'
    },
}));

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

const Cart = () => {
    const classes = cartStyles();
    const state = useSelector((state) => state);
    const uniqueCart = state.cart.filter(onlyUnique);

    return (
        <Container className={classes.root}>
            <div className={classes.cartContainerStyles}>
                {uniqueCart.map((item, i) => {
                    return (
                        <Typography className={classes.cartItemStyles} key={i}>
                            {item.name}
                        </Typography>
                    );
                })}
            </div>
        </Container>
    );
};

export default connect()(Cart);
