// import Display from "../../components/display"

async function getArtist(target) {
  const res = await fetch(`http://api.english.alpha:3000/admin/table?tables=${target}`)
  return res.json()
}


export default async function Page({params}){
  console.table(params);
  console.log(params.types)

  const words = await getArtist();
  console.log(words);

  return (
    <div>
      123
       {/* {<Display prams={words}></Display>} */}
    </div>

  )
}