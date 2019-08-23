import React from 'react';
import styled from 'styled-components';
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoTwitter,
} from 'react-icons/io';

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  margin: 50px 0px;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 16px;
`;

const Link = styled.a`
  color: ${props => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
  color: ${props => props.theme.darkGreyColor};
`;

export default () => (
  <Footer>
    <List>
      <ListItem>
        <Link href="#">
          <IoLogoInstagram size={30} />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#">
          <IoLogoFacebook size={30} />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#">
          <IoLogoLinkedin size={30} />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#">
          <IoLogoYoutube size={30} />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="#">
          <IoLogoTwitter size={30} />
        </Link>
      </ListItem>
    </List>
    <Copyright>Dariplan {new Date().getFullYear()} &copy;</Copyright>
  </Footer>
);
