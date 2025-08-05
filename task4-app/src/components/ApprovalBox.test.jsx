import '@testing-library/jest-dom'; //  THIS is required!
import { render, screen, fireEvent } from '@testing-library/react';
import ApprovalBox from './ApprovalBox';

test('shows Approved! after clicking approve button', async () => {
  render(<ApprovalBox />);
  fireEvent.click(screen.getByText('Approve'));
  const approvedText = await screen.findByText('Approved!');
  expect(approvedText).toBeInTheDocument(); //  Now works
});
