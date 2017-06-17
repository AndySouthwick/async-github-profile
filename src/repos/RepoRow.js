import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Row, Col, Card, CardHeader, CardBlock } from 'reactstrap'

class RepoRow extends Component {
  render () {
    return (
      <Row>
        <Col>
          <Card>
            <CardHeader>{this.props.repo.name}</CardHeader>
            <CardBlock>
              {this.props.repo.description}
            </CardBlock>
          </Card>
        </Col>
      </Row>
    )
  }
}

RepoRow.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoRow
