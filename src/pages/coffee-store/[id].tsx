import Link from "next/link";
import { useRouter } from "next/router";
//data
import coffeeStoreData from '../../../data/coffee-stores.json'
import Head from "next/head";
import styles from '../../../'

export async function getStaticProps(staticProps: { params: any; }) {
    const params = staticProps.params
    return {
        props: { coffeeStore: coffeeStoreData.find((coffeestore) => { return coffeestore.id.toString() === params.id }) }, // will be passed to the page component as props
    }
}

export function getStaticPaths() {
    const paths = coffeeStoreData.map((coffeeStore) => {
        return {
            params: {
                id: coffeeStore.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: true,
    }
}


const CoffeeStore = ({ coffeeStore }) => {
    const router = useRouter();

    if (router?.isFallback) {
        return <div>loading ...</div>
    }

    const { address, name, neighbourhood } = coffeeStore

    return (
        <div>
            <Head>
                <title>{name}</title>
            </Head>
            <Link href="/">
                Back to home
            </Link>
            <p>{address}</p>
            <p>{name}</p>
            <p>{neighbourhood}</p>
        </div>
    )
}

export default CoffeeStore;