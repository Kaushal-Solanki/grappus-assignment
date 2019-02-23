import React, { Component } from 'react'
import styled from 'styled-components'


export const Box = styled.div`
    color: #fff;
    border: 2px solid #526352;
    margin: 20px 0px;
    padding: 10px;
    border-radius: 4px;
    background-color: #090909;

`;

class Sidebar extends Component {
  render() {
    const { sideBarData } = this.props
    return (
      <div>
        {sideBarData.map(item => {
          return <Box>{item.content}</Box>
        })}

      </div>
    )
  }
}

export default Sidebar;