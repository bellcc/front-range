import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-4">
      <img className="rounded-full h-36 w-36" src="/profile.png"/>
      <h1 className="prose prose-2xl font-black">Christopher Bell</h1>
      <h1 className="prose prose-sm thin">Software Engineer</h1>
    </div>
  )
}

const Article = ({ id, title, date, description }) => {
  return (
    <div className="m-2">
      <h1 className="prose prose-sm thin">{date}</h1>
      <h1 className="prose-xl font-black">{title}</h1>
      <h1>{description}</h1>
      <Link href="/articles/{id}">
        <h1 className="text-purple-600 font-semibold">Read full article</h1>
      </Link>
    </div>
  )
}

const Home = ({ allPostsData }) => {
  return (
    <div className="m-4 lg:mx-64 md:mx-32 sm:mx-16 divide-y-2 divide-purple-400">
        <Profile/>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-left justify-center">
            {allPostsData.map(({ id, date, title, description }) => (
              <Article key={id} id={id} title={title} date={date} description={description}/>
            ))}
          </div>
        </div>
    </div>
  )
}

Home.displayName = 'Home'
export default Home

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}