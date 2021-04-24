import React from "react"
import {ContactList} from './my_work/ContactList'
import {SingleDetails} from './my_work/SingleDetails'
class App extends React.Component{
	constructor(props)
	{
		super(props)
		this.state={
		 ContactList:ContactList,
		 SingleDetails:SingleDetails,
		 indvidual:[]// ??? 
		}
this.detailHandler=this.detailHandler.bind(this)
	}
	detailHandler(clicked_id){
		let{indvidual}=this.state

		let each=SingleDetails.filter(x=>{
			return  x.id===clicked_id
		})

		this.setState({// how ??
				indvidual:each
			})
		setTimeout(()=>{
           console.log(this.state.indvidual) 

		},500)

		// gives [] []
		console.log(each)  // yes gives daata . yes .

	// is there issue in initialiing state ?? 
	}
                            
	render(){
		const{indvidual}=this.state
		let m 
		if(indvidual.length>0)
		
		{	 m=indvidual.map(x=>{
				return <><li>{x.phone}</li>
                    <li>{x.email}</li>
					</>
			})
		}
			return(
			<>
			<h1>contact list</h1>
			<ul>
			{this.state.ContactList.map(c=>{
				return <li key ={c.id}  onClick={()=>this.detailHandler(c.id)} style={{"cursor":"pointer"}}>{c.name}</li>
				})}
           </ul>
           {m}
           

			</>)
	}
}
export default App