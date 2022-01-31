import { getAllPostIds, getPostData } from "../../lib/posts";
import Profile from "../../components/profile";

export default function Post({ postData }) {
  return (
    <div className="m-4 lg:mx-64 md:mx-32 sm:mx-16 divide-y-2 divide-purple-400">
      <Profile />
      <div className="p-2 flex flex-col items-center">
        <div>
          <h1 className="prose prose-sm thin">{postData.date}</h1>
          <h1 className="prose prose-xl font-black">{postData.title}</h1>
          <h1
            className="prose prose-sm thin"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
