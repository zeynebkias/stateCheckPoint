import React from "react";
import '../src/App.css';
import img from "./components/avatar.jpg";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    person : { 
      fullName: 'Zeyneb',
      bio: 'FullStack JS',
      profession: 'HTML, CSS, JavaScript, React JS',
      imgSrc: img,
      
    },
    time: 0,
    show: false,
  }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }


  btnshow =()=> this.setState({show:! this.state.show});
      
  
  
  render() {


    const DivStyle = {
      display: 'flex',
      padding: '10px',
      justifyContent: 'space-around',
      marginLeft: '20rem',
      marginTop: '50px',
      gap : '2rem',
      boxShadow : '0px 0px 10px 0px #F56131',
      width : '50%',




    }
    const divStyle = {
      marginTop: '15%',
    }
    
    const btnStyle = {
      border : 'none',
      borderRadius : '5px',
      padding : '10px',
      color : 'white',
      backgroundColor : '#F56131',
      fontFamily: 'Montserrat',
      fontWeight : 'bold',
      letterSpacing : '1px',


    }
    const imgStyle = {
      height : '150px',
      width : '100%',
      borderRadius : '5px',

    }

    return (
      <div>
        <div style={divStyle}>
          <h1>The component has mounted</h1>
          <p> {this.state.time}</p>
          <button style={btnStyle} onClick={this.btnshow}>{this.state.show? 'Show Profile' : 'Hide Profile'}</button>
          </div>
          {this.state.show && 
          <div style={DivStyle} >
            <div><img src={this.state.person.imgSrc} alt="" style={imgStyle}/></div>

            <div>
             <h1>{this.state.person.fullName}</h1>
             <h4>{this.state.person.bio}</h4>
             <p>{this.state.person.profession}</p>
             </div>

          </div>
          
      
          }
        
      </div>
    );
  }
}

export default App;