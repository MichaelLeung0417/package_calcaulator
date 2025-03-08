export default async function LoginPage() {
  return (
    <>
      <h1 className="text-center font-bold">登入頁面</h1>
      <form className="flex flex-col items-center [&_input]:border-2 [&_input]:border-gray-200 [&_input]:rounded-lg [&_input]:p-4 gap-2">
        <input type="text" placeholder="帳號" />
        <input type="password" placeholder="密碼" />
        <button type="submit" className="rounded-lg p-4 bg-blue-500 text-white">
          登入
        </button>
      </form>
    </>
  );
}
