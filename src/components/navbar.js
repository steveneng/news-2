import React,{Component} from 'react';

class Navbar extends Component{

    state={
        class:"item",
        term:"",
        clickedItem:""
    }

    onActive = (event)=>{
        // if(event.target.className==="item"){
        //     event.target.className="item active"
        //     console.log(this.state.class)
        // }
        // else{
        //     event.target.className="item"
        // }
        console.log(event.target.id)
        this.setState({
            clickedItem: event.target.id
        },()=>{this.props.onClick(this.state.clickedItem)})

        console.log(this.state.clickedItem)

        // this.props.onClick(this.state.clickedItem)
    }

    onSearch = (event)=>{
        event.preventDefault()
        this.props.onSearchTerm(this.state.term)
        console.log(this.state.term)
        
    }


    render(){
    return(
        <div className=" ui pointing ">
            <div className="ui container  menu  ">
            <a id="top-headlines" onClick={this.onActive} className={this.state.class}>
            Top Headlines
            </a>
            {/* <a id="everything" onClick={this.onActive} className={this.state.class}>
                Everything
            </a>
            <a onClick={this.onActive} className={this.state.class}>
                Friends
            </a> */}
            <div className="right menu">
                <form onSubmit={this.onSearch} className={this.state.class}>
                    <div className="ui transparent icon input">
                        <input type="text" value ={this.state.term} onChange ={(e)=>{this.setState({term:e.target.value})}}/>
                        <i className="search link icon"></i>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}}
export default Navbar