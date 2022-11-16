import '../App';
import {Button,Container,Row,Col,Navbar,Nav,Carousel,Accordion,Table,iframe,Image,Figure,Card,Form,FloatingLabel,Modal} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../Another_Page_Css/Robot_Shop.css';
import {  ethers } from "ethers";
import Web3Modal, { PROVIDER_WRAPPER_CLASSNAME } from "web3modal";
import axios from 'axios';
import React,{useState,useRef,useEffect} from 'react';
import contractaddress from'../contractaddress.json';
import ABI from'../contractabi.json';
import {
	TransitionGroup,
	CSSTransition
  } from "react-transition-group";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Navigate,
	useLocation,
	useParams
  } from "react-router-dom";

  const contractAddr=contractaddress.contractaddr;
  const abi=ABI.abi;
  const web3Modal = new Web3Modal({
    network: "Goerli", // testnet
    providerOptions: {} 
  });

  function Robot_Shop(props){
	const [show, setShow] = useState(false);
	const input1 = useRef(1)
	const input2 = useRef(2)
	const [loadingState, setLoadingState] = useState('not-loaded')
	const [nfts, setNfts] = useState([])
	const [tokenID,settokenID]=useState([]);
	const [sellprice,setSellPrice]=useState();
	const [address,setAddress]=useState(props.address);
	const [balance,setBalance]=useState('');
	const [contract,setContract]=useState(props.contract);
	const [ens,setEns]=useState('');
	const [isClick,setClick]=useState(props.isClick);
	const [notisClick,setNotClick]=useState(props.notisClick);
	const shortenAddr=addr=>addr.slice(0,4)+"..."+addr.slice(-4);//取前四後四的Addr
	const [nftdata,setNFTData]=useState();
	const [URI,setURI]=useState([]);
	
	useEffect(() => { display() }, [])
	// 賣NFT的function
	// async function sell(input1,input2){
	// 	setShow(false)
	// 	settokenID(input1)
	// 	setSellPrice(input2)
	// 	console.log(input1)
	// 	// 輸入tokenID找tokenURI
	// 	let tokenURI=await contract.tokenURI(tokenID)
	// 	// console.log(tokenURI)
	// 	//顯示tokenURI的資料放在jsondata裡
	// 	let jsondata=await fetch(tokenURI);
	// 	// console.log(jsondata)
	// 	//將jsondata用json物件形式解譯
	// 	let json = await jsondata.json()
	// 	//將這包物件設到NFTData裡
	// 	setNFTData(json);
	// 	//查看json裡的name
	// 	console.log(json.name)
	// 	//將json裡的animation_url前面的"ipfs://"轉換成"https://gateway.pinata.cloud/ipfs/"
	// 	let NFT_GIF=json.animation_url.replace("ipfs://","https://gateway.pinata.cloud/ipfs/");
	// 	// 將NFT_GIF的animation_url更新到json.animation_url裡
	// 	json.animation_url=NFT_GIF
	// 	console.log(NFT_GIF)

	// 	console.log(URI)
	// 	console.log(json)
	// 	// 將價格用WEI計算
		
	// 	let price=sellprice*Math.pow(10,18);
	// 	// 觸發createMarketplaceItem來賣NFT
		
	// 	let createMarketplaceItem=await contract.createMarketplaceItem(
	// 		tokenID,
	// 		price
	// 	)
	// }
	// function handleClick() {
	// 	console.log("test")
	// 	console.log(input1.current.value);
	// 	console.log(input2.current.value);
	// }
	async function display(){
		
		const fetchMarketplaceItems=await contract.fetchMarketplaceItems()
		
		console.log(fetchMarketplaceItems)
		const nfts=await Promise.all(fetchMarketplaceItems.map(async(i)=>{
			let Fettoken=i.tokenId;
			console.log(i.tokenId)
			// let Fettoken=await fetchMarketplaceItems[i][1]
			// console.log(Fettoken)
			let tokenURI=await contract.tokenURI(Fettoken)
			console.log(tokenURI)
			// let jsondata=await fetch(i.tokenURI)
			// console.log(jsondata)
			// let json = await jsondata.json()
			// //將這包物件設到NFTData裡
			// console.log(json.animation_url)
			// let NFT_GIF=json.animation_url.replace("ipfs://","https://gateway.pinata.cloud/ipfs/");
			// json.animation_url=NFT_GIF
			// console.log(nftdata)
			const meta = await axios.get(tokenURI)
			console.log(meta)
			const nft={
				itemId:parseInt(i.itemId),
				tokenId:parseInt(i.tokenId),
				sold:i.sold,
				animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/"+parseInt(i.tokenId)+".gif", 
				name: "STUST ROBOTS #"+parseInt(i.tokenId),
				price:parseInt(i.price)/Math.pow(10,18)
			}
			console.log(nft)
			return nft
			
		}))
		setNfts(nfts.filter(nft => nft !== null))
		setLoadingState('loaded') 
		console.log(nfts)
		
	}
	function showNFT(){
		if (loadingState === 'loaded' && !nfts.length) {
			return (<h1 className="px-20 py-10 text-3xl">No pets available!</h1>)
		  } else {
			return (
					<Row>

									{/*如果有nftdata才顯示*/}
								
						{
							nfts.map((nft, i) => (
								<Col md={4} className="p-3" >
										<Card key={i} className="card_background" onClick={()=>BuyNFT(nft)}>
											<Card.Img variant='bottom' src={nft.animation_url} className="card_background1"/>
											<div className='word2'><p>{nft.name}</p></div> 
											<div className='word3'><p>STUST UNIVERSE</p></div> 
											{/* <Card.Title className='text8'>{nft.name}</Card.Title> */}
											<Card.Body>
												
												<span className='text8'>Price: {nft.price} ETH</span>
												
											</Card.Body>
										</Card>
									</Col>
							))
						}
						
						
					</Row>

					
			)
				
					}
		
	}
		
		
	// 買NFT的function
	async function BuyNFT(nft){
		console.log(nft)
		let price=nft.price*Math.pow(10,18);
		let createMarketplaceSale=await contract.createMarketplaceSale(
			// item
			nft.itemId,
			{value: price}
		)
		
	}
	
	// function Example() {
		

		
		
	// 	const handleClose = () => setShow(false);
	// 	const handleShow = () => setShow(true);
	  
	// 	return (
	// 	  <>
	// 		<Button variant="primary" className='button'  onClick={handleShow}>
	// 		  <span className='text7'>Sell the Robots</span>
	// 		</Button>
	  
	// 		<Modal
	// 		  show={show}
	// 		  onHide={handleClose}
	// 		  backdrop="static"
	// 		  keyboard={false}
	// 		>
	// 		  <Modal.Header closeButton>
	// 			<Modal.Title className='text7'>Sell the Robot</Modal.Title>
	// 		  </Modal.Header>
	// 		  <Modal.Body>
	// 		  <input
	// 				title="STUST ROBOT TokenID"
	// 				placeholder="STUST ROBOT #?"
	// 				ref={input1}
	// 			>
	// 			</input>
	// 			<br/>
	// 			<input
	// 				title="Sell Price"
	// 				placeholder="Price"
	// 				ref={input2}
	// 			>
	// 			</input>
	// 		  </Modal.Body>
	// 		  <Modal.Footer>
	// 			<Button variant="secondary" onClick={handleClose}>
	// 			  Cancel
	// 			</Button>
	// 				<Button variant='success'  onClick={()=>{
	// 					sell(input1.current.value,input2.current.value)}} >
	// 					Sell Robots
	// 				</Button>
					
				
	// 		  </Modal.Footer>
	// 		</Modal>
	// 	  </>
	// 	);
	// }

	

// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
// 			<input
// 			title="STUST ROBOT TokenID"
// 			placeholder="STUST ROBOT #?"
// 			></input>
// 			<input
// 			title="STUST ROBOT TokenID"
// 			placeholder="STUST ROBOT #?"
// 			></input>
// 		</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

	
	
	
	return(
		<div className='div20'>
		<br />
      	<br />
		<br />
		<br />
      	
		{/* <h1 className='text7'>STUST UNIVERSE SHOP</h1> */}
		<div className='word-waves'>
			<span>STUST ROBOTS SHOP</span>
			<span>STUST ROBOTS SHOP</span>
		</div>
		<br />
		<br />
			<Row>
				{/* Maybe 查詢選單? */}
				
				<Col>
				<Row>
				
				<div >
					{/* onChange取得值*/}
				{/* <input
					title="STUST ROBOT TokenID"
					placeholder="STUST ROBOT #?"
					onChange={(e)=>settokenID(e.target.value)}
				>
				</input>
				<input
					title="Sell Price"
					placeholder="Price"
					onChange={(e)=>setSellPrice(e.target.value)}
				>
				</input>
					<Button variant='success' onClick={()=>sell()}>Sell Robots</Button> */}
						 
						{/* <Example/> */}
						<Container>
							{(loadingState === 'loaded' && !nfts.length)?<h1 className="px-20 py-10 text-3xl">No Robots available!</h1>:showNFT()}
						</Container>
						
				</div>
				
				<Row>
				
				</Row>
         
				</Row>
				
				</Col>
			</Row>
			<div className='div12'>
			  	<br/>
				<strong className='text4'>STUST UNIVERSE ROBOTS</strong>
			</div>
		</div>
	);
}

export default Robot_Shop;