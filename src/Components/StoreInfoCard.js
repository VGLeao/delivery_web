import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const storeInfoCardStyles = makeStyles((theme) => ({
    root: {
        borderBottom: '1px solid #d50000',
        marginBottom: '20px',
        marginTop: '20px'
        
    },    
    storeImg: {
        width: '100%',
        maxHeight: '300px',
        objectFit: 'cover'
    },
    
    storeDescription: {
        textAlign: 'left',
        marginBottom: '20px'
    },
    storeGroup: {
        textAlign: 'left',
        marginBottom: '20px'
    }
}));

const StoreInfoCard = ({ stores }) => {
    const classes = storeInfoCardStyles();

    return (
        <div className={classes.root}>
            <div>
                <img className={classes.storeImg} src={'https://images.pexels.com/photos/46240/drill-milling-milling-machine-cutting-tools-46240.jpeg'} alt='featured store'></img>
            </div>
            <Typography variant='h5' align='left'>
                {stores[0].name}
            </Typography>
            <Typography className={classes.storeDescription} variant='body1'>
                {stores[0].description}
            </Typography>
            <Typography className={classes.storeGroup} variant='body2' align='left'>
                {stores[0].group.name}
            </Typography>
        </div>
    )
}

export default StoreInfoCard;