import '../App';
import {Button,Container,Row,Col,Navbar,Nav,Carousel,Accordion,Table,iframe,Image,Figure,Card} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
// import 'bootstrap/dist/css/bootstrap.min.css';

import '../Another_Page_Css/Mint.css';
import {  ethers } from "ethers";
import Web3Modal from "web3modal";
import React,{useState} from 'react';
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
  import App from '../App.js';
  import contractaddress from'../contractaddress.json';
  import ABI from'../contractabi.json';
  const web3Modal = new Web3Modal({
    network: "Goerli", // testnet
    providerOptions: {} 
  });
  // const contractAddr=contractAddress.STUST_NFT;
  // const abi=Stust_NETA_Artifact.abi;
  const contractAddr=contractaddress.contractaddr;
  const abi=ABI.abi;

  function Mint(props){

  const [address,setAddress]=useState(props.address);
  const [balance,setBalance]=useState('');
  const [contract,setContract]=useState(props.contract);
  const [ens,setEns]=useState('');
  const [isClick,setClick]=useState(props.isClick);
  const [notisClick,setNotClick]=useState(props.notisClick);
  const shortenAddr=addr=>addr.slice(0,4)+"..."+addr.slice(-4);//取前四後四的Addr
  const [nftData,setNFTData]=useState();
  //mint 盲盒處理 
  async function mint(){
    const mintPrice = await contract.mintPrice();
    let tx = await contract.mintSNMeta(
      1
      ,{value:mintPrice.toString()}
      );
    let response=await tx.wait();
    console.log(response);
	let setNotRevealedURI=await contract.setNotRevealedURI(
				"ipfs://QmVceFMQrQjXcG7ifBYPpk3W21DnNXq8BUBEfsGXq8WVSX"
	);
	//做一個隨機盒子的運算
    
  }
  // 打開盲盒處理
  async function SeeNFT(){
    let flipReveal=await contract.flipReveal();
        let setBaseURI=await contract.setBaseURI(
        "ipfs://QmYgCen5PzYdjuVezQCXasvb998wdTrn9o586ZCLSN7oML/"
        )
	
	
  }

//   async function gettokenURI(id){
// 	let tokenURI=await contract.tokenURI(id);
// 	// console.log(tokenURI)

// 	let jsonURI=tokenURI.replace("ipfs://","https://gateway.pinata.cloud/ipfs/");
// 	// console.log(jsonURI)
// 	let jsonData=await fetch(jsonURI)
// 	// console.log(jsonData)
// 	// console.log(await jsonData.text())
// 	setNFTData(JSON.parse(await jsonData.text()));
	
// }
  
	return(
		<div className='dvi1'>
			<br />
			<br />
			<br />
			 {/* Mint button 合約 */}
			 <div className='div6'>
				<div >
				<Container className='div10'>
					<Col>
						<h1 className='text2'>Mint Blind Box</h1>
						<h6 className='text2'>
						And you can get blind box
						</h6>
					</Col>
					<Col className='roll-in-top'>
						<iframe src="https://kuochenlee.github.io/Blind_Box_Picture1/" width="560" height="655"/>
					</Col>
						<select className="list1" id="list">
						<option class="drop-down">0</option>
						<option class="drop-down" selected="selected">1</option>
						<option class="drop-down">2</option>
						</select>
					<Col>
						<Button disabled={notisClick} onClick={()=>mint()} variant={address?"danger":"secondary"} >Mint Blind Box</Button>
                        {/* disabled={notisClick} */}
					</Col>
					<Col>
						<h1 className='text2'>Open your blind box.🔑</h1>
						<h6 className='text2'>
						You can open the blind box.
						</h6>
					</Col>
					<Col>
						<Button disabled={notisClick} onClick={()=>SeeNFT()} variant={address?"dark":"secondary"} >Open Blind Box</Button>
                        {/* disabled={notisClick} */}
					</Col>
					<Col>
						<h6 className='text2'>If you want to see your NFT ,Click <a href='https://testnets.opensea.io/zh-TW'>OpenSea</a></h6>
					</Col>
				</Container>
				</div>
      		</div>
			{/* 盲盒說明 */}
			<div className='div3'>
				<h1>How To Mint Blind Box?</h1>
				<Row>
					<h4 className='text2'>You need to Click <img src={require('../image/p3.png')} alt="Background"/> ➜ <img src={require('../image/p4.png')} alt="Background"/>
					<br/>
					You can see <img className='img1' src={require('../image/p5.png')} alt="Background"/> this two button open.
					<br/>CLick the red Button.You can see <img className='img2' src={require('../image/p6.png')} alt="Background"/>.Click confirm and wait a minute.
					<br/>
					You can go to opensea to see did you receive the Blind Box.If you recieve the Blin Box like this <img className='img3' src={require('../image/p7.png')} alt="Background"/>
					<br/>
					You can open the Blind Box.Click this <img  src={require('../image/p8.png')} alt="Background"/>.Wait a minute .And Reorganize OpenSea .
					<br/>
					You can see what Robot you get.Like this <img  className='img3' src={require('../image/p9.png')} alt="Background"/>
					<br/>
					And check your Attribute. <img className='img3' src={require('../image/p10.png')}alt="Background"/>
					</h4>
				</Row>
			</div>
			{/* <Button onClick={()=>gettokenURI(0)}>Get NFT</Button> */}
				<Row>
					{/* <img src="https://gateway.pinata.cloud/ipfs/Qmd2Vb6fyMFkd3Kzbffss9QDjvr8reLExhMuhBYRCbrg2y/0.gif" alt="robot" /> */}
					{/* {nftData&&[nftData].map(({name,animation_url})=> */}
					{/* <Col md={4} className="p-3"> 
						<Card> 
						<Card.Img variant="top" src={animation_url}>
							<Card.Img variant="top" src="https://gateway.pinata.cloud/ipfs/Qmd2Vb6fyMFkd3Kzbffss9QDjvr8reLExhMuhBYRCbrg2y/0.gif" alt="robot">
							<Card.Body>
									<Card.Title>
										STUST#0
										{/* {name} */}
									{/* </Card.Title>
								</Card.Body> */}
							{/* </Card.Img>
						</Card> 
					 </Col>  */}
					 {/* )} */} 
				</Row>
			  <div className='div12'>
			  <br/>
			  	<a href='http://localhost:3000/Robot_Shop'>
                    <button className='button4'>Go to the shop ➝</button>
            	</a>
			  	<br/>
				<strong className='text4'>STUST UNIVERSE ROBOTS</strong>
				
				
			</div>
			
		</div>
	);
}

export default Mint;