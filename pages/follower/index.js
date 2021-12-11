
import Followers from '../../components/Follower/Followers'
export default function index({results})
{
    console.log(results)
    return (
        <div>
              <h1> Follower List</h1>
                 { results.map(item=><Followers item = {item} key={item.email}/>
                
                 )}
            
        </div>
    )
}
export async function getStaticProps(context) {
    const response=await fetch("https://randomuser.me/api/?results=5", {
        method:"GET"
    })
    const data = await response.json()
    const results = data.results


    return {
        props: { results}
    }
}