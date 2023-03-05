let datas = [];
function getData(event) {
  event.preventDefault();

  let proname = document.getElementById("input-project").value;
  let prostdate = document.getElementById("input-stdate").value;
  let proendate = document.getElementById("input-endate").value;
  let prodesc = document.getElementById("input-description").value;

  let pronodejs = document.querySelector("#node-js").checked;
  let proreactjs = document.querySelector("#react-js").checked;
  let pronextjs = document.querySelector("#next-js").checked;
  let protypescript = document.querySelector("#type-script").checked;

  let rawimage = document.getElementById("input-upload").files;

  proimage = URL.createObjectURL(rawimage[0]);

  let data = {
    proname,
    prostdate,
    proendate,
    prodesc,
    pronodejs: pronodejs == true ? true : false,
    proreactjs: proreactjs == true ? true : false,
    pronextjs: pronextjs == true ? true : false,
    protypescript: protypescript == true ? true : false,
    proimage,
  };

  datas.push(data);
  showData();
}

function showData() {
  document.querySelector(".container-project").innerHTML = "";

  // Looping use (for Loop) for show Card Project
  for (let i = 0; i < datas.length; i++) {
    document.querySelector(".container-project").innerHTML += `
  <div class="list-project" >
    <img src="${datas[i].proimage}" />
    <a href="projectDetail.html" class="title-content">
      <h3>${datas[i].proname}</h3>
    </a>

    <div class="title-durasi">
      <p>${getDuration(datas[i].prostdate, datas[i].proendate)}</p>
    </div>

    <div class="desc-content">
      <p>
      ${datas[i].prodesc}
      </p>
    </div>

    <div class="cont-icons">
    ${
      datas[i].pronodejs
        ? `<div class="icon">
    <i class="fa-brands fa-node-js fa-2x"></i>
  </div>`
        : ""
    }
  ${
    datas[i].proreactjs
      ? `<div class="icon">
    <i class="fa-brands fa-react fa-2x"></i>
  </div>`
      : ""
  }
  ${
    datas[i].pronextjs
      ? `<div class="icon">
    <i class="fa-brands fa-golang fa-2x"></i>
  </div>`
      : ""
  }
  ${
    datas[i].protypescript
      ? `<div class="icon">
    <i class="fa-brands fa-square-js fa-2x"></i>
  </div>`
      : ""
  }
    </div>

    <div class="cont-btn">
      <div class="btn-edit">
        <button type="button">Edit</button>
      </div>

      <div class="btn-delete">
        <button type="button">Delete</button>
      </div>
    </div>
  </div>
      `;
  }
}

function createTime(time) {
  // declaration variable time
  let years = time.getFullYear();
  let monthIndex = time.getMonth();
  let date = time.getDate();
  let hour = time.getHours();
  let minute = time.getMinutes();

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${date} ${month[monthIndex]} ${years} ${hour}:${minute} WITA`;
}

const getDuration = (mulai, akhir) => {
  const miliSecond = 1000;
  const distance = new Date(akhir) - new Date(mulai);

  const tahunDistance = Math.floor(
    distance / (12 * 30 * 24 * 60 * 60 * miliSecond)
  );
  if (tahunDistance > 0) {
    return tahunDistance + "Year";
  } else {
    const bulanDistance = Math.floor(
      distance / (30 * 24 * 60 * 60 * miliSecond)
    );
    if (bulanDistance != 0) {
      return bulanDistance + "Month";
    } else {
      const mingguDistance = Math.floor(
        distance / (7 * 24 * 60 * 60 * miliSecond)
      );
      if (mingguDistance >= 1) {
        return mingguDistance + "Week";
      } else {
        const hariDistance = Math.floor(distance / (24 * 60 * 60 * miliSecond));
        if (hariDistance != 0) {
          return hariDistance + "Day";
        }
      }
    }
  }
};
