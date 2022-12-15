import '../App';
import {Container,Row,Col,Card} from 'react-bootstrap';
import '../Another_Page_Css/Robot_Shop.css';
import axios from 'axios';
import React,{useState,useEffect} from 'react';

  function Robot_Shop(props){
	const [loadingState, setLoadingState] = useState('not-loaded')
	const [nfts, setNfts] = useState([])
	const [contract,setContract]=useState(props.contract);
	const [isClick,setClick]=useState(props.isClick);
	const [notisClick,setNotClick]=useState(props.notisClick);
	const shortenAddr=addr=>addr.slice(0,4)+"..."+addr.slice(-4);//取前四後四的Addr
	
	useEffect(() => { display() }, [])
	
	async function display(){
		
		const fetchMarketplaceItems=await contract.fetchMarketplaceItems()
		
		console.log(fetchMarketplaceItems)
		const nfts=await Promise.all(fetchMarketplaceItems.map(async(i)=>{
			let Fettoken=i.tokenId;
			console.log(i.tokenId)
			
			let tokenURI=await contract.tokenURI(Fettoken)
			console.log(tokenURI)
			
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
	
	

	
	
	
	return(
		<div className='div20'>
		<br />
      	<br />
		<br />
		<br />
      	
		
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