
import styled from "styled-components"

interface iButton{
    text: string,
    color: string,
    bcc: string,
}

// type gbtn = {
//     sizes?: 'xxl' | 'xl'
// }

// const globalbtn = {
//     xxl: {
//         padding: [13, 100]
//     },
//     xl: {
//         padding: [13, 200]
//     }
// }

const Globalbutton: React.FC<iButton> = ({
    text, color, bcc
})=>{
    return(

        <div>
    <Button bcc={bcc} color={color}>
{text}
    </Button>
        </div>
    );
}

export default Globalbutton;
const Button = styled.button <{bcc: string, color: string}>`
height: 35px;
width: 70px;
background-color: ${({bcc})=>bcc};
padding: 5px 5px 5px 5px;
color: ${({color})=>color};
border-radius: 7px;
border: 1px solid silver;

@media screen and (max-width: 768px){
    display: none;
}
`