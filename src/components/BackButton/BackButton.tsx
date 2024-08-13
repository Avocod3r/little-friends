'use client';
import Button, {ButtonAppearance} from '@/components/Button/Button';
import {useRouter} from "next/navigation";

const BackButton = () => {
    const router = useRouter();
    const handleClick = () => {
        router.back();
    }
    return (
        <div className='flex w-full justify-start items-center bg-primary-50 p-3'>
            <Button onClick={handleClick} appearance={ButtonAppearance.SECONDARY}>Go back</Button>
        </div>
    );
};

export default BackButton;