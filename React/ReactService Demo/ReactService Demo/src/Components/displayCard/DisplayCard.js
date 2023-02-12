import React from 'react';
import Media from 'react-bootstrap/Media'
import Button from 'react-bootstrap/Button'
import addNews from '../../services/cardService';
import Collapse from 'react-bootstrap/Collapse';

class DisplayCard extends React.Component{
  constructor(){
    super();
  }

  render(){
   
    
    return <div>
      <Media as="li">
<img
  width={64}
  height={64}
  className="mr-3"
  src={this.props.repo.urlToImage} 
  alt={this.props.repo.title}
/>
<Media.Body>
  <h1>{this.props.repo.title}</h1>
  <br></br>
  <h4>{this.props.repo.content}</h4>
  <a href = {this.props.repo.url}>{this.props.repo.url}</a>
 
  <footer className="blockquote-footer">
      {this.props.repo.author}
      
      </footer>
     
</Media.Body>

</Media>
<br></br>
<br></br>
    </div>
    
    
  }
}
export default DisplayCard;
