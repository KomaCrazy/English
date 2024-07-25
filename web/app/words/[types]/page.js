import Display from "../../../components/display";

async function getData(target) {
  const res = await fetch(`http://api.english.alpha:3000/admin/table?tables=${target}`)
  return res.json()
}

export default async function Page({params}){
  const words = await getData(params.types);
  const data = {
    title:params.types,
    data:words
  }
  return (
    <div>
       {<Display prams={data}></Display>}
    </div>

  )
}