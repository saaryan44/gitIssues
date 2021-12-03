
function Li({issue,state,user,number}){return(<li className="grud"><h4>{issue}</h4><span><b>status: </b>{state}</span><h6>#{number} opened by {user}</h6></li>);}

export default Li;