import React, { Component } from 'react'
import { Post } from '../components/Post'
import { Paragraph } from '../components/Paragraph'
import styled from 'styled-components'
import axios from 'axios'

const Main = styled.div`
  margin: auto;
  max-width: 420px;
  padding: 10px;
`

const Divider = styled.hr`
  width: 100px;
  border-width: 0;
  margin: 20px auto;
  text-align: center;

  &::before {
    content: '***';
    color: #ccc;
  }
`

interface PostType {
  userId: number
  id: number
  title: string
  body: string
}

export default class Home extends Component {
  state: { posts: PostType[] } = {
    posts: []
  }

  async componentDidMount() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    const posts = response.data
    this.setState({ posts })
  }

  renderPost(post: PostType, isLast: boolean) {
    const paragraphs = post.body.split('\n')
    return (
      <React.Fragment key={post.id}>
        <Post postId={post.id} title={post.title}>
          {paragraphs.map((paragraph, i) => (
            <Paragraph key={i}>{paragraph}</Paragraph>
          ))}
        </Post>
        {!isLast && <Divider />}
      </React.Fragment>
    )
  }

  render() {
    return (
      <Main data-testid="main">
        {this.state.posts.map((post, i) => {
          const isLast = i === this.state.posts.length - 1
          return this.renderPost(post, isLast)
        })}
      </Main>
    )
  }
}
