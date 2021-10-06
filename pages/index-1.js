import Link from 'next/link';
import { Heading, Button } from '@chakra-ui/react';

function IndexPage() {
  return (
    <>
      <Heading>Heading</Heading>
      <Link href="/">
        <Button>Go Back!</Button>
      </Link>
    </>
  );
}

export default IndexPage;
