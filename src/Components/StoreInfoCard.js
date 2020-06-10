import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const storeInfoCardStyles = makeStyles((theme) => ({
    root: {
        borderBottom: '1px solid #B0BEC5',
        marginBottom: '20px'
    },    
    storeImg: {
        maxWidth: '700px',
    },
    '@media (max-width: 800px)': {
        storeImg: {
            width: '500px'
        }
    },
    storeDescription: {
        textAlign: 'left',
        marginBottom: '20px'
    }
}));

const StoreInfoCard = ({ stores }) => {
    const classes = storeInfoCardStyles();

    return (
        <div className={classes.root}>
            <div>
                <img className={classes.storeImg} src={require('../Images/FeaturedStoreImg.png')} alt='featured store'></img>
            </div>
            <Typography className={classes.storeDescription}>
                {stores[1].description}
            </Typography>
        </div>
    )
}

export default StoreInfoCard;