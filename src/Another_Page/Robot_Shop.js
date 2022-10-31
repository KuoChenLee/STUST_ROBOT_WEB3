import '../App';
import {Button,Container,Row,Col,Navbar,Nav,Carousel,Accordion,Table,iframe,Image,Figure,Card,Form,FloatingLabel} from 'react-bootstrap';
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
	const [loadingState, setLoadingState] = useState('not-loaded')
	const [nfts, setNfts] = useState([])
	const [tokenID,settokenID]=useState();
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
	const cardInfo=[
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/0.gif",name:"STUST_ROBOTS #0",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/1.gif",name:"STUST_ROBOTS #1",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/2.gif",name:"STUST_ROBOTS #2",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/3.gif",name:"STUST_ROBOTS #3",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/4.gif",name:"STUST_ROBOTS #4",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/5.gif",name:"STUST_ROBOTS #5",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/6.gif",name:"STUST_ROBOTS #6",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/7.gif",name:"STUST_ROBOTS #7",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/8.gif",name:"STUST_ROBOTS #8",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/9.gif",name:"STUST_ROBOTS #9",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/10.gif",name:"STUST_ROBOTS #10",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/11.gif",name:"STUST_ROBOTS #11",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/12.gif",name:"STUST_ROBOTS #12",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/13.gif",name:"STUST_ROBOTS #13",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/14.gif",name:"STUST_ROBOTS #14",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/15.gif",name:"STUST_ROBOTS #15",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/16.gif",name:"STUST_ROBOTS #16",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/17.gif",name:"STUST_ROBOTS #17",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/18.gif",name:"STUST_ROBOTS #18",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/19.gif",name:"STUST_ROBOTS #19",price:"0.003"},
		{animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/20.gif",name:"STUST_ROBOTS #20",price:"0.003"}
	]
	useEffect(() => { display() }, [])
	// 賣NFT的function
	async function sell(){
		
		// let fetchItemsCreated=await contract.fetchItemsCreated();
		// console.log(fetchItemsCreated)
		// console.log(parseInt(fetchItemsCreated[0][1]))
		// console.log(parseInt(fetchItemsCreated[1][1]))
		// for(let i=0;i<fetchItemsCreated.length;i++){
		// 	let num=parseInt(fetchItemsCreated[i][1])
		// 	console.log(num)
		// 	let tokenURI=await contract.tokenURI(num)
		// 	console.log(tokenURI)
		// 	let jsondata=await fetch(tokenURI);
		// 	console.log(await jsondata.json())
		// 	let json = await jsondata.json()
		// 	//將這包物件設到NFTData裡
		// 	console.log(json)
		// 	setNFTData(json);
		// }
		// let num=parseInt(fetchItemsCreated[0][1])
		// 輸入tokenID找tokenURI
		let tokenURI=await contract.tokenURI(tokenID)
		console.log(tokenURI)
		//顯示tokenURI的資料放在jsondata裡
		let jsondata=await fetch(tokenURI);
		console.log(jsondata)
		//將jsondata用json物件形式解譯
		let json = await jsondata.json()
		//將這包物件設到NFTData裡
		setNFTData(json);
		//查看json裡的name
		console.log(json.name)
		//將json裡的animation_url前面的"ipfs://"轉換成"https://gateway.pinata.cloud/ipfs/"
		let NFT_GIF=json.animation_url.replace("ipfs://","https://gateway.pinata.cloud/ipfs/");
		// 將NFT_GIF的animation_url更新到json.animation_url裡
		json.animation_url=NFT_GIF
		console.log(NFT_GIF)

		console.log(URI)
		console.log(json)
		// 將價格用WEI計算
		
		let price=sellprice*Math.pow(10,18);
		// 觸發createMarketplaceItem來賣NFT
		
		let createMarketplaceItem=await contract.createMarketplaceItem(
			tokenID,
			price
		)
		
		// let item=await contract.idtomarketplaceitem(0);
		
		// console.log(item.json())
		
	}
	//測試展示NFT
	// async function display(){
		
	// 	let fetchMarketplaceItems=await contract.fetchMarketplaceItems();
	// 	console.log(fetchMarketplaceItems)
	// 	const nfts=await Promise.all(fetchMarketplaceItems.map(async(i)=>{
	// 		let tokenURI=await contract.tokenURI(tokenID)
	// 		console.log(tokenURI)
	// 		// let jsondata=await fetch(i.tokenURI)
	// 		// console.log(jsondata)
	// 		// let json = await jsondata.json()
	// 		// //將這包物件設到NFTData裡
	// 		// console.log(json.animation_url)
	// 		// let NFT_GIF=json.animation_url.replace("ipfs://","https://gateway.pinata.cloud/ipfs/");
	// 		// json.animation_url=NFT_GIF
	// 		// console.log(nftdata)
	// 		const meta = await axios.get(tokenURI)
	// 		console.log(meta)
	// 		const nft={
	// 			itemId:parseInt(i.itemId),
	// 			tokenId:parseInt(i.tokenId),
	// 			animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/"+parseInt(i.tokenId)+".gif", 
	// 			name: "STUST_ROBOTS #"+parseInt(i.tokenId)
	// 		}
	// 		console.log(nft)
	// 		return nft
			
	// 	}))
	// 	setNfts(nfts.filter(nft => nft !== null))
	// 	setLoadingState('loaded') 
	// 	console.log(nfts)
	// 	let price=sellprice*Math.pow(10,18);
	// 	// 觸發createMarketplaceItem來賣NFT
		
	// 	let createMarketplaceItem=await contract.createMarketplaceItem(
	// 		tokenID,
	// 		price
	// 	)
	// }
	async function display(){
		
		let fetchMarketplaceItems=await contract.fetchMarketplaceItems();
		console.log(fetchMarketplaceItems)
		const nfts=await Promise.all(fetchMarketplaceItems.map(async(i)=>{
		
			let tokenURI=await contract.tokenURI(tokenID)
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
				animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/"+parseInt(i.tokenId)+".gif", 
				name: "STUST ROBOTS #"+parseInt(i.tokenId),
				price:parseInt(i.price)
			}
			console.log(nft)
			return nft
			
		}))
		setNfts(nfts.filter(nft => nft !== null))
		setLoadingState('loaded') 
		console.log(nfts)
		let price=sellprice*Math.pow(10,18);
		// 觸發createMarketplaceItem來賣NFT
		
		let createMarketplaceItem=await contract.createMarketplaceItem(
			tokenID,
			price
		)
	}
	function show(){
		
			return (
					<Row>

									{/*如果有nftdata才顯示*/}
								
						{
							nfts.map((nft, i) => (
								<Col md={2} className="p-3" >
										<Card key={i} className="card_background" onClick={()=>BuyNFT()}>
											<Card.Img variant='bottom' src={nft.animation_url} className="card_background1"/>
											<div className='word2'><p>{nft.name}</p></div> 
											{/* <Card.Title className='text8'>{nft.name}</Card.Title> */}
											<Card.Body>
												<span className='text8'>Price:{sellprice+"ETH"}</span>
											</Card.Body>
										</Card>
									</Col>
							))
						}
						
						
					</Row>

					
			)
				
		
		
	}
		
		
	// 買NFT的function
	async function BuyNFT(){
		console.log(nfts)
		let price1=sellprice*Math.pow(10,18);
		let item=tokenID+1
		let createMarketplaceSale=await contract.createMarketplaceSale(
			// item
			item,
			{value: price1}
		)
		
	}
	
	
	// function renderCard(card,index){

		
	// 	return(
	// 		<Card style={{ width: '20rem' }} key = {index} className="box" >
	// 		<Card.Img variant="top" src={card.animation_url} alt="robot" />
	// 		<Card.Body>
	// 		<Card.Title>{card.name}</Card.Title>
	// 		<Card.Text>
	// 			{card.price+"ETH"}
	// 			<br/>
	// 			<button class="custom-btn btn-12" onClick={()=>BuyNFT()}><span>Buy now</span><span>{card.price+"ETH"}</span></button>
				
	// 		</Card.Text>
	// 		</Card.Body>
    // 		</Card>
	// 	);
	// }
	
	return(
		<div className='div20'>
		<br />
      	<br />
		<br />
		<h1 className='text7'>STUST UNIVERSE SHOP</h1>
			
			<Row>
				{/* Maybe 查詢選單? */}
				{/* <Col>
				</Col> */}
				<Col>
				<Row>
				
				<div >
					{/* onChange取得值*/}
				<input
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
					<Button variant='success' onClick={()=>display()}>Sell Robots</Button>
						 {/* <Row> */}
							{/*如果有nftdata才顯示*/}
							{/* {nftdata&&[nftdata].map(({name,animation_url})=>
							<Col md={2} className="p-3">
								<Card>
									<Card.Img variant='top' src={animation_url}/>
									<Card.Title>{name}</Card.Title>
									<Card.Body>
										<br/>
										<button class="custom-btn btn-12" onClick={()=>BuyNFT()}><span>Buy now</span><span>{sellprice+"ETH"}</span></button>
									</Card.Body>
								</Card>
							</Col>
							)} */}
							{/* {
								nfts.map((nft, i) => (
									<Col md={2} className="p-3">
											<Card key={i}>
												<Card.Img variant='top' src={nft.animation_url}/>
												<Card.Title>{nft.name}</Card.Title>
												<Card.Body>
													<br/>
													<button class="custom-btn btn-12" onClick={()=>BuyNFT()}><span>Buy now</span><span>{sellprice+"ETH"}</span></button>
												</Card.Body>
											</Card>
										</Col>
								))
							} */}
						{/* </Row>  */}
						
						{(loadingState === 'loaded' && !nfts.length)?<h1 className="px-20 py-10 text-3xl">No Robots available!</h1>:show()}
				</div>
				
				{/* {cardInfo.map(renderCard)} */}
				{/* <button onClick={()=>display()}>Show</button> */}
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