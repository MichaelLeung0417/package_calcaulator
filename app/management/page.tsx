import { getYear } from "../api/date";
import { getMonth } from "../api/date";

export default function ManagementPage() {
  const years = getYear();
  const months = getMonth(years);

  return (
    <>
      <h1 className="text-center font-bold">管理頁面</h1>
      <div className="flex flex-col gap-4">
        {months.map(({ year, month }) => (
          <div key={year}>
            <p>{year}年</p>
            <div className="flex justify-start gap-4">
              {month.map((m) => (
                <a
                  key={m}
                  href={`/management?year=${year}&month=${m}`}
                  className="rounded-lg p-4 border"
                >
                  {m}月
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
