import Head from "next/head";

interface ICustomHead {
  title?: string;
}

const CustomHead = ({ title }: ICustomHead) => {
  const text = `Vulpes Idiomas ${title || ""}`;
  return (
    <Head>
      <title>{text}</title>
      <meta name="Vulpes Idiomas" content="Vulpes Idiomas" />
      <link rel="icon" href="/vulpes_ico.svg" />
    </Head>
  );
};

export default CustomHead;
