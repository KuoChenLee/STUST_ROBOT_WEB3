import '../App';
import {Button,Container,Row,Col,Navbar,Nav,Carousel,Accordion,Table,iframe,Image,Figure} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import '../Another_Page_Css/Home.css';
import {  ethers } from "ethers";
import Web3Modal from "web3modal";
import React,{useState,useEffect} from 'react';
import pi20 from '../image/20.gif';
import pi3 from '../image/3.gif';
function Home(){
    
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
        <div className='Get_Robots_div_background'>
          <Container className='scale-in-top'>
            
          <h1 className='text2'>How to get Robots?</h1>
              <div className="alert1">
              
              
              <div>
                <Alert className="alert2" variant="secondary"> 
                  
                      <h1 className='text7'>
                        Get Your Own Robots
                      </h1>
                      <span className='Get_Robots_words'>
                      Robotos is a collection of droid characters designed by Pablo Stanley and minted as NFTs.<br/>
                      They are constructed from various metal outfits, tin faces, digital accessories, top pieces,<br/>
                      faces, backpacks, arms, and colors.First way.You need to connect wallet.And get some Ethers <br/>
                      coins to buy a Blind Box.Open it .And you get a Robot!
                      </span>
                      <br/>
                      <a href='http://localhost:3000/Mint'>
                      <Button className='button10'><span className='text7'>Go to buy a Blind Box</span></Button>
                      </a>
                      <br/>
                      <span className='Get_Robots_words'>
                      Second way.If you want to choise Robot which you like.You can click this Button and go to<br/>
                      the shop buy the Robot which you like.
                      </span>
                      <br/>
                      <a href='http://localhost:3000/Robot_Shop'>
                      <Button className='button10'><span className='text7'>Go to the shop</span></Button>
                      </a>
                      <br/>
                      <br/>
                      <img src={pi20} width="700" height="690" className='Get_Robots_img'/>
                </Alert>
                </div> 
              
                      
              </div>
              
            
          </Container>
        </div>
        {/* About 相關內容 */}
        <div className='div7'>
          <Alert className='alert_background'>
          <h1 className='About_h1'>About</h1>
          <img className='About_img' src={pi3} />
          
                <p className='About_words'>
                Yan Youxian pointed out that since the 4th, the Chinese Navy has maintained 13 combat ships,<br/>
                intelligence search ships, etc. 24 nautical miles away from my country's adjoining area every<br/>
                day; The J-11, J-16, and supply aircraft, such as the Air Police 500 and other series of aircraft,<br/>
                have implemented multi-ship and multi-model deterrence in the Taiwan Strait.Lieutenant General Ye<br/>
                Guohui, Deputy Chief of the Planning Office of the Ministry of National Defense, further explained<br/>
                that in terms of the actions of the communist army, the communist army announced the opening of<br/>
                6 no-navigation areas on 8/2, adding a 7th location on 8/3, launching missiles on 8/4, and launching<br/>
                missiles on 8/4- On 8/7, joint military operations and drones harassed our outer islands; for the<br/> 
                national army, 8/2 dispatched troops to deal with the communist army, 8/3 enhanced alertness,<br/>
                8/4 completed air defense units, 8/4-8 /7 Dispatched aircraft and ships should respond and use<br/>
                post-bomb warnings, and combat readiness troops should be on alert.
                </p>
          </Alert>
          {/* <Container>
          <h1 className='text7'>About</h1>
          <div>
          <Row>
               
            </Row>
            <Row>
            <div className='div12'>
                <p className='text7'>
                Yan Youxian pointed out that since the 4th, the Chinese Navy has maintained 13 combat ships, intelligence search ships, etc. 24 nautical miles away from my country's adjoining area every day; The J-11, J-16, and supply aircraft, such as the Air Police 500 and other series of aircraft, have implemented multi-ship and multi-model deterrence in the Taiwan Strait.Lieutenant General Ye Guohui, Deputy Chief of the Planning Office of the Ministry of National Defense, further explained that in terms of the actions of the communist army, the communist army announced the opening of 6 no-navigation areas on 8/2, adding a 7th location on 8/3, launching missiles on 8/4, and launching missiles on 8/4- On 8/7, joint military operations and drones harassed our outer islands; for the national army, 8/2 dispatched troops to deal with the communist army, 8/3 enhanced alertness, 8/4 completed air defense units, 8/4-8 /7 Dispatched aircraft and ships should respond and use post-bomb warnings, and combat readiness troops should be on alert.
                </p>
                </div>
            </Row>
          </div>
           
          </Container> */}
        </div>
        {/* FAQ 問題解答查詢 */}
        <div className='FQA_background'>
          <Alert className='FQA_background'>
          <h1 className='text7'>Frequently Asked Questions</h1>
          
          <h2 className='text1'>What are Robotos?</h2>
          <br/>
          <p className='FQA_words'>
            Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley and<br/>
            minted as NFTs on the Ethereum blockchain. The 1st generation of 10,000 droids will be constructed <br/>
            from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and <br/>
            colors. Robotos have different body types, some rarer than others, and... there are rumors that you <br/>
            could find humans pretending to be robots too. Is it true? 🤔
          </p>
          

               
          <h2 className='text1'>What are Robotos?</h2>
          <br/>
          <p className='FQA_words'>
            Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley and<br/>
            minted as NFTs on the Ethereum blockchain. The 1st generation of 10,000 droids will be constructed <br/>
            from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and <br/>
            colors. Robotos have different body types, some rarer than others, and... there are rumors that you <br/>
            could find humans pretending to be robots too. Is it true? 🤔
          </p>
              

             
          <h2 className='text1'>What are Robotos?</h2>
          <br/>
          <p className='FQA_words'>
            Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley and<br/>
            minted as NFTs on the Ethereum blockchain. The 1st generation of 10,000 droids will be constructed <br/>
            from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and <br/>
            colors. Robotos have different body types, some rarer than others, and... there are rumors that you <br/>
            could find humans pretending to be robots too. Is it true? 🤔
          </p>
          

             
          <h2 className='text1'>What are Robotos?</h2>
          <br/>
          <p className='FQA_words'>
            Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley and<br/>
            minted as NFTs on the Ethereum blockchain. The 1st generation of 10,000 droids will be constructed <br/>
            from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and <br/>
            colors. Robotos have different body types, some rarer than others, and... there are rumors that you <br/>
            could find humans pretending to be robots too. Is it true? 🤔
          </p>
           

             
          <h2 className='text1'>What are Robotos?</h2>
          <br/>
          <p className='FQA_words'>
            Robotos is a collection of algorithmically generated droid characters designed by Pablo Stanley and<br/>
            minted as NFTs on the Ethereum blockchain. The 1st generation of 10,000 droids will be constructed <br/>
            from various metal outfits, tin faces, digital accessories, top pieces, faces, backpacks, arms, and <br/>
            colors. Robotos have different body types, some rarer than others, and... there are rumors that you <br/>
            could find humans pretending to be robots too. Is it true? 🤔
          </p>
          </Alert>
          
                 
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