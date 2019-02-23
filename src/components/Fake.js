import React, { Component } from 'react'
import styled from 'styled-components'

export const Box = styled.div`
width: 150px;
border: 8px solid rgb(249,73,84);
border-radius: 50%;
padding: 5px;
color: #fff;
height: 150px;
display: flex;
overflow: hidden;
text-align: center;
vertical-align: middle;
line-height: 18px;
box-shadow: 2px 1px 2px #000;
margin: 15px 20px;
align-items: center;
`;
export const Wrap = styled.div`
display:flex;
flex-wrap:wrap;
`;

class Fake extends Component {
  render() {
    return (
      <Wrap>
        <Box>hello this is style component</Box>
        <Box>hello this is style component</Box>
        <Box>hello this is style component</Box>
        <Box>hello this is style component</Box>
        <Box>hello this is style component</Box>
      </Wrap>
    )
  }
}

export default Fake