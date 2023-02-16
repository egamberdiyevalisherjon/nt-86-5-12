import Link from "next/link";
import Head from "next/head";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>contact</title>
      </Head>
      Contact
      <Link href="/about">About</Link>
    </div>
  );
};

export default Contact;
