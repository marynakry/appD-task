import { afterEach, describe, expect, it } from '@jest/globals'
import { cleanup, getByTestId, render } from '@testing-library/react'
import { Post } from '../Post'

describe('Post', () => {
  afterEach(() => {
    cleanup()
  })

  it('render post component', () => {
    const { getByTestId } = render(
      <Post postId={1} title="title">
        test
      </Post>
    )
    const post = getByTestId('post-1')
    expect(post).toBeTruthy()
    expect(post).toMatchSnapshot()
    expect(post.textContent).toContain('test')
  })

  it('check post component title', () => {
    const { getByTestId } = render(
      <Post postId={1} title="title">
        test
      </Post>
    )
    const post = getByTestId('post-1')
    expect(post.getElementsByTagName('h1')).toHaveLength(1)
    expect(post.getElementsByTagName('h1')[0].textContent).toBe('title')
  })

  it('check post component empty title', () => {
    const { getByTestId } = render(
      <Post postId={1} title="">
        test
      </Post>
    )
    const post = getByTestId('post-1')
    expect(post.getElementsByTagName('h1')).toHaveLength(1)
    expect(post.getElementsByTagName('h1')[0].textContent).toBe('')
  })
})
