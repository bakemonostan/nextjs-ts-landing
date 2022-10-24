import { Button, Navbar, Text } from '@nextui-org/react';

const NavComponent = () => {
  return (
    <Navbar isCompact variant={'static'}>
      <Navbar.Brand>
        <Text b color='inherit'>
          Logo
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn='xs'>
        <Navbar.Link href='#'>Blogs</Navbar.Link>
        <Navbar.Link href='#'>Community</Navbar.Link>
        <Navbar.Link href='#'>Contact us</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content hideIn='xs'>
        <Navbar.Link href='#'>Login</Navbar.Link>
        <Navbar.Item>
          <Button auto flat href='#'>
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
export default NavComponent;
