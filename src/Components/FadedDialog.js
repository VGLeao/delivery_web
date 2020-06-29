import React from "react";
import Dialog from "@material-ui/core/Dialog";

const FadedDialog = ({ open, onClose: handleClose, handleOpen, children }) => (
    <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
    >
        {children}
    </Dialog>
);

export default FadedDialog;
