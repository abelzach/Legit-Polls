import React from 'react';
import Create from './Create'
import Participate from './Participate'
import {Link} from 'react-router-dom'
import './App.css'
import Img from '../picc.jpg'
function Home() {
  return (  
    
    <React.Fragment>   
      <h1 align="center" style={{color: "darkblue"}}>Legit Polls </h1> 
      <h3 align="center" style={{color: "mediumslateblue"}}>By Epsilon_Codinators </h3>
      <div className="container">
      <div class="row">
        <div class="column">
        <Link to="/create">
          <center><Create /></center>
        </Link>
        </div>
        <div class="column">
        <Link to="/polls">
          <center><Participate /></center>
        </Link>
        </div>
      </div>       
      </div>
        <p1>
          <h6 style={{color: "blue"}}>During the lockdown when colleges and schools were unable to conduct offline exams as usual but they never gave out a formal notice saying that offline exams cannot be conducted and we were always on the edge on whether to study or not.</h6>
          <h6 style={{color: "blue"}}>I remember filling out plenty of polls on the topic that exams should be cancelled or not. On one regular online class i asked my teacher the polls all came to the conclusion that semester exams should be cancelled but the teacher gave me a straight reply that such polls cannot be trusted and are always maanipulated.</h6>
          <h6 style={{color: "blue"}}>This is one of the reasons why my team has come up with Legit Polls a ethereum based blockchain dapp.</h6>
        </p1>
        <p2>
          <h6 style={{color: "purple"}}>Using Ethereum blockchain gave our poll system a huge advantage</h6>
          <ol>
            <li>The blockchain technology allows for verification without having to be dependent on third-parties.</li>
            <li>The data structure in a blockchain is append-only. So, the data cannot be altered or deleted.</li>
            <li>The transactions stored in the blocks are contained in millions of computers participating in the chain. Hence it is decentralized. There is no possibility that the data if lost cannot be recovered.</li>
            <li>The transactions that take place are transparent. The individuals who are provided authority can view the transaction.</li>
            <li>Since various consensus protocols are needed to validate the entry, it removes the risk of duplicate entry or fraud.</li>
            <li>All the transactions and data are attached to the block after the process of maximum trust verification. There is a consensus of all the ledger participants on what is to be recorded in the block.</li>
          </ol>
          <h6 style={{color: "darkblue"}}>These are just some of the features of blockchain. Integrating blockchain has not only helped our poll system become more secure it has made it more reliable in every aspect</h6>

        </p2>
        <p3>
          <h6 style={{color: "brown"}}>An opinion poll, often simply referred to as a poll or a survey, is a human research survey of public opinion from a particular sample.It is the collective opinion of the people of a society or state on an issue or problem. ... For the first time, it became important what people thought as forms of political contention changed. Democracy requires public opinion because it derives authority from the public.</h6>
          <h6 style={{color: "brown"}}>Legit polls helps in ease of data gathering.It provides hassle free automation in data handling and input.And most importantly unlinke other polls it provides us with secure and reliable results.</h6>
          
        </p3>
        <div> 
				<center>
					<img src= {Img} alt="pic" />
				</center>
			</div>
    </React.Fragment>
  );
}

export default Home;