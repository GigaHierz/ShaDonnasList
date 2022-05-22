import React from 'react';
import logo from './logo.svg';
import '../styles/reviewcard.css';

//import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

export default function ReviewCard() {
  return (
    <div className='reviewcard-container'>
      <h2 className="rating">RATING</h2>
      <p className="description">description</p>
      <p className="date">date</p>
    </div>
  );
}