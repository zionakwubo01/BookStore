import styled from  "styled-components"
import Globalbutton from "../Button/Globalbutton";
import {FaAngleDown} from "react-icons/fa"
import {useState} from "react"
import {AiOutlineMenu} from "react-icons/ai"
import {GiCancel} from "react-icons/gi"
import {FaAngleUp} from "react-icons/fa"
import {FaComment} from "react-icons/fa"
import {AiOutlineBoxPlot} from "react-icons/ai"
import {FaInternetExplorer} from "react-icons/fa"
import {FaIntercom} from "react-icons/fa"
import {FaChartLine} from "react-icons/fa"
import {FaStore} from "react-icons/fa"



const Header = ()=>{

    const [show, setShow] = useState(false)

    const togle = ()=>{
        setShow(!show);
    }

    const [Feat, setFeat] = useState(false)

    const Feater = ()=>{
        setFeat(!Feat);
    }
 
    const [Header, setHeader] = useState(false)

    const headerchange = ()=>{
        if(window.scrollY >= 100){
            setHeader(false)
        }else{
            setHeader(true)
        }
    }

    window.addEventListener("scroll", headerchange)


    return(

        <div style={{display: "flex", justifyContent: "center"}}>
  {Header ? (
     <Container bg="black">
     <Textholder>
    <Logo>
    <Ver>
  <svg width="30" height="22" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff"/></svg>
    <LogoText>vercel</LogoText>
  </Ver>
    </Logo>
     <Contacts>Features
     {Feat ? <FaAngleUp onClick={Feater}/> : <FaAngleDown onClick={Feater}/>} 
     </Contacts>
     <Contacts>Docs</Contacts>
     <Contacts>Templates</Contacts>
     <Contacts>Integrations</Contacts>
     <Contacts>Customers</Contacts>
     <Contacts>Enterprise</Contacts>
     <Contacts>Pricing</Contacts>
  
     </Textholder>
      <ButtonHolder>
          <Contacts>Contacts</Contacts>
          <Globalbutton bcc="black" color="white" text="Login"/>
          <Globalbutton bcc="white" color="black" text="sign up"/>
      </ButtonHolder>
     <Icon>
   {show? <GiCancel onClick={togle}/>: <AiOutlineMenu onClick={togle}/>}
     </Icon>
     {show? (
        <Bar>
         <But bg="black" cl="white" mar="20px">Login</But>
         <But bg="white" cl="black">sign up</But>
         <Text>Features
      <FaAngleDown onClick={Feater}/>
     </Text>
     <Text>Docs</Text>
     <Text>Templates</Text>
     <Text>Integrations</Text>
     <Text>Customers</Text>
     <Text>Enterprise</Text>
     <Text>Pricing</Text>
     <Text>Contacts</Text>
        </Bar>
    ):(
     null
    )}
 
 {Feat ? (
       <Drop>
 <Dropmenu>
    <Droptext bd="bold">
    <FaComment/>
    Previews</Droptext>
    <Droptext>Zero config, more innovation</Droptext>
</Dropmenu>
<Dropmenu>
<Droptext bd="bold">
<AiOutlineBoxPlot/>
Infrastructure</Droptext>
<Droptext>Always fast, always online</Droptext>
</Dropmenu>
<Dropmenu>
<Droptext bd="bold">
<FaIntercom/>
Next.js</Droptext>
<Droptext>The native Next.js platform</Droptext>
</Dropmenu>
<Dropmenu>
<Droptext bd="bold">
<FaInternetExplorer/>
Edge Functions</Droptext>
<Droptext>Dynamic pages, static speed</Droptext>
</Dropmenu>
<Dropmenu>
<Droptext bd="bold">
<FaChartLine/>
Analysis</Droptext>
<Droptext>Real time insights, peek performance</Droptext>
</Dropmenu>
<Dropmenu>
<Droptext bd="bold">
<FaStore/>
Storage</Droptext>
<Droptext>Serverless storage for the front end</Droptext>
</Dropmenu>
       </Drop>
 ): (
     null
 )}
 
     </Container>
  ):(
    <Container bg="rgba(0,0,0,0.5)" border="white">
    <Textholder>
   <Logo>
  <Ver>
  <svg width="30" height="22" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff"/></svg>
    <LogoText>vercel</LogoText>
  </Ver>
   </Logo>
    <Contacts>Features
    {Feat ? <FaAngleUp onClick={Feater}/>: <FaAngleDown onClick={Feater}/> } 
    </Contacts>
    <Contacts>Docs</Contacts>
    <Contacts>Templates</Contacts>
    <Contacts>Integrations</Contacts>
    <Contacts>Customers</Contacts>
    <Contacts>Enterprise</Contacts>
    <Contacts>Pricing</Contacts>
 
    </Textholder>
     <ButtonHolder>
         <Contacts>Contacts</Contacts>
         <Globalbutton bcc="black" color="white" text="Login"/>
         <Globalbutton bcc="white" color="black" text="sign up"/>
     </ButtonHolder>
    <Icon>
  {show? <GiCancel onClick={togle}/>: <AiOutlineMenu onClick={togle}/>}
    </Icon>
    {show? (
       <Bar>
        <But bg="black" cl="white" mar="20px">Login</But>
        <But bg="white" cl="black">sign up</But>
        <Text>Features
     <FaAngleDown onClick={Feater}/>
    </Text>
    <Text>Docs</Text>
    <Text>Templates</Text>
    <Text>Integrations</Text>
    <Text>Customers</Text>
    <Text>Enterprise</Text> 
    <Text>Pricing</Text>
    <Text>Contacts</Text>
       </Bar>
   ):(
    null
   )}

{Feat ? (
      <Drop>
<Dropmenu>
    <Droptext bd="bold">
    <FaComment/>
    Previews</Droptext>
    <Droptext>Zero config, more innovation</Droptext>
</Dropmenu>
<Dropmenu>
<Droptext bd="bold">
<AiOutlineBoxPlot/>
Infrastructure</Droptext>
<Droptext>Always fast, always online</Droptext>
</Dropmenu>
<Dropmenu>
<Droptext bd="bold">
<FaIntercom/>
Next.js</Droptext>
<Droptext>The native Next.js platform</Droptext>
</Dropmenu>
<Dropmenu>
<Droptext bd="bold">
<FaInternetExplorer/>
Edge Functions</Droptext>
<Droptext>Dynamic pages, static speed</Droptext>
</Dropmenu>
<Dropmenu>
<Droptext bd="bold">
<FaChartLine/>
Analysis</Droptext>
<Droptext>Real time insights, peek performance</Droptext>
</Dropmenu>
<Dropmenu>
<Droptext bd="bold">
<FaStore/>
Storage</Droptext>
<Droptext>Serverless storage for the front end</Droptext>
</Dropmenu>
      </Drop>
): (
    null
)}

    </Container>
  )}
        </div>
    );
}
 
