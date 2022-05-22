import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps
} from '@chakra-ui/react'
import { local } from 'web3modal'

import CompanyCard from '../components/CompanyCard'
import companies from '../Data/NFTs/Companies.json'

import '../styles/landingpage.css'

interface landingProps {
  setPage: (params: any) => any
}
export default function CallToActionWithIllustration ({ setPage }: any) {
  return (
    <div className='landing-container'>
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            color={'white'}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Creating a Web3 Community of{' '}
            <Text as={'span'} color={'pink.500'}>
              Trust
            </Text>
          </Heading>
          <Text color={'black'} maxW={'3xl'}>
            Rate the block puts customer feedback on the chain to create
            visibility of the values and standards held by companies. We beleive
            that by holding businesses accountable to how they treat their
            customers we can steer people away from uninclusive enviroments.
          </Text>
          {/* <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            Get started
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack> */}
          <Flex w={'full'}>
            {companies.map(function (company) {
              var p = {
                name: company.name,
                description: company.description,
                ipfshash: company.ipfsHash
              }

              return (
                <div
                  onClick={() => {
                    localStorage.setItem('company-name', company.name)
                    localStorage.setItem('company-hash', company.ipfsHash)
                    localStorage.setItem(
                      'company-description',
                      company.description
                    )
                    console.log(localStorage.getItem('company-name'))

                    setPage('not-landing')
                  }}
                  className='company-card'
                >
                  <CompanyCard
                    {...p}

                    // MappedIPFSHash= {rating.MappedIPFSHash}
                    // Hash = {rating.Hash}
                    // inclusion= {rating.inclusion}
                    // expectations={rating.expectations}
                    // trustworthy={rating.trustworthy}
                  >
                    {' '}
                  </CompanyCard>
                </div>
              )
            })}
          </Flex>
        </Stack>
      </Container>
    </div>
  )
}
