import '../App';
import {Button,Container,Row,Col,Navbar,Nav,Carousel,Accordion,Table,iframe,Image,Figure} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import '../Another_Page_Css/Home.css';
import {  ethers } from "ethers";
import Web3Modal from "web3modal";
import React,{useState,useEffect} from 'react';

function Home(){
    // const [address,setAddress]=useState('');
    // const [balance,setBalance]=useState('');
    // const [contract,setContract]=useState({});
    // const [ens,setEns]=useState('');
    // const [isClick,setClick]=useState(false);
    // const [notisClick,setNotClick]=useState(true);
    // const shortenAddr=addr=>addr.slice(0,4)+"..."+addr.slice(-4);//取前四後四的Addr
    // function myFunction() {
    //   let elem = document.querySelectorAll(".drop-down");
    //   elem.forEach(element=>{
    //       element.addEventListener("click", e =>{
    //           console.log(e.target.innerHTML);
    //       });
    //   })
    // }
    // myFunction();
    
    return(
      <div className="App">
        {/* 動態圖展示 */}
        <div className='div2'>
          <Carousel fade>
              <Carousel.Item>
                <iframe src="https://kuochenlee.github.io/background_1/" width="2200" height="720"></iframe>
              <Carousel.Caption>     
              <h3 className='text1'>STUST ROBOTS MINT </h3>
              <p className='text1'>You can mint a NFT for 0.003 Ethers</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <iframe  src="https://kuochenlee.github.io/background_9/" width="2200" height="720"></iframe>
              
              <Carousel.Caption>
                <h3 className='text1'>DEFFERENT ATTRUBUTE</h3>
                <p className='text1'>You can get defferent attribute NFT.</p>
              </Carousel.Caption>
              </Carousel.Item>
              
              </Carousel>
        </div>
        {/* How to get Robots? 相關內容 */}
        <div className='div10'>
          <Container className='scale-in-top'>
            
          <h2 className='text2'>How to get Robots?</h2>
              <div className="alert1">
              
              
              <div>
                <Alert className="alert2" variant="secondary"> 
                  
                      <h1 className='text3'>
                        Get Your Own Robots
                      </h1>
                      <h6 className='text3'>
                      Robotos is a collection of droid characters designed by Pablo Stanley and minted as NFTs. They are constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors.
                        First way.You need to connect wallet.And get some Ethers coins to buy a Blind Box.Open it .And you get a Robot!
                      </h6>
                      <a href='http://localhost:3000/Mint'>
                      <Button className='button10'><span>Go to buy a Blind Box</span></Button>
                      </a>
                      <h6 className='text3'>
                        Second way.If you want to choise Robot which you like.You can click this Button and go to the shop buy the Robot which you like.
                      </h6>
                      <a href='http://localhost:3000/Robot_Shop'>
                      <Button className='button10'><span>Go to the shop</span></Button>
                      </a>
                      <br/>
                      <br/>
                      <iframe src="https://kuochenlee.github.io/Robot_8/" width="700" height="690"/>
                </Alert>
                </div> 
              
                      
              </div>
              
            
          </Container>
        </div>
        {/* About 相關內容 */}
        <div className='div7'>
          <Container>
          <h1 className='text7'>About</h1>
            <Row>
             <Col>
                <iframe className='fade-in-top' src="https://kuochenlee.github.io/Blind_Box_picture/" width="560" height="660"/>
              </Col>
              <Col>
                
                <p>
                Yan Youxian pointed out that since the 4th, the Chinese Navy has maintained 13 combat ships, intelligence search ships, etc. 24 nautical miles away from my country's adjoining area every day; The J-11, J-16, and supply aircraft, such as the Air Police 500 and other series of aircraft, have implemented multi-ship and multi-model deterrence in the Taiwan Strait.Lieutenant General Ye Guohui, Deputy Chief of the Planning Office of the Ministry of National Defense, further explained that in terms of the actions of the communist army, the communist army announced the opening of 6 no-navigation areas on 8/2, adding a 7th location on 8/3, launching missiles on 8/4, and launching missiles on 8/4- On 8/7, joint military operations and drones harassed our outer islands; for the national army, 8/2 dispatched troops to deal with the communist army, 8/3 enhanced alertness, 8/4 completed air defense units, 8/4-8 /7 Dispatched aircraft and ships should respond and use post-bomb warnings, and combat readiness troops should be on alert.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        {/* FAQ 問題解答查詢 */}
        <div className='div4'>
          <h1 className='text7'>Frequently Asked Questions</h1>
          <Col>
            <h2 className='text1'>What are Robotos?</h2>
            <p className='text1'>Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley and minted as NFTs on the Ethereum blockchain. The 1st generation of 10,000 droids will be constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Robotos have different body types, some rarer than others, and... there are rumors that you could find humans pretending to be robots too. Is it true? 🤔</p>
                  </Col>
  
                  <Col>
            <h2 className='text1'>What are Robotos?</h2>
            <p className='text1'>Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley and minted as NFTs on the Ethereum blockchain. The 1st generation of 10,000 droids will be constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Robotos have different body types, some rarer than others, and... there are rumors that you could find humans pretending to be robots too. Is it true? 🤔</p>
                  </Col>
  
                  <Col>
            <h2 className='text1'>What are Robotos?</h2>
            <p className='text1'>Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley and minted as NFTs on the Ethereum blockchain. The 1st generation of 10,000 droids will be constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Robotos have different body types, some rarer than others, and... there are rumors that you could find humans pretending to be robots too. Is it true? 🤔</p>
                  </Col>
  
                  <Col>
            <h2 className='text1'>What are Robotos?</h2>
            <p className='text1'>Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley and minted as NFTs on the Ethereum blockchain. The 1st generation of 10,000 droids will be constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Robotos have different body types, some rarer than others, and... there are rumors that you could find humans pretending to be robots too. Is it true? 🤔</p>
                  </Col>
  
                  <Col>
            <h2 className='text1'>What are Robotos?</h2>
            <p className='text1'>Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley and minted as NFTs on the Ethereum blockchain. The 1st generation of 10,000 droids will be constructed from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and colors. Robotos have different body types, some rarer than others, and... there are rumors that you could find humans pretending to be robots too. Is it true? 🤔</p>
                  </Col>
        </div>
        {/* 此網頁客服Email twitter DC */}
        <div className='div8'>
          <Container>
            <Row>
            <h6 className='text2'>
              DM us on Twitter or email hello@stickmentoys.com if you want to get in touch - we can't promise a reply to all messages but we see you, we hear you.
              DM us on Twitter or email hello@stickmentoys.com if you want to get in touch - we can't promise a reply to all messages but we see you, we hear you.
              DM us on Twitter or email hello@stickmentoys.com if you want to get in touch - we can't promise a reply to all messages but we see you, we hear you.
            </h6>
            </Row>
          </Container>
        </div>
        
      </div>
      
    );
  }

  export default Home;