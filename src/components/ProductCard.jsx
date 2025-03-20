import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ maxWidth: 345, margin: 2, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="h6">{product.title}</Typography>
          <Typography variant="body2">{product.description}</Typography>
          <Typography variant="h5">{product.price} Руб</Typography>
          <Typography variant="h5">{product.rating}🌟</Typography>
          <Button
            variant="contained"
            onClick={() => dispatch(addToCart(product))}
            sx={{ 
              mt: 2, 
              backgroundColor: 'rgb(237, 195, 105)'  
            }}
          >
            Добавить в корзину
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;