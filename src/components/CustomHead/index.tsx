import Head from "next/head";

interface ICustomHead {
  title?: string;
}

const CustomHead = ({ title }: ICustomHead) => {
  return (
    <Head>
      <title>Vulpes Idiomas {title}</title>
      <meta name="Vulpes Idiomas" content="Vulpes Idiomas" />
      <link rel="icon" href="/vulpes_ico.svg" />
    </Head>
  );
};

export default CustomHead;
