import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from 'axios'; //for http requests from the pixbay API
import ImageResults from '../image-results/ImageResults'


class Search extends Component {

state = {
    searchText: "", //state for text TextField
    amount: 10, //amount of results in SelectField
    apiURL : "https://pixabay.com/api/",
    apiKey: "9250591-07aa374105cfd304218306863"  , // ( log in to pixabay)
    images: []
}



//willbe searching the api with the axios.get() call simaltaneously while the user is typing
onTextChange = (event) =>{
  const val = event.target.value;
  this.setState({[event.target.name]: val },() => {
  if(val === ''){
      this.setState({images: []});//set images to null when search field is empty
  }else{
    //target.name =  setState(searchText == target.value
        axios
        .get(`${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}
          &image_type=photo&per_page=${this.state.amount}`
        )//wrap in backticks since its a template literal http string
            .then(result => this.setState({images: result.data.hits})) //promise to return a result which sets
             .catch(err => console.log(err))             // the empty images array in state to all the 'hits' from the API response (look at API)
           }
  });
};

onAmountChange = (e, index, value) => this.setState({amount: value});


  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField className = "textField"
          name = "searchText"
          value = {this.state.searchText}
          onChange ={this.onTextChange}
          floatingLabelText = "Search for Images"
          fullWidth={true}
        />

        <SelectField
         className = "entryField"
         name = "amount"
         floatingLabelText = "Amount"
         value = {this.state.amount}
         onChange = {this.onAmountChange}

        >

          <MenuItem value={5} primaryText = "5"/>
          <MenuItem value={10} primaryText = "10"/>
          <MenuItem value={20} primaryText = "20"/>
          <MenuItem value={40} primaryText = "40"/>
          <MenuItem value={80} primaryText = "80"/>
        </SelectField>
        <br/>
        {this.state.images.length > 0 ? (<ImageResults images = {this.state.images}/>) :  null}
      </div>
    );
  }

}

export default Search;
