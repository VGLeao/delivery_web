import React from "react";
import PaperCard from "./PaperCard";
import { makeStyles } from "@material-ui/core";

const paperCardListStyles = makeStyles((theme) => ({
    paperCardList: {
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "left",
        margin: "auto",
    },
}));

const PaperCardList = ({ items }) => {
    const classes = paperCardListStyles();
    return (
        <div className={classes.paperCardList}>
            {items.map((item) => {
                return (
                    <PaperCard
                        key={item.id}
                        item={item}
                    />
                );
            })}
        </div>
    );
};

export default PaperCardList;
