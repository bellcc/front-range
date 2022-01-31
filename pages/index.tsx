import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

import Profile from "../components/profile";

const Article = ({ id, title, date, description }) => {
  const link_href = `/articles/${id}`;
  return (
    <div className="m-2">
      <h1 className="prose prose-sm thin">{date}</h1>
      <h1 className="prose-xl font-black">{title}</h1>
      <h1>{description}</h1>
      <Link href={link_href}>
        <h1 className="text-purple-600 font-semibold">Read full article</h1>
      </Link>
    </div>
  );
};

const Home = ({ allPostsData }) => {
  return (
    <div className="m-4 lg:mx-64 md:mx-32 sm:mx-16 divide-y-2 divide-purple-400">
      <Profile />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-left justify-center">
          {allPostsData.map(({ id, date, title, description }) => (
            <Article
              key={id}
              id={id}
              title={title}
              date={date}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Home.displayName = "Home";
export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
