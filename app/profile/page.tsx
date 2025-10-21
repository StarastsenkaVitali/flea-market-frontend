"use client";
import { useUser } from "@auth0/nextjs-auth0";

export default function Profile() {
  const { user, isLoading } = useUser();
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {user && (
        <div className="flex  flex-col gap-3 text-4xl/[80px]">
          <div className=" flex align-center gap-3">
            <img
              src={user.picture}
              alt="Profile"
              className="size-[80px] rounded-[25%]"
            />
            <p>Hello {user.nickname}</p>
          </div>
          <div className="flex flex-col gap-3">
            <p>Email: {user.email}</p>
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
          </div>
        </div>
      )}
    </>
  );
}
