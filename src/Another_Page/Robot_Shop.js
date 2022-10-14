import '../App';
import {Button,Container,Row,Col,Navbar,Nav,Carousel,Accordion,Table,iframe,Image,Figure,Card} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../Another_Page_Css/Robot_Shop.css';
import {  ethers } from "ethers";
import Web3Modal from "web3modal";
import React,{useState,useRef,useEffect} from 'react';
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
import { contractAddr } from '../App';
  const web3Modal = new Web3Modal({
    network: "Goerli", // testnet
    providerOptions: {} 
  });

  function Robot_Shop(props){
	const [address,setAddress]=useState(props.address);
	const [balance,setBalance]=useState('');
	const [contract,setContract]=useState(props.contract);
	const [ens,setEns]=useState('');
	const [isClick,setClick]=useState(props.isClick);
	const [notisClick,setNotClick]=useState(props.notisClick);
	const shortenAddr=addr=>addr.slice(0,4)+"..."+addr.slice(-4);//取前四後四的Addr
	
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
	async function BuyNFT(){
	// 	const mintPrice = await contract.mintPrice();
	// 	let tx = await contract.mintSNMeta(
	// 		1
	// 		,{value:mintPrice.toString()}
	// 		);
	// 	let setBaseURI=await contract.setBaseURI(
	// 		"ipfs://QmYgCen5PzYdjuVezQCXasvb998wdTrn9o586ZCLSN7oML/0.json"
	// 	)
  
	}
	// 寫一個按鈕可以買賣的
	function renderCard(card,index){

		
		return(
			<Card style={{ width: '20rem' }} key = {index} className="box" >
			<Card.Img variant="top" src={card.animation_url} alt="robot" />
			<Card.Body>
			<Card.Title>{card.name}</Card.Title>
			<Card.Text>
				{/* {card.price+"ETH"} */}
				<br/>
				<button class="custom-btn btn-12" onClick={()=>BuyNFT()}><span>Buy now</span><span>{card.price+"ETH"}</span></button>
				
			</Card.Text>
				{/* <Button variant="primary">Go somewhere</Button> */}
			</Card.Body>
    		</Card>
		);
	}
	return(
		<div className='div13'>
		<br />
      		<br />
		<h1 className='text7'>STUST UNIVERSE SHOP</h1>
			
			<Row>
				<Col>
				<Accordion defaultActiveKey="0">
					<Accordion.Item eventKey="0">
						<Accordion.Header>Accordion Item #1</Accordion.Header>
						<Accordion.Body>
						
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Accordion Item #2</Accordion.Header>
						<Accordion.Body>
						
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
				</Col>
				<Col>
				<Row>
				{cardInfo.map(renderCard)}
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