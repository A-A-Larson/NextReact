import Image from 'next/image';
import BGImage from '../img/IMG_5084.jpg'

export default function BGImg() {
    return (
        <Image
            className='backgroundLayer'
            alt='maple tree'
            src={BGImage}
            quality={100}
            height={100}

        />
    )
}