import { mount } from 'enzyme'
import React from 'react'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import Root from 'Root'
import CommentList from '../CommentList';

let wrapped
beforeEach(()=>{
  const initialState={comments: ['comment 1', 'comment 2']}

  wrapped=mount(
    <Root initialState={initialState}>
      <CommentList/>
    </Root>
  )

})

it('creates one li per comment', () =>{
  expect(wrapped.find('li').length).toEqual(2)
})
it('shows text from each comment', () =>{
  expect(wrapped.render().text()).toContain('comment 1')
  expect(wrapped.render().text()).toContain('comment 2')
})

