import styled from "styled-components"


const preview = ()=>{

return(

    <div>
<Container>
<Words si="12px" letter="4px" mar="40px">WORKS WITH 30+ FRAMEWORKS</Words>
<Logo></Logo>
<Cir>1</Cir>
<Pre>Preview</Pre>
<Build>Iterate with your team</Build>
<Words si="18px" mad="30px">Make frontend development a collaborative experience with<br/> automatic Preview Deployments for every code change, by <br/>seamlessly integrating with GitHub, GitLab, and Bitbucket.</Words>

</Container>
    </div>
);

}

export default preview;
const Words = styled.text <{si?:string ; letter?: string; mar?: string; mad?: string}>`
text-align: center;
font-size: ${({si})=>si};
color: gray;
letter-spacing: ${({letter})=>letter};
font-weight: 600;
margin-top: ${({mar})=>mar};
margin-bottom: ${({mad})=>mad}

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
const Pre = styled.text`
color: white;
font-size: 35px;
font-weight: bolder;
background-image: linear-gradient(to right, blue, red);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`
const Logo = styled.div`
height: 60px;
width: 500px;
background-color: white;
`
const Container = styled.div`
height: 550px;
width: 100%;
background-color: black;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;

`
