import React, { Component } from 'react'
import styled from 'styled-components'

const Main = styled.div`
  font: 15px Helvetica, Arial;
  border: 1px solid #eee;
  padding: 0 10px;
`

const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
`

interface PostProps {
  title: string
  postId: number
}

export class Post extends Component<PostProps> {
  render() {
    const { title, children, postId } = this.props
    return (
      <Main data-testid={`post-${postId}`}>
        <Title>{title}</Title>
        {children}
      </Main>
    )
  }
}
