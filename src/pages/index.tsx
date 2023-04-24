import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";

import { api } from "~/utils/api";
import { PageLayout } from "./components/Layout";
import BottomNavigator from "./components/ButtonNav";

const DiaryList = (props: { userId: string }) => {
  const { data, isLoading } = api.diary.getByAuthor.useQuery({
    authorId: props.userId,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="my-3 flex w-full flex-col border-t">
      {data?.map((diary) => (
        <div key={diary.id} className="flex flex-row border-b py-5">
          <div className="flex-grow">
            <span className="pl-3 text-xl font-medium text-gray-500 dark:text-gray-400">
              {diary.content}
            </span>
          </div>
          <div className="flex-end">
            <span className="justify-end text-sm text-gray-400">{`${diary.createdAt.toLocaleString()}`}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const Home: NextPage = () => {
  const { user, isSignedIn } = useUser();

  // console.log("user", user?.id);
  return (
    <>
      <PageLayout>
        <div className="flex items-center justify-center font-mono text-3xl font-light text-amber-500">
          <div>{`change change`}</div>
        </div>
        {isSignedIn && (
          <>
            <div className="flex justify-end text-sm">
              <div className="pr-4">{`${
                user.fullName ? user.fullName : "?"
              }`}</div>
              <SignOutButton />
            </div>
            <DiaryList userId={user.id} />
          </>
        )}
        {!isSignedIn && (
          <div className="flex justify-center">
            <div className="pr-4">{`Hello, Please Sign In`}</div>
            <SignInButton />
          </div>
        )}
        <BottomNavigator />
      </PageLayout>
    </>
  );
};

export default Home;
