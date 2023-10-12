const Today = () => {
  return (
    <div className="bg-night bg-cover bg-center bg-no-repeat w-full h-583 flex flex-col justify-between p-8 max-md:h-304 max-md:p-5">
      <div className="w-full flex flex-row justify-between max-sm:flex-col">
        <div className="flex flex-col text-gray-100">
          <h1 className="text-heading-lg max-md:text-heading-md">
            Santa Cruz De La Sierra, Santa Cruz
          </h1>
          <p className="text-t-sm max-md:text-t-xs">
            quinta-feira, 12 de out de 2023
          </p>
        </div>

        <p className="text-t-md max-md:text-t-sm max-sm:mt-1">13:06</p>
      </div>

      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col">
          <p className="text-heading-hg max-md:text-heading-xl">29ºc</p>

          <div className="flex flex-row items-center max-md:flex-col max-md:items-start">
            <p className="text-heading-md max-md:text-heading-sm">
              33.6ºc / 22.7ºc
            </p>
            <hr className="w-2 h-2 rounded-full bg-white opacity-40 mx-2 max-md:hidden" />
            <p className="text-heading-md max-md:text-heading-sm">
              Parcialmente nublado
            </p>
          </div>
        </div>

        <img />
      </div>
    </div>
  );
};

export default Today;
