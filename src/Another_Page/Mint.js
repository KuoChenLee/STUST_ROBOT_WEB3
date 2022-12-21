import '../App';
import {Container,Row,Col} from 'react-bootstrap';
import '../Another_Page_Css/Mint.css';
import box from '../image/0.gif';
import React,{useState} from 'react';
  
  

  function Mint(props){

  const [address]=useState(props.address);

  const [contract]=useState(props.contract);

  
  const [notisClick]=useState(props.notisClick);

  //mint 盲盒處理 
  async function mint(){
	//盲盒的價格
    const mintPrice = await contract.mintPrice();
	//觸發合約mint功能
    await contract.mintSNMeta(
      1
      ,{value:mintPrice.toString()}
      );
	  
   
  }
  //查看網頁的重新更新
  console.count()
 
  
	return(
		<div className='dvi1'>
			
			 {/* Mint button 合約 */}
			 <div className='div6'>
				<div>
				<br />
			<br />
			<br />
				<Container className='div17'>
					<Col>
						<h1 className='text2'>Mint Blind Box</h1>
						<h6 className='text2'>
						And you can get blind box
						</h6>
					</Col>
					<Col className='roll-in-top'>
						<img src={box} width="600" height="650" className='blindBox'/>
					</Col>
						
					<Col>
					<br/>
						
					{/* 假如未觸發connect wallet button ，button 不能按 */}
						
						<button disabled={notisClick}  className={address?'mintbutton':'mintbutton1'} onClick={()=>mint()}>
							<span>
							Mint Blind Box
							</span>
						</button>
						<br/>
						<br/>
					</Col>
					
					<Col>
					
					</Col>
				
					
				</Container>
				</div>
      		</div>

			{/* 盲盒說明 */}
			<div className='div3'>
				<h1>How To Mint Blind Box?</h1>
				<Row>
					<h4 className='mint-text'>1.You need to Click <img src={require('../image/p3.png')} alt="Background"/> ➜ <img src={require('../image/p4.png')} alt="Background"/>
					<br/>
					2.You can see <img className='img1' src={require('../image/p5.png')} alt="Background"/> this two button open.
					<br/>3.CLick the red Button.You can see <img className='img2' src={require('../image/p6.png')} alt="Background"/>.
					<br/>Click confirm and wait a minute.
					<br/>
					<br/>
					4.You can go to opensea to see did you receive the Blind Box.
					<br/>
					<br/>If you recieve the Blin Box like this <img className='img3' src={require('../image/p7.png')} alt="Background"/>
					<br/>
					<br/>
					5.You can open the Blind Box.Click this <img  src={require('../image/p8.png')} alt="Background"/>.
					<br/>Wait a minute .And Reorganize OpenSea .
					<br/>
					<br/>
					6.You can see what Robot you get.Like this <img  className='img3' src={require('../image/p9.png')} alt="Background"/>
					<br/>
					<br/>
					7.And check your Attribute. <img className='img3' src={require('../image/p10.png')}alt="Background"/>
					</h4>
				</Row>
			</div>
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