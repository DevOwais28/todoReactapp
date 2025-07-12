
import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';

function AlertBox({ event, variant, show, setShow }) {
  if (!show) return null;

  return (
    <Alert variant={variant} onClose={() => setShow(false)} dismissible className="alert-top-bar edit alert-fade-in">
      {event}
    </Alert>
  );
}
//   return <Button onClick={() => setShow(true)}>Show Alert</Button>;


export default AlertBox;