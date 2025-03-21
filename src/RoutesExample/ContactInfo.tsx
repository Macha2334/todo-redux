import { useParams } from "react-router-dom";
import {data} from "./Contact"
type Props={
    match?:any;
}
const ContactInfo = (props:Props) => {
    const params= useParams();
    console.log('history',window.location);
    console.log('props',params);
    const contactInfo=data.find((item)=>item.id.toString() === params.id);

    return(<div>
        <div>id {" "}{contactInfo?.id}</div>
        <div>name {" "}{contactInfo?.name}</div>
    </div>)
}
export default ContactInfo;