import React, { useState } from 'react';
import { Container } from 'reactstrap';
import DragDropFiles from './DragDrop';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'next/image'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import FontAwesome from 'react-fontawesome';
config.autoAddCss = false





const Hero = (props) => {
  const [data, setData] = useState('');

  const childToParent = (childText) => {
    setData(childText);
  }

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
            <FontAwesome ></FontAwesome>
            Upload your Pdf
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="contained-modal-title-vcenter" >
          <Container className='.drag-area' style={{ border: 'dashed', padding: '50px 50px', textAlign: 'center' }}
          >
            <DragDropFiles childToParent={childToParent} />
          </Container>
        </Modal.Body>
        <ProgressBar animated now={45} style={{ height: '10px' }} />
        <Modal.Footer>
          {/* <Button>Done</Button> */}
        </Modal.Footer>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);
  const [text, setText] = React.useState([]);
  return (
    <section className="section position-relative">
      <Container>
        <div className="pr text-center">
          {/* <img src="./images/member.jpeg" alt=" " className="img-fluid text-center" /> */}
          <Image
            src="/pages/public/images/member.jpeg"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
        <div className="pr">
          <p className="text-uppercase text-primary font-weight-medium  text-center">Lorem Ipsum</p>
          <h1 className="mb-4 font-weight-normal line-height-1_4 text-center">Simply dummy text of the printing <span className="text-primary font-weight-medium">Name</span></h1>
          <p className="text-muted mb-4 pb-2 text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>

        <div className='text-center'>
          <Button class="btn btn-primary btn-lg " role="button" aria-disabled="true" variant="primary" onClick={() => setModalShow(true)}>
            Launch vertically centered modal
          </Button>
        </div>
        <br></br>
        <br></br>
        <div>
          <textarea style={{ border: 'grey solid', borderRadius: '10px' }} className="form-control w-100"
            rows="10"
            value={data}>
          </textarea>
        </div>


        <Modal_temp
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </section>
  );
}

export default Hero;