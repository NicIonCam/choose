import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons'
import { Product } from './models';

type Props = {
    key: number,
    product: Product,
}

const Card = (props: Props) => {
    const { images, brand, description, title, category, rating } = props.product;
    return (
        <Box maxW='xs' borderWidth='1px' borderRadius='lg' overflow='hidden' background="white">
          <Image maxHeight="200px" src={images[0]}/>
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
              >
                {`${category} ${brand}`}
              </Box>
            </Box>
    
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
              {title}
            </Box>
    
            <Box>
              {description}
            </Box>
    
            <Box display='flex' mt='2' alignItems='center'>
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < Math.round(rating) ? 'teal.500' : 'gray.300'}
                  />
                ))}
              <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                {Math.round(rating)} stars
              </Box>
            </Box>
          </Box>
        </Box>
    )
}

export default Card;