export default Header;
const Droptext = styled.text<{bd?: string}>`
font-size: 15px;
color: white;
margin-left: 10px;
font-weight: ${({bd})=>bd};
display: flex;
gap: 10px;
`
const Dropmenu = styled.div`
height: 55px;
width: 260px;
border-radius: 10px;
// background-color: red;
display: flex;
flex-direction: column;
cursor: pointer;
align-items: flex-start;
gap: 10px;
&:hover{
    background-color: gray;
}
`
const Ver = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Text = styled.text`
font-size: 15px;
color: gray;
margin-left: 15px;
display: none;
@media screen and (max-width: 768px){
    display: flex;
    align-items: center;
    gap: 590px;
}
`
const Drop = styled.div`color: white;
height: 230px;
width: 550px;
border-radius: 20px;
background-color: rgba(0,0,0,0.5);
position: absolute;
top: 90px;
border: 1px solid silver;
display: flex;
justify-content: space-around;
flex-wrap: wrap;
align-items: center;
left: 150px;
@media screen and (max-width: 768px){
    display: none;
}
`

const But = styled.button <{bg:string, cl: string, mar?: string}>`
height: 50px;
color:  ${({cl})=>cl};
border-radius: 10px;
width: 680px;
margin-top: ${({mar})=>mar};
background-color: ${({bg})=>bg};
border: 1px solid silver;
margin-left: 15px;
`
const Bar = styled.div`
height: 500px;
gap: 20px;
border-radius: 20px;
width: 720px;
top: 80px;
right: 0;
flex-direction: column;
margin-left: 20px;
background-color: black;
display: flex;
align-items:center
flex-direction: column;
position: absolute;
display: none;
@media screen and (max-width: 1024px){
    display: flex;
}
`
const Icon = styled.div`
color: white;
cursor: pointer;
display: none;
@media screen and (max-width: 768px){
    display: flex;
}
&:hover{
    transform: scale(1.06);
}
`
const Logo = styled.div`
display: flex;
justify-content: space-evenly;
`
const LogoText = styled.div`
color: white;
font-size:30px;
font-weight: 400;
margin-bottom: 8px;
`
const Contacts = styled.text`
display: flex;
font-weight: 600;
gap: 4px;  
align-items: center;
cursor: pointer;
color: gray; 
font-size:15px;
animation : move 3s linear infinite;
@media screen and (max-width: 768px){
    display: none;
}
&:hover{
    transform: scale(1.06);
    color:  white;
}
`
const Textholder = styled.div`
height: 80px;
 width: 50%;
//  background-color: blue;
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-left: 70px;
`
const ButtonHolder = styled.div`
 height: 80px;
 width: 15%;
//  background-color: red;
 display: flex;
 justify-content: space-around;
 align-items: center;
margin-right: 70px;
`
const Container = styled.div<{bg: string, border?: string}>`
height: 80px;
width: 100%;
background-color: ${({bg})=>bg};
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
position: fixed;
border-bottom: ${({border})=>border};
margin: 0;
`