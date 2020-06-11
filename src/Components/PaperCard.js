import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FadedModal from './FadedModal';

const paperCardStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'left',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(50),
            height: theme.spacing(16),
        },
    },
    paper: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        maxWidth: 300,
        backgroundColor: '#E8EAF6',
        '&:hover': {
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
            cursor: 'pointer'
        }
    },

    imageThumb: {
        width: 128,
        height: 128
    },
    itemThumb: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    itemName: {
        fontWeight: 600
    },
    hr: {
        border: 0,
        margin: 0,
        marginBottom: '5px',
        backgroundColor: '#2980b9',
        height: 1,
        width: '100%'
    }

}));

const PaperCard = ({ name, description, imageThumbURL, price, modal }) => {
    const classes = paperCardStyles();

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={1} onClick={handleOpen}>
                <Grid container direction="row" style={{ height: "100%" }}>
                    <Grid container item xs={4} className={classes.imageThumb} alignItems="center" justify="center">
                        <img className={classes.itemThumb} src={imageThumbURL} alt={name}></img>
                    </Grid>
                    <Grid container item xs={8} justify="flex-start">
                        <Grid item style={{ width: "100%" }}>
                            <Typography className={classes.itemName} style={{ marginLeft: '10px' }}>
                                {name}
                            </Typography>
                            <hr className={classes.hr}></hr>
                            <Typography style={{ marginLeft: '10px' }}>
                                {description}
                            </Typography>
                        </Grid>
                        <Grid item container justify="flex-end" alignItems="flex-end">
                            {formatter.format(price)}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            <FadedModal open={open} handleClose={handleClose} handleOpen={handleOpen}>
            </FadedModal>

        </div>
    );
}

export default PaperCard;