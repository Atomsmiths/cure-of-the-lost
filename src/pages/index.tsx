import Head from "next/head";
import Link from "next/link";

import styles from "@styles/design-system.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cure of the lost</title>
        <meta
          name="description"
          content="The Binding of Isaac tool to cartography the map."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles["homepage-title"]}>CURE OF THE LOST</h1>
        <nav>
          <ul>
            <li>
              <Link className={styles["menu-item"]} href="/cartography">
                Get started!
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
