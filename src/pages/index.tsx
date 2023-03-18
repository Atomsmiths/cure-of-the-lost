import Head from "next/head";
import Link from "next/link";
import {
  HOMEPAGE_MENU_ITEM_CLASSNAMES,
  HOMEPAGE_NAVE_CLASSNAMES,
  HOMEPAGE_TITLE_CLASSNAMES,
} from "@pages/index.classnames";

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
        <h1 className={HOMEPAGE_TITLE_CLASSNAMES}>CURE OF THE LOST</h1>
        <nav className={HOMEPAGE_NAVE_CLASSNAMES}>
          <ul>
            <li>
              <Link
                className={HOMEPAGE_MENU_ITEM_CLASSNAMES}
                href="/cartography"
              >
                Get started!
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
