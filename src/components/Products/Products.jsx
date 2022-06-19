import React from "react";
import Grid from '@material-ui/core'

const products = [
    { id: 1, name: 'Sticker', description: 'Adhesive picture.', price: '$3'},
    { id: 2, name: 'Plant Sticker', description: 'Floral Adhesive picture.', price: '$4'}
]


const Products = () => {
    
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={12} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
}

export default Products;