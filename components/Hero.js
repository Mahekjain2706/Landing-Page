import React,{useState} from 'react';
import { Container} from 'reactstrap';
import DragDropFiles from './DragDrop';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProgressBar from 'react-bootstrap/ProgressBar';



function Modal_temp(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          Upload your Pdf 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="contained-modal-title-vcenter" >
        <Container className='.drag-area' style={{ border:'dashed',padding:'50px 50px',textAlign:'center'}}
        >
            <DragDropFiles/>
        </Container>
      </Modal.Body>
      <ProgressBar animated now ={45} style={{height:'10px'}}/>
      <Modal.Footer>
        <Button>Upload</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Hero = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <section className="section position-relative">
      <Container>
        <div className="pr">
          <img src="./images/group-members.png" alt="..." className="img-fluid" />
        </div>
        <div className="pr">
          <p className="text-uppercase text-primary font-weight-medium ">Lorem Ipsum</p>
          <h1 className="mb-4 font-weight-normal line-height-1_4">Simply dummy text of the printing <span className="text-primary font-weight-medium">Name</span></h1>
          <p className="text-muted mb-4 pb-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <Button class="btn btn-primary btn-lg " role="button" aria-disabled="true" variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <Modal_temp
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </section>
  );
}

export default Hero;