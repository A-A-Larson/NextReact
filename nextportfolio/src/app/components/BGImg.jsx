import Image from 'next/image';
import BGImage from '../img/BackgroundLayer1.png'

export default function BGImg() {
    return (
        <Image
            className='backgroundLayer'
            alt='maple tree'
            src={BGImage}
            quality={100}
            fill
        />
    )
}