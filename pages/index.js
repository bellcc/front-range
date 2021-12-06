import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'

const Profile = () => {
  return (
    <div class="flex flex-col items-center justify-center">
      <img class="rounded-full h-36 w-36" src="/profile.png"/>
      <h1 class="prose prose-2xl font-black">Christopher Bell</h1>
      <h1 class="prose prose-sm thin">Software Engineer</h1>
    </div>
  )
}

const Article = ({ id, title, date, description }) => {
  return (
    <div class="m-2">
      <h1 class="prose prose-sm thin">{date}</h1>
      <h1 class="prose-xl font-black">{title}</h1>
      <h1>{description}</h1>
      <h1 class="text-purple-600 font-semibold">Read full article</h1>
    </div>
  )
}

export default ({ allPostsData }) => {
  return (
    <div className="m-4">
        <Profile />
        <div class="flex flex-col items-center justify-center">
          <div class="flex flex-col items-left justify-center lg:mx-64 md:mx-32 sm:mx-16">
            {allPostsData.map(({ id, date, title, description }) => (
              <Article id={id} title={title} date={date} description={description}/>
            ))}
          </div>
        </div>
    </div>
  )
}

/**
  return (
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
  )
 */

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}