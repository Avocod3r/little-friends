import {GetBreedParams, GetBreedsParams} from "@/types/types";
import {shuffleArray} from "@/lib/utils";

const catBaseUrl = 'https://api.thecatapi.com/v1/images/'
const dogBaseUrl = 'https://api.thedogapi.com/v1/images/'
const catApiKey = process.env.NEXT_PUBLIC_CAT_API_KEY!;
const dogApiKey = process.env.NEXT_PUBLIC_DOG_API_KEY!;

const fetchBreeds = async (baseUrl: string, params: GetBreedsParams, apiKey: string) => {
    try {
        const {limit = 15,} = params;
        const headers = new Headers({"Content-Type": "application/json", "x-api-key": apiKey});
        const url = `${baseUrl}search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=${limit}`;
        const response = await fetch(url, {headers: headers});
        const data = await response.json();
        // Shuffle the data and get the first 6 breeds
        return shuffleArray(data).slice(0, 6);
    } catch (error) {
        console.error(`Error fetching breeds: ${error}`);
        throw error;
    }
}

const getCatsBreeds = async (params: GetBreedsParams) => {
    return fetchBreeds(catBaseUrl, params, catApiKey);
}

const getDogsBreeds = async (params: GetBreedsParams) => {
    return fetchBreeds(dogBaseUrl, params, dogApiKey);
}

export const fetchDogsAndCatsBreeds = async (params: GetBreedsParams) => {
    return Promise.all([getCatsBreeds(params), getDogsBreeds(params)])
}

const fetchBreedInfo = async (baseUrl: string, apiKey: string, params: GetBreedParams) => {
    try {
        const {id} = params;
        const headers = new Headers({"Content-Type": "application/json", "x-api-key": apiKey});
        const url = `${baseUrl}search?breed_ids=${id}&limit=4`;
        const response = await fetch(url, {headers: headers});
        const data = await response.json();
        return {
            breed: data[0]?.breeds[0],
            images: data.map((item: any) => item.url),
        };
    } catch (error) {
        console.error(error)
        throw error;
    }
}

export const getBreedInfo = async (params: GetBreedParams) => {

    if (params.id.toString().length > 3) {
        return fetchBreedInfo(catBaseUrl, catApiKey, params)
    } else {
        return fetchBreedInfo(dogBaseUrl, dogApiKey, params)
    }
}

