import React from 'react';
import styled from 'styled-components';
import { IoLogoInstagram, IoIosCafe } from 'react-icons/io';

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
        <Link href="https://www.instagram.com/dari_plan/">
          <IoLogoInstagram size={30} />
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://cafe.naver.com/dariplan">
          <IoIosCafe size={30} />
        </Link>
      </ListItem>
    </List>
    <Copyright>Dariplan {new Date().getFullYear()} &copy;</Copyright>
  </Footer>
);
