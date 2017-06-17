import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap'
import injectStyles from 'react-jss'

import ProfileInfo from './ProfileInfo'
import RepoRow from '../repos/RepoRow'

import axios from 'axios'

const styles = {
  underNavbar: {
    marginTop: 80
  }
}

class Profile extends Component {
  constructor () {
    super()
    this.state = {
      loading: false,
      userAvatar: '',
      userRepos: []
    }
  }

  componentWillMount () {
    this.setState({
      loading: true
    })

    Promise.all([
      axios.get('https://api.github.com/users/abeagley'),
      axios.get('https://api.github.com/users/abeagley/repos')
    ]).then((values) => {
      this.setState({
        userAvatar: values[0].data.avatar_url,
        userRepos: values[1].data,
        loading: false
      })
    })
  }

  render () {
    const classes = this.props.classes

    const repos = this.state.userRepos.map((repo, idx) => {
      return (<RepoRow key={idx} repo={repo}/>)
    })

    const loadingInfo = (this.state.loading) ? (<h1>Loading</h1>) : null

    return (
      <Container className={classes.underNavbar}>
        <Row>
          <Col sm="4">
            <ProfileInfo avatarUrl={this.state.userAvatar}/>
          </Col>
          <Col sm="8">
            <h3>Projects</h3>
            {loadingInfo}
            {repos}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default injectStyles(styles)(Profile)
