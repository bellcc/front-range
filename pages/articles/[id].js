import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
    return (
      <div>
        <p>{postData.title}</p>
        <p>{postData.id}</p>
        <Date dateString={postData.date}/>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    )
  }

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }