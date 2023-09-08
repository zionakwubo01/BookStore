import styled from "styled-components" 
import pix from "../asssets/earth.png"
const Earth = ()=>{
    return(

        <div>
  <Container>
  <Wrap>
      <img src={pix} alt="" />
  </Wrap>
  </Container>
        </div>
    );
}

export default Earth;
const Wrap = styled.div`
height: 80%;
width: 80%;
`
const Container = styled.div`
height: 700px;
width: 100%;
background-color: red;
}
`