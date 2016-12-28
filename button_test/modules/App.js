import React from 'react'
 
export default class MyButton extends React.Component{
  constructor() {
	  super();
	  this.state = {
		  visible:false,
		  items : [{text:1},{text:2},{text:3}],
	  }
	  
  };
  showModal() {
    this.setState({
      visible: true,
    });
  };

  render() {
	if(!this.state.visible) {
    return (    
        <button onClick={this.showModal.bind(this)}>Open</button>
	)
	}else {
			var menus = this.state.items.map((item,index)=>{return(<p key={index} onClick={() => {this.setState({currentIndex: index})}}>{item.text}</p>)})
			console.log(this.state.currentIndex);
			return (this.state.currentIndex != undefined ? (
			<div>{menus[this.state.currentIndex]}</div>)
			:
			(<div>{menus}</div>)
			)
	  } 

  }
}