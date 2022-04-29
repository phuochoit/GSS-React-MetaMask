import { Modal } from 'react-bootstrap'
const InstallMetaMask = ({ show, handleCloseModal }) => {
    return (
        <>
            <Modal
                show={show}
                onHide={handleCloseModal}
                dialogClassName="modal-90w"
                centered
                backdrop="static"
                keyboard={false}
                aria-labelledby="custom-modal-install-metamaks"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="custom-modal-install-metamaks">
                        MetaMask not available
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Please install MetaMask to use this service! the 
                        <a href="https://metamask.io/download/" target="_blank" className='ms-1'>here</a>
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default InstallMetaMask;