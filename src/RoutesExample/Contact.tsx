import { Link } from "react-router-dom"

type dataT={
    id:number,
    name:string,
    phone:number
}
export  const data:dataT[] = [
    {id:1,name:'mahe',phone:123},
    {id:2,name:'darmi',phone:123},
    {id:3,name:'raj',phone:123},
    {id:4,name:'rag',phone:123},
]
const Contact = () => {
    
   
    return (
        <div>
        <h1>
        contacts
        </h1>
            <ul>
                {data.map((item)=>{
                    return (<li><Link to={`/contacts/${item.id}`}>{item.name}</Link></li>)
                })}
            </ul>
        </div>)
}
export default Contact;