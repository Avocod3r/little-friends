const BreedInfo = ({breed}: { breed: any }) => {
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            {breed.name}
                        </th>
                        <th scope="col" className="px-6 py-3">

                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="odd:bg-primary even:bg-gray-50 border-b">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Description
                        </th>
                        <td className="px-6 py-4">
                            {breed.bred_for || breed.description}
                        </td>
                    </tr>
                    {breed.height &&
                        (<tr className="odd:bg-primary even:bg-secondary-50 border-b">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Height
                            </th>
                            <td className="px-6 py-4">
                                {breed.height?.metric} sm
                            </td>
                        </tr>)}
                    <tr className="odd:bg-primary even:bg-secondary-50 border-b">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Weight
                        </th>
                        <td className="px-6 py-4">
                            {breed.weight?.metric} kg
                        </td>
                    </tr>
                    <tr className="odd:bg-primary even:bg-gray-50 border-b">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Life span:(
                        </th>
                        <td className="px-6 py-4">
                            {breed.life_span}
                        </td>
                    </tr>
                    <tr className="odd:bg-primary even:bg-secondary-50 border-b">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            Temperament
                        </th>
                        <td className="px-6 py-4">
                            {breed.temperament}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default BreedInfo;