import Display from "../components/display"

async function getArtist() {
  const res = await fetch(`http://api.english.alpha:3000/admin/table?tables=numbers`)
  return res.json()
}


export default async function Page({}){

  const words = await getArtist();
  console.log(words);

  return (
    <div>
       {<Display prams={words}></Display>}
    </div>

  )
}