function page() {
  return (
    <>
      <div className="flex flex-grow items-center justify-center">
        <div className="">
          <h1
            className="font-typewrite 
          relative 
          w-max 
          before:absolute 
          before:inset-0 
          before:animate-typing
            before:bg-neutral-800 
            after:absolute

            after:inset-0 
            after:w-1
            after:animate-blink
          after:bg-white"
          >
            Hello, my name is Thomas
          </h1>
        </div>
      </div>
    </>
  );
}
export default page;
