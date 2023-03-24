import React from "react";
import { CardActionArea } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { CardContainer, ProductCardContent } from "./styled";
import ProductDetails from "../CardProductsDetail/products-detail";

const productsCards = (props) => {

    return (
        <CardContainer>
            <CardActionArea>
                <CardMedia
                    component={"img"}
                    alt={props.title}
                    height={"200px"}
                    image={props.image[0].url}
                    title={props.title}
                    price={props.price}
                    description={props.description}
                    total_stock={props.total_stock}
                />
                <ProductCardContent >
                    <Typography >{props.title}</Typography>
                    <Typography >R$: {props.price.toFixed(2)}</Typography>
                </ProductCardContent>
            </CardActionArea>
            <ProductDetails
                component={"img"}
                alt={props.title}
                height={"200px"}
                image={props.image[0].url}
                title={props.title}
                price={props.price}
                description={props.description}
                total_stock={props.total_stock}>
            </ProductDetails>
        </CardContainer>

    );
};

export default productsCards;
