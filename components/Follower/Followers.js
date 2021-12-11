import Link from 'next/link'
import Image from 'next/image'
export default function Followers({item})
{
    // console.log( props.results)
    return (
        <div>
          
          <p> user: {item.name.first}  </p> 
             <p> gender: {item.gender}  </p> 
        <img src = {item.picture.large}  width={150} height={150}  alt = "eman"/>   
        </div>
    )
}
