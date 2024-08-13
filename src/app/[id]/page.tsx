import {getBreedInfo} from "@/lib/services";
import Gallery from "@/components/Gallery/Gallery";
import BreedInfo from "@/components/BreedInfo/BreedInfo";
import BackButton from "@/components/BackButton/BackButton";

const Page = async ({params}: { params: { id: string | number } }) => {
    const {breed, images} = await getBreedInfo(params);

    return (
        <>
            <BackButton/>
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3">
                <Gallery images={images} breed={breed?.name}/>
                <BreedInfo breed={breed}/>
            </div>
        </>
    );
};

export default Page;