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


interface ReviewCardProps {
  MappedIPFSHash: string;
  Hash: string;
  inclusion: string;
  expectations: string;
  trustworthy: string;
}

export default function ReviewCard(props:ReviewCardProps ) {
  return (
    <div className='reviewcard-container'>
      <h2 className="rating">{`Inclusion: ${props.inclusion}`}</h2>
      <h2 className="rating">{`Meets expectations: ${props.expectations}`}</h2>
      <h2 className="rating">{`Trustworthy: ${props.trustworthy}`}</h2>

      <p className="description">description</p>
      <p className="date">date</p>
    </div>
  );
}