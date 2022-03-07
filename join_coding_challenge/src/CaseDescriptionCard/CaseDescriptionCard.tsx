import Image from 'next/image'
import styles from './CaseDescriptionCard.module.css'

type ICaseDescriptionCard = {
    imageHref: string | null
    title: string | null
    description: string | null
    theftDate: string | null
    reportDate: string | null
    location: string | null
}

export default function CaseDescriptionCard({ imageHref, title, description, theftDate, reportDate, location }: ICaseDescriptionCard) {

    return (
        <div className={styles.caseDescriptionCard}>
            <div className={styles.imageContainer}>
                <Image
                    width={320}
                    height={200}
                    src={imageHref}
                />
            </div>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>{theftDate} - {location}</h4>
            </div>
        </div>
    )
}