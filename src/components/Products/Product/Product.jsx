import React from 'react'
import {Card, CardMedia, CardContent, Cardactions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const Product = ({ product }) => {
  return (
    <Card className={classes.root}>
        <CardMedia className={classes.Media} image='' title={product.name} />
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="h5">
                    {product.price}
                </Typography>
            </div>
            <Typography variant="h2" color="textSecondary">
                    {product.description}
                </Typography>
        </CardContent>
        <Cardactions disableSpacing className={classes.Cardactions}
            
    </Card>
  )
}

export default Product