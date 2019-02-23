import React, { Component } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};



class TabBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      newArr: props.newKeysData,
      activeTitle: null
    };
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };


  filter = (title) => {
    console.log('chk title', title)
    var arr = this.props.newKeysData.filter(ele => ele.title.toLowerCase() === title.toLowerCase())
    this.setState({
      newArr: arr,
      activeTitle: title
    })
  }

  render() {
    const { value, newArr } = this.state;
    console.log('state', newArr)
    const { keys, newKeysData, title } = this.props

    console.log('props', newKeysData)
    return (
      <div>
        <h3 style={{ color: '#fff' }}>Choose from our smart filters</h3>
        <p style={{ color: '#fff' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            {keys ? keys.map(item => {
              return <Tab label={item} />
            }) : ''}
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>


          {title.map(item => {
            return <div style={{ display: 'inline-block' }} onClick={() => this.filter(item.title)}><p style={item.style} className={this.state.activeTitle === item.title ? "titleCss active" : "titleCss"}>{item.title}</p></div>
          })}

          {newArr.map((item) => {
            return (
              <div className='question'>
                <p>{item.body}</p>
                <span style={item.style}>{item.title}</span>
              </div>
            )
          })}
        </TabContainer>}
        {value === 1 && <TabContainer>Investor</TabContainer>}
        {value === 2 && <TabContainer>Person</TabContainer>}
        {value === 3 && <TabContainer>Sector</TabContainer>}
        {value === 4 && <TabContainer>Industry</TabContainer>}
        {value === 5 && <TabContainer>Sub Industry</TabContainer>}
        {value === 6 && <TabContainer>Region</TabContainer>}

      </div>
    )
  }
}

export default TabBar
