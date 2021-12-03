import Is from 'react-infinite-scroll-component';
import {useState} from 'react';
import "./styling.css";

import Li from './Li';
import gg from './issues.json';

const GitIssues=()=>{let i=5;const [x,y]=useState(gg.slice()); const [a,b]=useState(x.slice(0,i)); const [p,u]=useState(true);
			const gx=()=>{if(a.length>=30){u(false);return;} setTimeout(()=>{i=i+5;b(a.concat(x.slice(0,i)));},1600);};
		 


	return(<div className="grid"><ul><Is className="grid2" dataLength={a.length} hasMore={p} next={gx} height={400} loader={<h6>loading ...</h6>} endMessage={<h6>ended</h6>} > {a.map((f,lp)=><Li key={f.id+lp} state={f.state} user={f.user.login} number={f.number} issue={f.title} style={{width:"40px", border:"1px solid black", margin:"12px", padding:"13px", textAlign:"center"}} />)}</Is></ul></div>);};

export default GitIssues;