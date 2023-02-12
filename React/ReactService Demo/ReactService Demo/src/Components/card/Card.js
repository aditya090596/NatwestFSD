import React from 'react';
import Media from 'react-bootstrap/Media'
import Button from 'react-bootstrap/Button'
import addNews from '../../services/cardService';
import Collapse from 'react-bootstrap/Collapse';

class Card extends React.Component{
  constructor(){
    super();
    this.myMethod = this.myMethod.bind(this);
    this.state = {
      showText:false
    }
  }
  myMethod = () => {
     this.setState({ showText:true});    
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
  <h5>{this.props.repo.title}
<a onClick = {this.myMethod}  >...see more</a>
<Collapse in={this.state.showText}>
        <div>
           <span>
             {this.props.repo.description}        
           </span>
        </div>
      </Collapse>

  </h5>
 
  <footer className="blockquote-footer">
      {this.props.repo.author}
      
      </footer>
     
</Media.Body>
<Button variant="success" onClick = {() => addNews.handleReadLaterClick(this.props.repo)} >ReadLater</Button>
</Media>
<br></br>
<br></br>
    </div>
    
    
  }
}
export default Card;
