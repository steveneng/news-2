import React,{Component} from 'react';
import './stylesheet.css'

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
        console.clear()
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
        <div className=" ui pointing Searchbar">
            <div className="ui container  menu  ">
            <a  onClick={this.onActive} className={this.state.class}>
            Top Headlines
            </a>
            <a id="business" onClick={this.onActive} className={this.state.class}>
            Business
            </a>
            <a id="science" onClick={this.onActive} className={this.state.class}>
            Science
            </a>
            <a id="technology" onClick={this.onActive} className={this.state.class}>
            Technology
            </a>
            <div className="right menu">
                <form onSubmit={this.onSearch} className={this.state.class}>
                    <div className="ui transparent icon input">
                        <input type="text" value ={this.state.term} onChange ={(e)=>{this.setState({term:e.target.value})}}/>
                        <i className="search link icon" onClick={this.onSearch}></i>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}}
export default Navbar