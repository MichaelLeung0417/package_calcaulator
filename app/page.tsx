export default function HomePage() {
  return (
    <>
      <h1 className="text-center font-bold">系統主頁</h1>
      <div className="flex justify-center gap-4">
        <a href="/management" className="rounded-lg p-4 border">
          進入管理頁面
        </a>
      </div>
    </>
  );
}
