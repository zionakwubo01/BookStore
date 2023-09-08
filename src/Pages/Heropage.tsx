import { useRef, useState } from "react"
import styled from "styled-components"
import {useEffect} from "react"
import adobe from "../asssets/adobe.svg"
import ebay from "../asssets/ebay.svg"
import hash from "../asssets/hashicorp.svg"
import loom from "../asssets/loom.svg"
import okta from "../asssets/okta.svg"
import tail from "../asssets/tailwindcss_logo.svg"
import under from "../asssets/under-armour.svg"
import wash from "../asssets/washingtonpost.svg"
const Heropage = ()=>{


    const Dev : string[] = [
        "background-image: linear-gradient(to right, blue, red); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent",
        "white",
        "white",
    ]
    const Pre : string[] = [
        "white",
        "background-image: linear-gradient(to right, green, red); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent",
        "white",
    ]
    const ship : string[] = [
"white",
 "white",
 "background-image: linear-gradient(to right, blue, yellow);  background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent",

    ]

    let Devref: any = useRef()
    let preref : any = useRef()
    let shipref : any = useRef()

const [count, setCount] = useState(0)

useEffect(()=>{
 Devref.current.style = Dev[count % Dev.length]
 preref.current.style = Pre[count % Pre.length]
 shipref.current.style = ship[count % ship.length]
})

useEffect(()=>{
  setInterval(()=>{
    setCount((el) => el + 0.5 )
  }, 2000)
}, [])


 //shadow

// const border : string[] = [
//     "box-shadow: blue  0px 3px 40px 0px ; ",
//     "box-shadow: green 0px 3px 40px 0px;",
//     "box-shadow: yellow 0px 3px 40px 0px"
// ]

// const button : string[] = [
// "background-image:  linear-gradient(to right, blue, red);",
// "background-image:  linear-gradient(to right, green, yellow);",
// "background-image:  linear-gradient(to right, blue, yellow);",

// ]


// let but: any = useRef()

// const [butt, setbut] = useState(0)

// useEffect(()=>{
//     but.current.style = border[butt % border.length]
// })

// useEffect(()=>{
//     setInterval(()=>{
//         setbut((el)=>el + 0.5)
//     }, 2000)
// },[])



//border color
const Bordercl: string[] = [
  "background: linear-gradient(#222, #222), linear-gradient(to right, blue, red);background-origin: padding-box, border-box; background-repeat: no-repeat; border: 1px solid transparent;",
  "background: linear-gradient(#222, #222), linear-gradient(to right, green, red);background-origin: padding-box, border-box; background-repeat: no-repeat; border: 1px solid transparent;",
  "background: linear-gradient(#222, #222), linear-gradient(to right, blue, yellow);background-origin: padding-box, border-box; background-repeat: no-repeat; border: 1px solid transparent;",
  
]

let bod:any = useRef()

const [color, setColor] = useState(0)

useEffect(()=>{
  bod.current.style = Bordercl[color % Bordercl.length]
})

useEffect(()=>{
   setInterval(()=>{
    setColor((el)=>el + 0.5)
   },2000)
},[])
    return(
        <div>
<Container>
<Hold>
    
<Text ref ={Devref}>Develop.</Text>
<Text ref={preref}>preview.</Text>
<Text ref={shipref}>ship.</Text>

</Hold>
<Vercel>
    Vercel frontend cloud gives developers the frameworks,workflows, <br/>and infrastructure to build a faster and more personalised web
</Vercel>
<Buttonholder>
    <Start>
    <svg
                                    width="19"
                                   height="15"
                              viewBox="0 0 76 65"
                  fill="none" xmlns="http://www.w3.org/2000/svg"><path
            d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="black"/></svg>
        Start deploying</Start>
    <Get ref={bod}>Get a demo</Get>
</Buttonholder>
<Trust>Trusted by the Best Frontend Teams</Trust>

<Logos>
<Logo><img src={adobe} alt="adobe logo" /></Logo>
<Logo><img src={ebay} alt="" /></Logo>
<Logo><img src={hash} alt="" /></Logo> 
<Logo><img src={loom} alt="" /></Logo>
<Logo><img src={okta} alt="" /></Logo>
<Logo><img src={wash} alt="" /></Logo>
<Logo><img src={tail} alt="" /></Logo>
<Logo><img src={under} alt="" /></Logo>
</Logos>
</Container>
        </div>
    );
}
export default Heropage; 
const Logo = styled.div`
height: 50px;
width: 23%;
color: white;
display: flex;
align-items: center;
justify-content: center;
`
const Logos = styled.div`
height: 120px;
width: 750px;
margin-bottom: 20px;
display: flex;
 flex-direction: row;
 flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`

const Trust = styled.div`
font-size: 15px;
letter-spacing: 3px;
margin-top: 20px;
color: gray;
`
const Start = styled.button`
 height: 45px;
 width: 200px;
//  border-radius: 15px;
 background-color: white;
 font-size: 18px;
 border: 0;
 display: flex;
 flex-direction: row;
 gap: 10px;
 justify-content: center;
 align-items: center;
`
const Get = styled.button`
height: 45px;
width: 200px;
 background-color: black;
 color: white;
 font-size: 18px;
 cursor: pointer;
 &:hover{
   
 }
`
const Buttonholder = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
`
const Vercel = styled.text`
font-size: 23px;
color: gray;
`
const Hold = styled.div`
min-height: ;
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;
`
const Text = styled.text`
font-size: 100px;
font-weight: bolder;
color: white;
padding-top: 110px;
`

const Container = styled.div`
height: 786px;
background-color: black;
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
gap: 50px;
`