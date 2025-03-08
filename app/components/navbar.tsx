export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <a href="/" className="text-xl font-bold">
              結算表
            </a>
          </div>
          <div>
            <a href="/login" className="text-sm">
              登入
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
