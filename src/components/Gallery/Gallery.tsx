import Image from "next/image";

interface GalleryProps {
    images: string[],
    breed: string;
}

const Gallery = ({images, breed}: GalleryProps) => {
    return (
        <div className="grid grid-cols-2 gap-2">
            {images.map(image => (
                <div key={image} className="relative h-56">
                    <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={false}
                           className="h-auto max-w-full rounded-lg" objectFit="cover" src={image} alt={breed} fill/>
                </div>
            ))}
        </div>
    )
}

export default Gallery;