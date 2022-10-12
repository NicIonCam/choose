import React, { useState } from 'react';
import { useEffect } from 'react';
import { Spinner, Box, Wrap } from '@chakra-ui/react';
import Card from './Card';
import { getDataJson } from './Api';
import { Product } from './models';
import './App.scss';

const App = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [products, setProducts] = useState<Product[]>([]);
    let interval: any;

    useEffect(() => {
        interval = setInterval(() => {
            getDataJson()
            .then((response) => {
                const responseProducts = response.data;
                if (products) {
                    if (products.length !== responseProducts.length) {
                        setProducts(responseProducts);
                        setIsLoading(false);
                    }
                    return;
                }
                setIsLoading(false);
                setProducts(responseProducts);
            })
            .catch(error => {
                throw new Error(error);
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [products])

    if (isLoading) {
        return <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
            <Spinner />
        </Box>
    }

    return (
        <Box bg='lightgrey' width="100%" height="100%">
            <Wrap spacing="20px" align='center' justify='center'>
                {products.map( product => {
                return (
                    <Card key={product.id} product={product}></Card>
                )
            })}
            </Wrap>
        </Box>
    )
}

export default App;