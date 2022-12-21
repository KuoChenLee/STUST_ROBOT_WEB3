import '../App';
import {Button,Container,Row} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import '../Another_Page_Css/Home.css';
// import {  ethers } from "ethers";
// import Web3Modal from "web3modal";
import React from 'react';
import pi20 from '../image/20.gif';
import pi3 from '../image/3.gif';
import G7 from '../image/G7.gif';
import G12 from '../image/G12.gif';
import G15 from '../image/G15.gif';
import G20 from '../image/G20.gif';
function Home(){
    
    return(
      <div className="App">
        {/* 首頁圖 */}
        <div className='Home_background'>
          <br/>
          <br/>
          <br/>
          <br/>
          
          
          
          <img className='Home_G7' src={G7}/>
          <img className='Home_G12' src={G12}/>
          <img className='Home_G15' src={G15}/>
          
          
          <img className='Home_G20' src={G20}/>
          <h1><span  className='Home_h1'>STUST </span><span className='Home_h3'>NFT</span><br/> <span className='Home_h2'>Universe</span> </h1>
          <a href='http://localhost:3000/Robot_Shop'><button className='Home_button'>Go to Robots Shop</button></a>
          <br/>
          <br/>
        </div>
        {/* How to get Robots? 相關內容 */}
        <div className='Get_Robots_div_background'>
          <Container>
            
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
          <Alert className='alert_background'>
          <h1 className='About_h1'>About</h1>
          <img className='About_img' src={pi3} />
          <br/>
          <br/>
          <br/>
                <p className='About_words'>
                The NFTs designed by this platform have value, and each NFT <br/>
                has special attributes. This platform is specially built for  <br/>
                students, hoping to teach students how to achieve meta-transactions, <br/>
                and can also sell their own minted NFTs (limited to the NFTs mintedon <br/>
                this platform) on this platform NFT platform, learning in advance for <br/>
                the upcomingWeb3 network era. This platform only charges minting fees <br/>
                , and does not charge additionaltransaction fees
                </p>
                <br/>
                <br/>
                <br/>
                <br/>
          </Alert>
          
        
        {/* FAQ 問題解答查詢 */}
        <div className='FQA_background'>
          <Alert className='FQA_background'>
          <h1 className='text7'>Frequently Asked Questions</h1>
          
          <h2 className='text1'>What is STUST NFT Universe?</h2>
          <br/>
          <p className='FQA_words'>
          STUST NFT Universe is an NFT Web3 platform that can be used<br/>
          by students and teachers of Nantai University of Scienc and<br/>
          Technology, and the minted NFT can be used as the identity <br/>
          authentication of Nantai teachers and students.
          </p>
          

               
          <h2 className='text1'>What are STUST ROBOTS?</h2>
          <br/>
          <p className='FQA_words'>
          STUST ROBOTS is an NFT minted in the STUST NFT Universe, <br/>
          each NFT has unique properties, and since it is made with<br/>
           generative art, each has a special value.
          </p>
              

             
          <h2 className='text1'>What do I get?</h2>
          <br/>
          <p className='FQA_words'>
          You can get special discounts from school affiliate merchants,<br/>
           up to 10% off, and can be used as identity verification as <br/>
           proof of our students.
          </p>
          

             
          <h2 className='text1'>How do I get my STUST Robots?</h2>
          <br/>
          <p className='FQA_words'>
          You can view the STUST ROBOTS you have received by visiting<br/>
           the avatar, and you can view the attributes of the NFT you <br/>
           have received, and you can also put the NFT you have received<br/>
            on the platform for sale
          </p>
           

             
          <h2 className='text1'>What is an NFT?</h2>
          <br/>
          <p className='FQA_words'>
          NFT stands for "Non-fungible token," which means that it's a<br/>
           unique, digital item with blockchain-managed ownership that<br/>
            users can buy, own, and trade. Some NFT's fundamental function<br/>
             is to be digital art. But they can also offer additional <br/>
             benefits like exclusive access to websites, event tickets,<br/>
              game items, and ownership records for physical objects. <br/>
              Think of it as a unique piece of art that can also work as<br/>
               a "members-only" card. Robotos works like this.<br/>
          </p>

          <h2 className='text1'>How do I NFT?</h2>
          <br/>
          <p className='FQA_words'>
          New to NFTs? No worries, here are some steps on what you need to <br/>
          do to get your Roboto.<br/>

          Download the metamask.io extension for the Chrome/Brave browser or app<br/>
           on mobile. This will allow you to make purchases with Ethereum and<br/>
          can be found in the extensions tab. <br/>
          If you are on mobile, you must use the Metamask App Browser<br/>
          You can purchase Ethereum through the Metamask Wallet using <br/>
          Wyre or Send Ethereum from an exchange like Coinbase.<br/>
          Click on Connect at the top of the page and connect your Metamask.<br/>
           Once joined, you will be able to purchase the NFTs in the mint section. <br/>
            You will be prompted to sign your transaction. FYI, there will be a<br/>
             fee associated with every transaction related to gas prices.<br/>
          Once you have made your purchase, your Roboto NFTs will be viewable<br/>
           in your wallet and on OpenSea.
          </p>
          </Alert>
         
                 
        </div>
        {/* 此網頁客服Email twitter DC */}
        <div className='div8'>
          <Container>
            <Row>
            <h6 className='text2'>
              DM us on Twitter or email hello@stickmentoys.com if you want to get in touch - we can't promise a reply to all messages but we see you, we hear you.
             
            </h6>
            </Row>
          </Container>
        </div>
        
      </div>
      
    );
  }

  export default Home;