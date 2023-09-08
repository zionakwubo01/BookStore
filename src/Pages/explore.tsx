
import styled from "styled-components"



const Explore = ()=>{
return(
    <div>
<Container>

    <Text si="12px" letter="5px">EXPLORE THE VERCEL WAY</Text>
    <Cir>1</Cir>
    <Dev>Develop</Dev>
    <Build>Build when inspiration strikes</Build>
    <Text si="18px">Free developers from time-consuming, unnecessary <br/>processes that slow your work, so you and your team can focus on creating.</Text>
</Container>
    </div>
);

}

export default Explore;
const Text = styled.text <{si:string ; letter?: string}>`
text-align: center;
font-size: ${({si})=>si};
color: gray;
letter-spacing: ${({letter})=>letter};
font-weight: 600;
`
const Cir = styled.div`
border-radius: 50%;
height: 40px;
width: 40px;
display: flex;
align-items: center;
justify-content: center;
background-image: linear-gradient(to right, blue, red);
`
const Build = styled.text`
font-size: 50px;
font-weight: bolder;
color: white;
`
const Dev = styled.text`
color: white;
font-size: 35px;
font-weight: bolder;
background-image: linear-gradient(to right, blue, red);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

const Container = styled.div`
height: 400px;
width: 100%;
background-color: black;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;

`