export default function LogIn() {
  return (
    <div>
      <div
        className="h-[80px] w-screen
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        flex justify-center items-center
        md:h-[400px]"
      >
        <button
          className="flex flex-col justify-center items-center gap-3
            md:mt-[-125px]"
          type="button"
        >
          <img
            className="h-[50px] w-auto
                rounded-lg
                md:h-[75px]"
            src={
              "https://appadvice.com/cdn-cgi/mirage/515c3b625b3744c20fadd87a6030cef13258ceb8e82375aec952d9a51cc51390/1280/https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/c0/5c/ed/c05ced05-4fa2-a20f-2bab-98b19ecab04f/source/256x256bb.jpg"
            }
            alt="Money Plus App"
          />

          <h1 className="hidden md:block font-medium text-[2.25rem] text-white">
            Money Plus
          </h1>
        </button>
      </div>

      <div
        className="h-[750px] w-screen bg-white
      flex flex-col justify-start items-center
      md:h-[500px] md:w-[500px] md:rounded-3xl md:absolute md:top-0 md:right-0 md:bottom-0 md:left-0 md:m-auto"
      >
        <h2 className="my-[50px] font-semibold text-[2rem]">Log In</h2>

        <form className="flex flex-col justify-center items-center gap-5">
          <input className="login-input" type="text" placeholder="Username" />

          <input
            className="login-input"
            type="password"
            placeholder="Password"
          />

          <button
            className="self-end mt-[-10px] text-purple-500 hover:text-purple-900"
            type="button"
          >
            Forgot Password
          </button>

          <button
            className="h-[50px] w-[350px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg font-semibold text-lg text-white
            hover:bg-gradient-to-r hover:from-indigo-900 hover:via-purple-900 hover:to-pink-900"
            type="button"
          >
            LOGIN
          </button>

          <p>
            Don't have an account?{" "}
            <span>
              <button
                className="text-purple-500 underline hover:text-purple-900"
                type="button"
              >
                Register
              </button>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
