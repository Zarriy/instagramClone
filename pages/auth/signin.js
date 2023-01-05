import { getProviders, signIn } from "next-auth/react";

import Header from "../../components/header";

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          src="https://www.seekpng.com/png/full/350-3506475_mobile-instagram-iphone-followers-png.png"
          alt="sigin page"
          className="hidden object-cover md:w-80 md:inline-flex"
        />
        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex items-center flex-col">
              <img
                src="https://www.pngmart.com/files/21/Instagram-Logo-PNG-Photos.png"
                alt="login to instagram"
                className="w-28 object-cover"
              />
              <p className="text-sm my-10 text-center">
                This app is created for learning purpose.
              </p>
              <button
                className="bg-red-400 rounded-lg px-6 py-3 text-white hover:bg-red-500"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
