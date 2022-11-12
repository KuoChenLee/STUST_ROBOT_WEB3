import './App.css';
import {Button,Container,Row,Col,Navbar,Nav,Carousel,Accordion,Table,iframe,Image,Figure} from 'react-bootstrap';
// import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  ethers } from "ethers";
import Web3Modal from "web3modal";
import React,{useState,useEffect} from 'react';
import background from'./image/p11.png';
import wal from './image/wallet.png';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Navigate,
	useLocation,
	useParams
  } from "react-router-dom";
import Home from './Another_Page/Home.js';
import Attribute from './Another_Page/Attribute.js';
import Mint from './Another_Page/Mint.js';
import Empowerment from './Another_Page/Empowerment.js';
import Robot_Shop from './Another_Page/Robot_Shop.js';
import Account from './Another_Page/Account.js';
// import contractaddress from'../src/contractaddress.json';
// import ABI from'../src/contractabi.json';
import contractaddress from './contractaddress.json';
import ABI from './contractabi.json';
import Fet from './Another_Page/Robot_Shop.js';
const web3Modal = new Web3Modal({
  network: "Goerli", // testnet
  providerOptions: {} 
});
  

// export const contractAddr=contractaddress.contractaddr;
// export const abi=ABI.abi;


function App() {
	const contractAddr="0xa159Ce8EDeA312189A48Dd66d26065851A527B78";
	const abi=[
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "initBaseURI",
					"type": "string"
				},
				{
					"internalType": "string",
					"name": "initNotRevealedUri",
					"type": "string"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "approved",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "Approval",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "bool",
					"name": "approved",
					"type": "bool"
				}
			],
			"name": "ApprovalForAll",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "itemId",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "seller",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "bool",
					"name": "sold",
					"type": "bool"
				}
			],
			"name": "MarketplaceItemCreated",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "NFTMinted",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "previousOwner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "OwnershipTransferred",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"inputs": [],
			"name": "MAX_SUPPLY",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "_isSaleActive",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "_items",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "_value",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "_revealed",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "_tokenURIs",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				}
			],
			"name": "balanceOf",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "baseExtension",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				}
			],
			"name": "createMarketplaceItem",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "itemId",
					"type": "uint256"
				}
			],
			"name": "createMarketplaceSale",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "fetchItemsCreated",
			"outputs": [
				{
					"components": [
						{
							"internalType": "uint256",
							"name": "itemId",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "tokenId",
							"type": "uint256"
						},
						{
							"internalType": "address payable",
							"name": "seller",
							"type": "address"
						},
						{
							"internalType": "address payable",
							"name": "owner",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "price",
							"type": "uint256"
						},
						{
							"internalType": "bool",
							"name": "sold",
							"type": "bool"
						}
					],
					"internalType": "struct Stust_NFT_meta.MarketplaceItem[]",
					"name": "",
					"type": "tuple[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "fetchMarketplaceItems",
			"outputs": [
				{
					"components": [
						{
							"internalType": "uint256",
							"name": "itemId",
							"type": "uint256"
						},
						{
							"internalType": "uint256",
							"name": "tokenId",
							"type": "uint256"
						},
						{
							"internalType": "address payable",
							"name": "seller",
							"type": "address"
						},
						{
							"internalType": "address payable",
							"name": "owner",
							"type": "address"
						},
						{
							"internalType": "uint256",
							"name": "price",
							"type": "uint256"
						},
						{
							"internalType": "bool",
							"name": "sold",
							"type": "bool"
						}
					],
					"internalType": "struct Stust_NFT_meta.MarketplaceItem[]",
					"name": "",
					"type": "tuple[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "fetchMyNFTs",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "flipReveal",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "flipSaleActive",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "getApproved",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "getMintPrice",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "idToMarketplaceItem",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "itemId",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"internalType": "address payable",
					"name": "seller",
					"type": "address"
				},
				{
					"internalType": "address payable",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "price",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "sold",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				}
			],
			"name": "isApprovedForAll",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "maxBalance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "maxMint",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "mintPrice",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenQuantity",
					"type": "uint256"
				}
			],
			"name": "mintSNMeta",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "name",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "notRevealedUri",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "ownerOf",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "safeTransferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				},
				{
					"internalType": "bytes",
					"name": "data",
					"type": "bytes"
				}
			],
			"name": "safeTransferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "operator",
					"type": "address"
				},
				{
					"internalType": "bool",
					"name": "approved",
					"type": "bool"
				}
			],
			"name": "setApprovalForAll",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_newBaseExtension",
					"type": "string"
				}
			],
			"name": "setBaseExtension",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_newBaseURI",
					"type": "string"
				}
			],
			"name": "setBaseURI",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_maxBalance",
					"type": "uint256"
				}
			],
			"name": "setMaxBalance",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_maxMint",
					"type": "uint256"
				}
			],
			"name": "setMaxMint",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "_mintPrice",
					"type": "uint256"
				}
			],
			"name": "setMintPrice",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "_notRevealedURI",
					"type": "string"
				}
			],
			"name": "setNotRevealedURI",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "bytes4",
					"name": "interfaceId",
					"type": "bytes4"
				}
			],
			"name": "supportsInterface",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "symbol",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "index",
					"type": "uint256"
				}
			],
			"name": "tokenByIndex",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"name": "tokenIdToaddress",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "index",
					"type": "uint256"
				}
			],
			"name": "tokenOfOwnerByIndex",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "tokenURI",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "totalSupply",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "tokenId",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				}
			],
			"name": "withdraw",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	];
  const [currentAccount,setCurrentAccount]=useState('');
  const [address,setAddress]=useState('');
  const [balance,setBalance]=useState('');
  const [contract,setContract]=useState({});
  const [ens,setEns]=useState('');
  const [isClick,setClick]=useState(false);
  const [notisClick,setNotClick]=useState(true);
  const shortenAddr=addr=>addr.slice(0,4)+"..."+addr.slice(-4);//取前四後四的Addr
  function myFunction() {
    let elem = document.querySelectorAll(".drop-down");
    elem.forEach(element=>{
        element.addEventListener("click", e =>{
            console.log(e.target.innerHTML);
        });
    })
  }
  myFunction();
  // metamask錢包 相關處理
	const checkIfWalletIsConnected = async () => {
		if (!window.ethereum) return alert('Please install MetaMask');

		const accounts = await window.ethereum.request({ method: 'eth_accounts' });

		if (accounts.length) {
		setCurrentAccount(accounts[0]);
		} else {
		console.log('No account found');
		}
	};
	useEffect(() => {
		checkIfWalletIsConnected();
	  }, []);
    async function init(){
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const addr=await signer.getAddress();
      const _contract=new ethers.Contract(contractAddr,abi,signer);
      setContract(_contract);
      window.contract=_contract;
      setEns(await provider.lookupAddress(addr));
      console.log(addr);
      setAddress(addr);
      const bal=await provider.getBalance(addr);
      setBalance(ethers.utils.formatEther( bal )); 
      setClick((isClick) => !isClick);
      setNotClick((notisClick)=>!notisClick);
      console.log(notisClick);
    }
	
 
  return (
    <div className="App">
      <div className='div1'>
		<Router>
			<Navbar scrolling dark expand="md" fixed="top">
			
				<Container>
				<Navbar.Brand to="/"><h1  className='STUST'>STUST NFT Universe</h1></Navbar.Brand>
				
					<Link className='text1' to="/Home" ><button className='button1'>Home</button></Link>
					<Link className='text1' to="/Attribute"><button className='button1'>Attribute</button></Link>
					<Link className='text1' to="/Mint"><button className='button1'>Mint</button></Link>
					<Link className='text1' to='/Empowerment'><button className='button1'>Empowerment</button></Link>
					<Link className='text1' to="/Robot_Shop"><button className='button1'>Robot_Shop</button></Link>
				
					<div>
						{address&&<span className='me-2' >
						{(1*balance).toFixed(2)}Ethers
						</span>}
						<div  onClick={()=>{init()}} >
						{
							
							address?<Button variant='success' disabled={isClick}>{ens||shortenAddr(address)}</Button>:<img src={wal} alt="background" className="wallet"/>
						}
						</div>
						{/* {
							
							address?<Button variant='success' onClick={()=>{init()}}  disabled={isClick}>{ens||shortenAddr(address)}</Button>:<img src={wal} alt="background" className="header"/>
						} */}
						{/* <Button variant={address?'success':'outline-secondary'} onClick={()=>{init()}} disabled={isClick}>
						{address?(ens||shortenAddr(address)):'Connect Wallet'}
						</Button> */}
					</div>
					<Link className='text1' to="/account"><img className='header' src={background} alt="background"/></Link>
					</Container>

			</Navbar>
			

				<Routes>
					{/* 路徑處理 */}
					<Route exact path="*"  element={<Home/>}/>
					<Route path="/Attribute" element={<Attribute/>} />
					<Route path="/Mint" element={<Mint contract={contract} address={address} notisClick={notisClick} isClick={isClick} contractAddr={contractAddr} abi={abi}/>} />
					<Route path="/Empowerment" element={<Empowerment/>} />
					<Route path="/Robot_Shop" element={<Robot_Shop contract={contract} address={address} notisClick={notisClick} isClick={isClick}/>} />
					<Route path="/Account" element={<Account address={address} contract={contract}  contractAddr={contractAddr} abi={abi} balance={balance} isClick={isClick}/>}/>
				</Routes>
		</Router>
      </div>
      
    </div>
  );
}

export default App;