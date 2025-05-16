import React, { useContext } from "react";
import {
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    Stack,
    Paper,
    IconButton,
    Divider,
    CardMedia,
    Box,
} from "@mui/material";
import { CartContext, CartItem } from "../components/context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";

interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
    image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89.99,
    description: "Crystal-clear sound with noise cancellation.",
    image: "https://images.unsplash.com/photo-1585386959984-a4155228fcd1?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    description: "Track your health and stay connected.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Backpack",
    price: 49.99,
    description: "Durable and stylish for everyday use.",
    image: "https://images.unsplash.com/photo-1598032892322-b0c7a9d2efc9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 79.99,
    description: "Comfort and performance in every step.",
    image: "https://images.unsplash.com/photo-1600180758890-6c19f3565b2e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 39.99,
    description: "Loud, portable, and long-lasting battery.",
    image: "https://images.unsplash.com/photo-1580894894513-5139daef3465?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 19.99,
    description: "Protect your eyes in style.",
    image: "https://images.unsplash.com/photo-1598966736213-d5c2fa2356c6?auto=format&fit=crop&w=400&q=80",
  },
];


const Store: React.FC = () => {
    const cartContext = useContext(CartContext);

    if (!cartContext) {
        throw new Error("CartContext must be used within a CartProvider");
    }

    const { cartItems, addToCart, removeFromCart } = cartContext;

    const getTotalPrice = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <Stack spacing={4} sx={{ p: 3 }}>
            <Typography variant="h4" fontWeight="bold">
                🛍️ Store Products
            </Typography>

            <Box
                display="flex"
                flexWrap="wrap"
                gap={3}
                justifyContent="flex-start"
            >
                {products.map((product) => (
                    <Card
                        key={product.id}
                        sx={{
                            width: 280,
                            borderRadius: 3,
                            boxShadow: 3,
                            transition: "transform 0.3s",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: 6,
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="180"
                            image={product.image}
                            alt={product.name}
                            sx={{ objectFit: "cover" }}
                        />
                        <CardContent>
                            <Typography variant="h6" fontWeight="bold">
                                {product.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ mt: 1 }}>
                                ${product.price.toFixed(2)}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ px: 2, pb: 2 }}>
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>

            <Divider />

            <Typography variant="h4" fontWeight="bold">
                🛒 Shopping Cart
            </Typography>

            {cartItems.length === 0 ? (
                <Typography>Your cart is empty.</Typography>
            ) : (
                <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 2 }}>
                    <Stack spacing={2}>
                        {cartItems.map((item: CartItem) => (
                            <Stack
                                key={item.id}
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Typography>
                                    {item.name} x {item.quantity}
                                </Typography>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Typography fontWeight="medium">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </Typography>
                                    <IconButton
                                        size="small"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </Stack>
                            </Stack>
                        ))}
                        <Divider />
                        <Typography variant="h6" align="right">
                            Total: ${getTotalPrice().toFixed(2)}
                        </Typography>
                    </Stack>
                </Paper>
            )}
        </Stack>
    );
};

export default Store;
