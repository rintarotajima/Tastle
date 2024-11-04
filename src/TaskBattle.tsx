const Title = () => {
  return (
    <>
      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Task Battle
        </h1>
      </section>
    </>
  );
};

const InputTask = () => {
  return (
    <>
      <section className="text-center mb-10 space-x-4 max-w-xl w-full mx-auto">
        <input className="border-2 border-gray-300 rounded-md focus:border-orange-200 outline-none p-3 w-2/3 lg:w-4/5" type="text" placeholder="タスクを追加" />
        <button className="text-lg text-white bg-orange-300 hover:bg-orange-500 rounded-md p-2.5">追加</button>
      </section>
    </>
  );
};

const TaskList = () => {
  return (
    <>
      <section className="mb-8 max-w-2xl">
        <h2 className="text-xl md:text-2xl text-center font-semibold text-gray-700 mb-4">
          ・完了したらチェックしよう!
        </h2>
        <div className="bg-gray-100 p-6 rouded-md">
          <ul className="space-y-4">
            <li className="flex items-center justify-between p-4 rounded-md">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <p>タスク1</p>
              </div>
              <button className="text-red-400 bg-red-100 p-2 rounded-sm">
                消す
              </button>
            </li>
            <li className="flex items-center justify-between p-4 rounded-md">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <p>タスク2</p>
              </div>
              <button className="text-red-400 bg-red-100 p-2 rounded-sm">
                消す
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

const ScoreBoard = () => {
  return (
    <>
      <section className="mb-8">
        <h2 className="text-xl md:text-2xl text-center font-semibold text-gray-700 mb-4">
          ・現在のスコア
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="bg-blue-100 p-4 rounded-md text-center w-full md:w-1/2 mb-2 md:mb-0">
            <span className="text-5xl md:text-6xl font-bold">1</span>
            <p className="text-gray-600">タスク進捗スコア</p>
          </div>
          <div className="bg-red-200 p-4 rounded-md text-center w-full md:w-1/2">
            <span className="text-5xl md:text-6xl font-bold">2</span>
            <p className="text-gray-600">全タスク-1のスコア</p>
          </div>
        </div>
      </section>
    </>
  );
};

export const TaskBattle = () => {
  return (
    <>
      <main className="flex flex-col items-center p-8 bg-blue-50 min-h-screen ">
        <Title />
        <InputTask />
        <TaskList />
        <ScoreBoard />
      </main>
    </>
  );
};
