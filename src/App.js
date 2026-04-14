import './App.css';


function App() {
  return (
    < div className="App">
      <div className="top-section">
        <div className="display">
          <div className="myPhoto"></div>
          <div>
            <div className="name"></div>     {/* ここに名前を書いてください*/}
            <div className="oneWord"></div>  {/* なにか一言あれば書いてください*/}
          </div>
        </div>
      </div>

      <div className="myself">
        <div className="profile-row">
          <div className="label">学科</div>
          <div className="myDepartment"></div>   {/* あなたの所属している学科を書いてください*/}
        </div>

        <div className="profile-row">
          <div className="label">誕生日 </div>
          <div className="myBirthday"></div>     {/* あなたの誕生日を書いてください*/}
        </div>

        <div className="profile-row">
          <div className="label">在住</div>
          <div className="myFrom"></div>         {/* あなたの住んでいるところを書いてください（あまり言いたくなかったら都道府県とか、なんなら日本語でもいいです）*/}
        </div>

        <div className="profile-row">
          <div className="label"></div>
          <div className=""></div>       
        </div>

        <div className="profile-row">
          <div className="label"></div>
          <div className=""></div>
        </div>

        <div className="profile-row">
          <div className="label"></div>
          <div className=""></div>
        </div>

        <div className="profile-row">  
          <div className="label"></div>
          <div className=""></div>
        </div>

      </div>
    </div>
  );
}

export default App;
