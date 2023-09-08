import styled from "styled-components"
import pixx from "../asssets/layout.png"
import {FaTools} from "react-icons/fa"
import {FaDropbox} from "react-icons/fa"
import {FaAngleRight} from "react-icons/fa"

const Code = ()=>{
    return(
<div>
<Container>
    <Wrapper heig="80%" ><img src={pixx} alt="code pallete" /></Wrapper>
    <Wrapper heig="95%" >
<Div>
<Hold>
<FaTools/>
</Hold>
<Bold>The complete toolkit for the Web</Bold>
<Text>Everything you need to build your site exactly how you imagine, from automatic API handling to built-in image and performance optimizations.</Text>

</Div>
<Div>
  <Hold>
      <FaDropbox/>
  </Hold>
<Bold>Easy integration with your backend</Bold>
<Text>Connect your pages to any data source, headless CMS, or API and make it work in everyone’s dev environment.</Text>

</Div>
<Div>
    <Hold>
    <FaAngleRight/>
    </Hold>
<Bold>End-to-end testing on Localhost</Bold>
<Text>From caching to Serverless Functions, all our cloud primitives work perfectly on localhost.</Text>
</Div>
    </Wrapper>
</Container>
</div>

    );
}
export default Code;
const Hold = styled.div`
height: 40px;
width: 40px;
background-color: gray;
color: white;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
`
const Text = styled.text`
color: gray;
font-size: 15px;
font-weight: 400;
`
const Bold = styled.text`
font-size: 18px;
color: white;
font-weight: bold;
`
const Div = styled.div`
height: 30%;
width:  100%;
// background-color: red;
display: flex;
align-items: flex-start;
flex-direction: column;
gap: 12px;
`
const Wrapper = styled.div<{heig?: string,}>`
height: ${({heig})=>heig};
width: 32%;
background-color: black;
margin-top: 30px;
display: flex;
flex-direction: column;
justify-content: space-around;


`
const Container = styled.div`
height: 700px;
width: 100%;
background-color: black;
display: flex;
justify-content: space-evenly;
flex-direction: row;

`