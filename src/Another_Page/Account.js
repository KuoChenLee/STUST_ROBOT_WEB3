import '../App';
import {Button,Container,Row,Col,Navbar,Nav,Carousel,Accordion,Table,iframe,Image,Figure,Card,Form,FloatingLabel,Modal} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../Another_Page_Css/Account.css';
import {  ethers } from "ethers";
import Web3Modal, { PROVIDER_WRAPPER_CLASSNAME } from "web3modal";
import axios from 'axios';
import React,{useState,useRef,useEffect} from 'react';
import contractaddress from'../contractaddress.json';
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
  const contractAddr=contractaddress.contractaddr;
  const abi=ABI.abi;
  const web3Modal = new Web3Modal({
    network: "Goerli", // testnet
    providerOptions: {} 
  });

function Account(props){
    const [address,setAddress]=useState(props.address);
    const [balance,setBalance]=useState(props.balance);
    const [contract,setContract]=useState(props.contract);
    const shortenAddr=address=>address.slice(0,4)+"..."+address.slice(-4);
    
    
    
    function Account_display(){
       
       
        return(
            <Alert variant='dark'>
                {shortenAddr(address)}
                <hr/>
                {(1*balance).toFixed(2)}Ethers
            </Alert>
        )
    }
    return (
        <div className='div15'>
            <br/>
            <br/>
            <br/><br/>
            <Container>

                <Row>
                    <Account_display/>
                </Row>
                <Row className='div5'>
                    {/* <Router>
                        <Link to="/have">已擁有</Link>
                        <Routes>
                            <Route path="/have" element={<have/>}/>
                        </Routes>
                    </Router> */}
                    <h1>Hi</h1>
                </Row>
            </Container>
            
            
        </div>
    )
}

export default Account;