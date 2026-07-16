import { FiSearch } from "react-icons/fi";

function SearchBar({ search, setSearch }) {

    return (

        <div className="relative">

            <FiSearch
                className="absolute left-7 top-9 text-gray-400"
            />

            <input

                type="text"

                placeholder="Search certificates..."

                value={search}

                onChange={(e) =>
                    setSearch(e.target.value)
                }

                className="w-full pl-14  mt-4 pr-5 py-4 rounded-2xl border shadow-sm focus:ring-2 focus:ring-blue-500"

            />

        </div>

    );
}

export default SearchBar;