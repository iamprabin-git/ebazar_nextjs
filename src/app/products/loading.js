function Loader() {
  return (
    <div className="w-full h-max rounded-2xl dark:shadow dark:shadow-amber-50 px-5 py-4 border border-b-amber-950 animate-pulse ease-in-out duration-150">
      <div className="w-full h-36 bg-gray-200 dark:bg-gray-600"></div>

      <div className="py-3 ">
        
        <h2 className="h-6 w-2/3 bg-gray-300 my-2"></h2>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300"></span>
        <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300"></span>

        <p className="py-2 w-1/3 h-4 bg-gray-200"></p>
        <button className="px-4 py-4 h-6 w-1/3 pt-3 bg-amber-400 rounded-3xl"></button>
      </div>
    </div>
  );
}
export { Loader };
function ProductsLoader() {
     return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-8'>
 
  <Loader />
  <Loader />
  <Loader />
  <Loader />
  <Loader />
  <Loader />
  <Loader />
  <Loader />
  </div>);
  
}

export default ProductsLoader;
