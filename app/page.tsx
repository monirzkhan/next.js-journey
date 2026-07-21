import { getMe } from "@/service/getMe";
import Link from "next/link";



export default async function Home () {

  const user= await getMe();
  console.log(user);
  return (
    
    <div>
      Hello Next Js
    </div>
  );
}
