export const ProductLoader = ({ numberOfLoaders }: { numberOfLoaders: number }) => {
  const loaders = Array.from({ length: numberOfLoaders }); // Create an array of a specified length
  return (
    <>
      <div className="grid lg:grid-cols-4 2xl:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 place-items-center md:place-items-stretch">
        {loaders.map((_, index) => (
          <div
            key={index}
            className="h-auto overflow-hidden animate-pulse w-full loader rounded-[8px]"
          >
            <div className="bg-gray-100 h-[200px] overflow-hidden w-full"></div>
            <div className="bg-gray-300 h-[160px] overflow-hidden w-full"></div>
          </div>
        ))}
      </div>
    </>
  );
}