import { render, screen, fireEvent } from '@testing-library/react';
import CommentBox from './CommentBox';

test('posts a comment and clears input', () => {
  const mockPost = vi.fn();

  render(<CommentBox onPost={mockPost} />);

  const input = screen.getByTestId('comment-input');
  const button = screen.getByText('Post');

  fireEvent.change(input, { target: { value: 'Test comment' } });
  fireEvent.click(button);

  expect(mockPost).toHaveBeenCalledWith('Test comment');
  expect(input.value).toBe(''); // input cleared after posting
});
