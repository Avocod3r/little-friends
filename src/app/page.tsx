import Card from "@/components/Card/Card";
import {fetchDogsAndCatsBreeds} from "@/lib/services";

export default async function Home() {
    const [cats, dogs] = await fetchDogsAndCatsBreeds({});
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
            <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
                {cats.map(cat => (
                    <Card key={cat.id} imageUrl={cat.url} breed={cat.breeds}/>
                ))}
                {dogs.map(dog => (
                    <Card key={dog.id} imageUrl={dog.url} breed={dog.breeds}/>
                ))}
            </div>
        </main>
    );
}
