import Head from "next/head";
import Feed from "../components/feed";
import { Inter } from "@next/font/google";
import Header from "../components/header";
import Posts from "../components/posts";
import Upload from "../components/uploadModal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Instagram Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
      <Upload />
    </div>
  );
}
