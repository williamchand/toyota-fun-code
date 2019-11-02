import React, {useState} from 'react';
import {Toast, Button} from 'react-bootstrap';

function LandingPage() {
  const [count, setCount] = useState(0);
  return (
    <div style={{width: '100%'}}>
    <Toast >
      <Toast.Header>
        <img style={{width: '20px', height: '20px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLTlUq2RK4wfhH2zbPnYSs7O613KMS8mynqxa0B_jjctN6brwf" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Bootstrap</strong>
        <Button onClick={() => setCount(count + 1)}>
          Click me
        </Button>
      </Toast.Header>
      <Toast.Body>See? you clicked {count} times.
      </Toast.Body>
    </Toast>
    </div>
  );
}

export default LandingPage;
