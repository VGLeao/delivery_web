import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fade from "@material-ui/core/Fade";
import ItemDialog from "./ItemDialog";

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
}));

function FadedDialog({ open, handleClose, name, longDescription }) {
    const classes = useStyles();

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={open}
        >
            <DialogTitle id="simple-dialog-title">
                {name}
            </DialogTitle>
            <Fade in={open}>
                <div className={classes.paper}>
                    <ItemDialog name={name} longDescription={longDescription}></ItemDialog>
                </div>
            </Fade>
        </Dialog>
    );
}

export default FadedDialog;
