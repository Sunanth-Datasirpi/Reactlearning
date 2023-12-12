import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import {
  TwitterOutlined,
  LinkedinOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function NavBarExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="eduhash">EDUHASH</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          className="d-flex justify-content-center"
        >
          <Nav
            className="me-auto my-2 my-lg-0  mx-auto"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="home">HOME</Nav.Link>
            <Nav.Link href="aboutus">ABOUT US</Nav.Link>
            <NavDropdown title="COURSES" id="navbarScrollingDropdown">
              <NavDropdown.Item href="course1">COURSE 1</NavDropdown.Item>
              <NavDropdown.Item href="course2">COURSE 2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="pages">PAGES</Nav.Link>
            <NavDropdown title="BLOG" id="navbarScrollingDropdown">
              <NavDropdown.Item href="BLOG">BLOG</NavDropdown.Item>
              <NavDropdown.Item href="SINGLE">SINGLE</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="contact">CONTACT</Nav.Link>
          </Nav>
          <Nav.Link href="facebook" className="mx-2">
            {<FacebookOutlined className="twitter-icon" />}
          </Nav.Link>
          <Nav.Link href="twitter" className="mx-2">
            {<TwitterOutlined className="twitter-icon" />}
          </Nav.Link>
          <Nav.Link href="linkedin" className="mx-2">
            {<LinkedinOutlined className="twitter-icon" />}
          </Nav.Link>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarExample;
