import Image from "next/image";
import styles from "./styles.module.css";
import logo from "../../../public/logo_written.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav_bar}>
        <Image src={logo} alt="Vulpes Logo" />
        <div>
          <Link href="/">
            <a>Início</a>
          </Link>
          <Link href="/about">
            <a>Produto</a>
          </Link>
          <Link href="/">
            <a>Preços</a>
          </Link>
          <Link href="/about">
            <a>Contato</a>
          </Link>
        </div>

        <div className={styles.button}>
          <p>Junte-se</p>
        </div>
      </nav>
      <div className={styles.content}>
        <p>
          <b>For Better Future</b>
        </p>
        <h1>
          Best Learning <br /> Opportunities
        </h1>

        <p className={styles.text_bigger}>
          Our goal is to make online
          <br /> education work for everyone
        </p>
      </div>
    </div>
  );
};

export default Header;
