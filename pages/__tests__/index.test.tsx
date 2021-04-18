import {beforeEach, describe, expect, it, jest} from '@jest/globals'
import { cleanup, render, waitFor } from '@testing-library/react'
import Home from '../index'
import axios from 'axios'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Main', () => {
  beforeEach(() => {
    cleanup()
  })

  it('render main component', async () => {
    const data = [
      {
        userId: 1,
        id: 1,
        title: 'title 1',
        body: 'test content 1'
      }
    ]

    mockedAxios.get.mockResolvedValue({ data })

    const { getByTestId } = render(<Home />)
    const component = getByTestId('main')

    await waitFor(() => {
      expect(component).toBeTruthy()
    })
  })

  it('get 1 post', async () => {
    const data = [
      {
        userId: 1,
        id: 1,
        title: 'title 1',
        body: 'test content 1'
      }
    ]

    mockedAxios.get.mockResolvedValue({ data })

    const { getByTestId } = render(<Home />)
    const component = getByTestId('main')

    await waitFor(() => {
      expect(component.getElementsByTagName('hr')).toHaveLength(0)
      expect(component.getElementsByTagName('h1')).toHaveLength(1)
    })
  })

  it('get several posts', async () => {
    const data = [
      {
        userId: 1,
        id: 1,
        title: 'title 1',
        body: 'test content 1'
      },
      {
        userId: 1,
        id: 2,
        title: 'title 2',
        body: 'test content 2'
      }
    ]

    mockedAxios.get.mockResolvedValue({ data })
    const { getByTestId } = render(<Home />)
    const component = getByTestId('main')
    await waitFor(() => {
      expect(component.getElementsByTagName('hr')).toHaveLength(1)
      expect(component.getElementsByTagName('h1')).toHaveLength(2)
    })
  })

  it('get no posts', async () => {
    mockedAxios.get.mockResolvedValue({ data: [] })
    const { getByTestId } = render(<Home />)
    const component = getByTestId('main')
    await waitFor(() => {
      expect(component.innerHTML).toBe('')
      expect(component.getElementsByTagName('hr')).toHaveLength(0)
      expect(component.getElementsByTagName('h1')).toHaveLength(0)
    })
  })
})
