import { Nav, Navbar, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = ({ web3handler, account }) => {
    return (
        <Navbar expand='lg' bg='secondary' variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/create">Create</Nav.Link>
                        <Nav.Link as={Link} to="/my-listed-items">My Listed Items</Nav.Link>
                        <Nav.Link as={Link} to="/my-purchases">My Purchases</Nav.Link>
                    </Nav>
                    <Nav>
                        {account ? (
                            <Nav.Link 
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferer"
                                className="button nav-button btn-sm mx-4">
                                    <Button variant="outline-light">
                                        {account.slice(0,5) + '...' + account.slice(38,42)}
                                    </Button>
                            </Nav.Link>
                        ) : (
                            <Button onClick={web3handler} variant='outline-light'>Connect Wallet</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navigation