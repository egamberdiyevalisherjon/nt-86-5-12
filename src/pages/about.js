import Link from "next/link";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      About
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default About;
