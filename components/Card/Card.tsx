import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css"
import classNames from "classnames";

interface PropType {
    href: string;
    title: string;
    imgUrl: string;
}

const Card = ({ title, imgUrl, href }: PropType) => {
    return (
        <Link href={href}>
            <div className={styles.cardLink}>
                <div className={classNames("glass", styles.container)}>
                    <div className={styles.cardHeaderWrapper}>
                        <h2 className={styles.cardHeader}>{title}</h2>
                    </div>
                    <div className={styles.cardImageWrapper}>
                        <Image className={styles.cardImage} src={imgUrl} width={260} height={160} alt={""} />
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default Card;