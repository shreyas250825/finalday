import { useState } from 'react';

const ApprovalBox = () => {
  const [approved, setApproved] = useState(false);

  return (
    <div>
      <button onClick={() => setApproved(true)}>Approve</button>
      {approved && <p>Approved!</p>}
    </div>
  );
};

export default ApprovalBox;
