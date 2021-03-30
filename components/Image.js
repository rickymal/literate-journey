import Image from 'next/image'


const ImageProfile = () => (
    <Image
    src = "/images/profile.jpg"
    height = {500}
    width = {500}
    alt = "Your Name"
    />
)

export default ImageProfile