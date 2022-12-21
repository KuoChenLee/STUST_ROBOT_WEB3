import '../App';
import {Button,Container,Row,Col,Card,Modal} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import '../Another_Page_Css/Account.css';
import React,{useState,useRef,useEffect} from 'react';
import p12 from '../image/p12.png';
import p13 from '../image/p13.png'
import boxes from '../image/0.gif';


function Account(props){
    const [tokenID,settokenID]=useState([]);
    const [sellprice,setSellPrice]=useState();
    const input1 = useRef(1)
    const [show, setShow] = useState(false);
    const [Attributes,setAttributes]=useState([]);
    const [isClick]=useState(props.isClick);
    const [nfts, setNfts] = useState([]);
    const [box]=useState(props.box);
    const [loadingState, setLoadingState] = useState('not-loaded')
    const [address]=useState(props.address);
    const [balance]=useState(props.balance);
    const [contract]=useState(props.contract);
    const shortenAddr=address=>address.slice(0,4)+"..."+address.slice(-4);
    useEffect(() => { fetchmyNFT() }, [])
    useEffect(() => { fetchattrubute() }, [])
  //  取得屬性元素
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
    // 顯示屬性
    function display_attribute(tokenId){
        const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);
        return(
            <>
            
			<Button className='button'  onClick={handleShow}>
            
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
    // 取得收取到的NFT token
    async function fetchmyNFT(){
        let fetchMyNFTs=await contract.fetchMyNFTs();
        console.log(fetchMyNFTs)
        const nfts=await Promise.all(fetchMyNFTs.map(async(i)=>{
            
            const nft={
                tokenId:i,
                animation_url:"https://gateway.pinata.cloud/ipfs/QmUaZaTMUD1B1vSmgMjn1qvC2Sb76VnuwrASDQgSkaWc9e/"+i+".gif", 
                name: "STUST ROBOTS #"+i,
                qrcode:"https://gateway.pinata.cloud/ipfs/QmdnBpYR44iw8F9XMwgVwVVJVRqQ2N4DMJHS4rch9zm24R/"+i+".png"
                
			}
            console.log(nft)
			return nft
        }))
        // console.log(nfts.itemId)
        setNfts(nfts.filter(nft => nft !== null))
		setLoadingState('loaded') 
		console.log(nfts)
    }
    function diplaybox(){
      const totle=nfts.length;
      console.log(totle)
      return(
        <div>
         
            
              <Row>
              {
              nfts.map((totle)=>(
                <Col key={totle} md={4} className="p-3" >
                  <div className="card-container" >
                  <Card className='card_box'>
                  <Card.Img variant='bottom' src={boxes} className="imgp1"/>
                  
                  <div className='word3'><p>STUST UNIVERSE</p></div>
                  
                </Card>
                  
                  </div>
                                        
                                            
                                            
                </Col>
                ))}
                </Row>
           
          
        </div>
      )
    }
    //顯示收取到的NFT 
    function showMyNFTs(){
      

        if (loadingState === 'loaded' && !nfts.length ) {
			return (<h1 className="px-20 py-10 text-3xl">No NFTs owned</h1>)
		  }
      else if(box===false){
        return(
          <div>
           {diplaybox()}
          </div>
        )
      }
      else if(box===true){
			return (
					<Row>

									{/*如果有nftdata才顯示*/}
								
						{
							nfts.map((nft, i) => (
                                <Col md={4} className="p-3" >
                                    <div className="card-container" >
                                    <Card key={i}  className="cover" >
                                    <Card.Img variant='bottom' src={nft.animation_url} className="imgp1"/>
                                    <div className='word2'><p>{nft.name}</p></div> 
                                    <div className='word3'><p>STUST UNIVERSE</p></div>
                                  </Card>
                                    <Card className='back'>
                                    <Card.Img variant='bottom' src={nft.qrcode} className="imgp2"/>
                                        {display_attribute(nft.tokenId)}
                                        
                                        {sellmytoken(nft.tokenId)}
                                    </Card>
                                    </div>  
                                        </Col>
                                
								
							))
						}
                        
            
						
						
					</Row>

					
			)
				
					}
    }
    // 賣出的功能
   async function sell(input1,token){
    
      console.log(input1);
      console.log(token);
      setShow(false)
      settokenID(token)
      setSellPrice(input1)
      console.log(token)

      // 將價格用WEI計算
      let price=sellprice*Math.pow(10,18);
      // 觸發createMarketplaceItem來賣NFT
      await contract.createMarketplaceItem(
        tokenID,
        price
      )
   }
  //  賣出功能德選單
   function sellmytoken(token){
    // const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(token)
    return (
      <>
        
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sell STUST ROBOT</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <input
              title="Sell Price"
              placeholder="Price"
              ref={input1}
            >
            </input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={()=>{sell(input1.current.value,token)} } >
            Sell Robots
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
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