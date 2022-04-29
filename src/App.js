import './App.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import InstallMetaMask from "./modals/InstallMetaMask";

const WALLET_ADDRESS = "WALLET_ADDRESS";

function App() {
    // add state
    const [wallet, setWallet] = useState();
    const [isConnected, setIsConnected] = useState(false);
    const [showModalInstall, setModalInstall] = useState(false);

    // get local storage wallet
    useEffect(() => {
        const storageWallet = localStorage.getItem(WALLET_ADDRESS);
        if (storageWallet !== 'undefined') {
            setWallet(storageWallet);
        }

    }, []);

    // set localStorage and Connected status
    useEffect(() => {
        // set connect status
        setIsConnected(wallet ? true : false);
        localStorage.setItem(WALLET_ADDRESS, wallet);
    }, [wallet])

    // connect metaMask account 
    const handleConnectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            const account = accounts[0]

            console.log('Account: ', account)
            setWallet(account)

        } else {
            console.log('MetaMask is not installed!');
            setModalInstall(true);
        }
    }

    // close modal alert install metaMask
    const handleCloseModal = () => {
        setModalInstall(false)
    }

    // disconnect wallet metaMask 
    const handleDisconnect = () => {
        localStorage.removeItem(WALLET_ADDRESS);
        setWallet('');
        setIsConnected(false);

    }

    return (
        <div className="App">
            <header className="App-header">
                {!isConnected ?
                    <Button variant="secondary" onClick={handleConnectWallet}>
                        <img src='images/metamask.svg' alt='Logo MetaMask' width="50" height="50" />
                        Connect to MetaMask
                    </Button> : <>
                        <div className='my-2'>
                            Connect Account: {wallet}
                        </div>

                        <Button variant="dark" className='my-2' onClick={handleDisconnect}>
                            DisConnect MetaMask
                        </Button> </>}
            </header>
            {showModalInstall && (<InstallMetaMask show={showModalInstall} handleCloseModal={handleCloseModal} />)}
        </div>
    );
}

export default App;
