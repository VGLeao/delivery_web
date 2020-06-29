import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ItemDialog from './ItemDialog';

const paperCardStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'left',
        width: '50%',
        // '& > *': {
        //     margin: theme.spacing(1),
        //     maxWidth: '100%',
        //     height: theme.spacing(16),
        // },
    },
    '@media (max-width: 800px)': {
        root: {
            width: '100%'
        }
    },
    paper: {
        padding: theme.spacing(1),
        margin: theme.spacing(1),
        width: '100%',
        border: '1px solid #BDBDBD',
        // backgroundColor: '#E8EAF6',
        '&:hover': {
            boxShadow: '0px 2px 4px -1px #BDBDBD, 0px 4px 5px 0px #BDBDBD, 0px 1px 10px 0px #BDBDBD',
            cursor: 'pointer'
        }
    },

    imageThumb: {
        maxWidth: 128,
        maxHeight: 128
    },
    itemThumb: {
        width: '100%',
        height: '100%'
    },
    itemName: {
        fontWeight: 600
    },
    hr: {
        border: 0,
        margin: 0,
        marginBottom: '5px',
        backgroundColor: '#d50000',
        height: 1,
        width: '100%'
    }

}));

const PaperCard = ({ item }) => {
    const { name, description, imageThumbURL, price } = item

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
            <Paper className={classes.paper} elevation={0} onClick={handleOpen}>
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
            <ItemDialog 
                open={open} 
                handleClose={handleClose} 
                handleOpen={handleOpen} name={name} 
                item={item}
            >
            </ItemDialog>

        </div>
    );
}

export default PaperCard;