import { FiSearch } from "react-icons/fi";

function SearchBar({ search, setSearch }) {

    return (

        <div className="relative mt-6 ">

            <FiSearch
                className=" absolute
    left-8
    top-1/2
    -translate-y-1/2
    text-blue-400
    text-xl
    pointer-events-none "
            />

            <input

                type="text"

                placeholder="Search certificates..."

                value={search}

                onChange={(e) =>
                    setSearch(e.target.value)
                }

 className="
    w-full
    pl-14
    pr-6
    py-4
    mt-4

    rounded-2xl

    bg-white/5
    backdrop-blur-xl

    border
    border-white/10

    text-white
    placeholder:text-gray-400

    shadow-[0_10px_40px_rgba(0,0,0,.25)]

    focus:outline-none
    focus:border-blue-500
    focus:ring-4
    focus:ring-blue-500/20

    transition-all
    duration-300
  "
            />

        </div>

    );
}

export default SearchBar;