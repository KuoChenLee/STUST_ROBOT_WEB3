import '../App';
import {Button,Container,Row,Col,Navbar,Nav,Carousel,Accordion,Table,iframe,Image,Figure,Card,Form,FloatingLabel,Modal} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../Another_Page_Css/Account.css';
import {  ethers } from "ethers";
import Web3Modal, { PROVIDER_WRAPPER_CLASSNAME } from "web3modal";
import axios from 'axios';
import React,{useState,useRef,useEffect} from 'react';
import box from '../image/1.gif';
import contractaddress from'../contractaddress.json';
import p12 from '../image/p12.png';
import p1 from '../image/p2.png';
import p13 from '../image/p13.png'
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
import have from './have.js';
import { getByDisplayValue } from '@testing-library/react';
import Attribute from './Attribute';
  const contractAddr=contractaddress.contractaddr;
  const abi=ABI.abi;
  const web3Modal = new Web3Modal({
    network: "Goerli", // testnet
    providerOptions: {} 
  });

function Account(props){
    const [show, setShow] = useState(false);
    const [Attributes,setAttributes]=useState([]);
    const [isClick,setClick]=useState(props.isClick);
    const [nfts, setNfts] = useState([])
    const [loadingState, setLoadingState] = useState('not-loaded')
    const [address,setAddress]=useState(props.address);
    const [balance,setBalance]=useState(props.balance);
    const [contract,setContract]=useState(props.contract);
    const shortenAddr=address=>address.slice(0,4)+"..."+address.slice(-4);
    useEffect(() => { fetchmyNFT() }, [])
    useEffect(() => { fetchattrubute() }, [])
   
    async function fetchattrubute(token){
        let tokenURI=await contract.tokenURI(token)
        let jsondata=await fetch(tokenURI);
        console.log(jsondata)
        let json=await jsondata.json()
        console.log(json);
        let attribute=json.attributes
        console.log(attribute)
        const Attributes=await Promise.all(attribute.map(async(k)=>{
            console.log(k.value)
            const Attribute={
                trait_type:k.trait_type,
                value:k.value
            }
            console.log(Attribute)
            return Attribute;
        }))
        setAttributes(Attributes.filter(Attribute => Attribute !== null))
        console.log(Attributes)
    }
    function display_attribute(tokenId){
        const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);
        return(
            <>
            
			<Button variant="primary" className='button'  onClick={handleShow}>
            
			  <span className='text7' onClick={()=>fetchattrubute(tokenId)}>Show Attribute</span>
			</Button>
	  
			<Modal
			  show={show}
			  onHide={handleClose}
			  backdrop="static"
			  keyboard={false}
			>
			  <Modal.Header closeButton>
				<Modal.Title className='text7'>
                    <img src={p13} alt="Background" className='imglabal' />
                    Attribute
                </Modal.Title>
			  </Modal.Header>
              <Modal.Body closeButton>
              {
                Attributes.map((Attribute,k)=>(
                    
                        <Col key={k}>
                            <Row className='div18'>
                            {Attribute.trait_type}
                            </Row>
                        
                            <Row className='div19'>
                            {Attribute.value}
                            </Row>
                        </Col>
                ))
              }
			   </Modal.Body>
			  <Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
				  Close
				</Button>
				
			  </Modal.Footer>
			</Modal>
		  </>
        )
    }




    async function fetchmyNFT(){
        let fetchMyNFTs=await contract.fetchMyNFTs();
        console.log(fetchMyNFTs)
        const nfts=await Promise.all(fetchMyNFTs.map(async(i)=>{
            let fetchMyNFTstoken=i.tokenId;
            console.log(fetchMyNFTstoken)
            
            let tokenURI=await contract.tokenURI(fetchMyNFTstoken)
            
            const meta = await axios.get(tokenURI)

            console.log(meta)
            const nft={
                itemId:parseInt(i.itemId),
                tokenId:parseInt(i.tokenId),
                owner:i.owner,
                sell:i.seller,
                sold:i.sold,
                animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/"+parseInt(i.tokenId)+".gif", 
                name: "STUST ROBOTS #"+parseInt(i.tokenId),
                price:parseInt(i.price)/Math.pow(10,18),
                qrcode:"https://gateway.pinata.cloud/ipfs/QmdnBpYR44iw8F9XMwgVwVVJVRqQ2N4DMJHS4rch9zm24R/"+parseInt(i.tokenId)+".png"
                
			}
            console.log(nft)
			return nft
        }))
        // console.log(nfts.itemId)
        setNfts(nfts.filter(nft => nft !== null))
		setLoadingState('loaded') 
		console.log(nfts)
    }
    function showMyNFTs(){
        if (loadingState === 'loaded' && !nfts.length ) {
			return (<h1 className="px-20 py-10 text-3xl">No NFTs owned</h1>)
		  } else {
			return (
					<Row>

									{/*如果有nftdata才顯示*/}
								
						{
							nfts.map((nft, i) => (
                                
                                // nft.owner===address?
                                <Col md={4} className="p-3" >
                                    <div className="card-container" >
                                    {/* onClick={()=>fetchattrubute(nft.tokenId)} */}
                                        <Card key={i}  className="cover" >
											<Card.Img variant='bottom' src={nft.animation_url} className="imgp1"/>
											<div className='word2'><p>{nft.name}</p></div> 
                                                <div className='word3'><p>STUST UNIVERSE</p></div>
											{/* <Card.Title className='text8'>{nft.name}</Card.Title> */}
											
										</Card>
                                            <Card className='back'>
                                            <Card.Img variant='bottom' src={nft.qrcode} className="imgp2"/>
                                                {display_attribute(nft.tokenId)}
                                            </Card>
                                    </div>
                                    
										
                                        
                                        </Col>
                                        // :""
                                
								
							))
						}
                        
                        {/* {
							nfts.map((nft, i) => (
                                
                                nft.owner===address?<Col md={4} className="p-3" >
										<Card key={i} className="card_background">
											<Card.Img variant='bottom' src={nft.animation_url} className="card_background1"/>
											<div className='word2'><p>{nft.name}</p></div> 
											<div className='word3'><p>STUST UNIVERSE</p></div> 
											<Card.Title className='text8'>{nft.name}</Card.Title>
											<Card.Body>
												
												
												
											</Card.Body>
										</Card></Col>:""
                                
								
							))
						} */}
						
						
					</Row>

					
			)
				
					}
    }
   
    
    function Account_display(){
       
       
        return(
            <Alert variant='dark' className='text10'>
                <p className='p1'>
                    Wellet Account:{shortenAddr(address)}
                </p>
                <p>
                    <img src={p12} alt="Background" className='p12'/>
                    Balance:{(1*balance).toFixed(2)}Ethers
                </p>
            </Alert>
        )
       
        
    }

 


    return (
        <div className='background_color1'>
            <br/>
            <br/>
            <br/><br/>
            <Container>

                <Row>
                
                {isClick===false?<h1>Connect Your Wallet</h1>:<Account_display/>}
                </Row>
                <Row className='div16'>
                   
                    {(loadingState === 'loaded' && !nfts.length)?<h1 className="px-20 py-10 text-3xl">No Robots available!</h1>:showMyNFTs()}
                   
                </Row>
            </Container>
            <div className='div12'>
			  	<br/>
				<strong className='text4'>STUST UNIVERSE ROBOTS</strong>
			</div>
            
        </div>
    )
}

export default Account;