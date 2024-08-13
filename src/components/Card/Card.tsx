'use client';
import Image from 'next/image'
import Link from "next/link";
import Button from "@/components/Button/Button";
import {useRouter} from "next/navigation";


interface CardProps {
    imageUrl: string;
    breed: any;
}

const Card = ({imageUrl, breed}: CardProps) => {
    const router = useRouter();
    const href = `/${breed[0].id}`;

    const handleClick = () => {
        router.push(href)
    }

    return (
        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <Link href={href} className="block relative h-56">
                <Image
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={false}
                    className="rounded-t-lg" fill src={imageUrl} alt="Dogs or Cats"/>
            </Link>
            <div className="p-5 flex justify-between flex-col">
                <Link href={href}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {breed[0].name}
                    </h5>
                </Link>
                <Button onClick={handleClick} className="flex justify-center items-center">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Button>
            </div>
        </div>
    );
};

export default Card;