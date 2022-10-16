import '../App';
import {Button,Container,Row,Col,Navbar,Nav,Carousel,Accordion,Table,iframe,Image,Figure} from 'react-bootstrap';
import '../Another_Page_Css/Attribute.css';
import React,{useState} from 'react';

  function Attribute(){

	return(
		<div className='div9'>
      <br />
      <br />
      <br />
      
			<h1 className='text7'>Attribute</h1>
			<Container>
				<Col className='bounce-in-right'>
              <iframe src="https://kuochenlee.github.io/background_5/" width="580" height="650"/>
        </Col>
				<Col>
					<Row>
					<h4>Each NFT is algorithmically generated by combining 170+ unique traits with varying rarity across categories.</h4>
				</Row>
				<Row>
        {/* 屬性有多少種 */}
        <Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Types</th>
                        <th></th>
                        <th>Variations</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td>20</td>
                        <td>Total Robots</td>
                        <td>20</td>
                        <td>Head Tops</td>
                      </tr>
                      <tr>
                      <td></td>
                        <td>Common</td>
                        <td>Robotos</td>
                        <td>20</td>
                        <td>Eyes</td>
                        
                      </tr>
                      <tr>
                      <td></td>
                        <td>Less Common</td>
                        <td>Helmetos</td>
                        <td>10</td>
                        <td>Helmets</td>
                      
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>20</td>
                        <td>mouth</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>10</td>
                        <td>ears</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>10</td>
                        <td>Arms</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>5</td>
                        <td>backpack</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>5</td>
                        <td>body</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>3</td>
                        <td>Head Types</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>20</td>
                        <td>equipment</td>
                      </tr>
                    </tbody>
          </Table>
				</Row>
				</Col>
				
			</Container>
			<div className='diva1'>
			  <br/>
			  	<a href='http://localhost:3000/Robot_Shop'>
                    <button className='button4'>Go to the shop ➝</button>
          </a>
			  	<br/>
				<strong className='text4'>avdddeeww UNIVERSE ROBOTS</strong>
			</div>
		</div>
		
	);
}

export default Attribute;