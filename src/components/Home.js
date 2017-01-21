import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  HomeContainer,
  Title,
  ListContainer,
  List,
  ListItem,
} from '../styles/Home.css';

const propTypes = {
  posts: PropTypes.array,
};

class Home extends Component {
  render() {
    const {
      posts,
    } = this.props;

    return (
      <HomeContainer>
        <Title> D&D Campaign Blog </Title>
        <ListContainer>
          <List>
          {
            posts.map(p => (
              <ListItem>{p.title}</ListItem>
            ))
          }
          </List>
        </ListContainer>
      </HomeContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

Home.propTypes = propTypes;

export default connect(mapStateToProps)(Home);
