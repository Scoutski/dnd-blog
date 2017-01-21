import styled from 'styled-components';

const home = {
  position: 'relative',
  padding: '2rem',
  width: '100%',
};

const title = {
  'font-family': "'Lato', sans-serif",
  'font-size': '54px',
  'font-weight': '300',
  'line-height': '58px',
  margin: '0 0 58px',
};

const listContainer = {
  border: 'solid 1px #D3D3D3',
  width: '20%',
  height: '60vh',
};

const list = {
  'list-style': 'none',
  'padding-left': '1rem',
};

const listItem = {
  'font-family': "'Lato', sans-serif",
  'font-size': '1.2rem',
  'font-weight': '300',
};

const HomeContainer = styled.div`${home}`;
const Title = styled.h1`${title}`;
const ListContainer = styled.div`${listContainer}`;
const List = styled.ul`${list}`;
const ListItem = styled.li`${listItem}`;

export {
  HomeContainer,
  Title,
  ListContainer,
  List,
  ListItem,
};
