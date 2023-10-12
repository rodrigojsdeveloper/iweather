"use client";
import { useState } from "react";
import Link from "next/link";
import Input from "./Input";
import Today from "./Today";

const Search = () => {
  const [cities, setCities] = useState<Array<any>>([]);

  const [search, setSearch] = useState<string>("");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="w-full max-w-716 bg-gray-800 p-4 rounded-def max-md:max-w-none max-md:p-3">
      <div className="w-full flex flex-row justify-between items-center mb-3 max-md:mb-2">
        <Link
          href="/"
          className="w-full max-w-50 h-56 flex justify-center items-center bg-gray-600 p-2 mr-3 rounded-def max-md:mr-2"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <path
                d="M22.132 23.8243C21.2752 23.8243 20.7473 23.4286 19.8847 22.9627C19.0221 22.4968 16.5275 20.6209 16.5275 18.2858C16.5275 16.7017 16.1191 15.4204 15.4237 14.3994C14.7335 13.3862 13.7984 12.6842 12.8256 12.1886C12.3568 11.9499 11.869 11.7546 11.3833 11.5933C11.1001 11.4993 10.9358 11.1952 11.0586 10.9234C11.8374 9.19945 13.5716 8 15.5862 8C18.3285 8 20.5518 10.2231 20.5518 12.9655C20.5518 13.5523 20.45 14.1153 20.2632 14.6377C21.0547 14.1043 22.0083 13.7931 23.0345 13.7931C25.7769 13.7931 27.9999 16.0162 27.9999 18.7586C27.9999 22.0601 25.0988 23.8243 22.132 23.8243Z"
                fill="#8FB2F5"
              />
              <path
                d="M4 18.3449C4 20.9623 5.72564 23.1432 8.01169 23.6251C8.36454 23.754 8.74548 23.8243 9.14288 23.8243H16.8578C17.1166 23.8243 17.2292 23.4783 17.0317 23.3111C15.6834 22.1703 14.6814 20.5625 14.6814 18.2858C14.6814 17.0348 14.3646 16.1237 13.8979 15.4388C13.4259 14.7459 12.7621 14.2281 11.9877 13.8336C11.2062 13.4355 10.3577 13.1819 9.54738 13.0022C9.35654 12.9781 9.16232 12.9656 8.96555 12.9656C6.2231 12.9656 4 15.374 4 18.3449Z"
                fill="#8FB2F5"
              />
            </g>
          </svg>
        </Link>

        <Input
          isLoading={isLoading}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Today />
    </div>
  );
};

export default Search;