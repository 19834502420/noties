import classNames from "classnames";
export default {
  name: "IconDanSql",
  functional: true,
  render(createElement, context) {
    let { data, listeners } = context;
    const classString = classNames(["anticon", data.staticClass, data.class]);
    const style = { ...(data.staticStyle || {}), ...(data.style || {}) };
    const iProps = {
      class: classString,
      style,
      on: listeners
    };
    return (
      <i {...iProps}>
        <svg class="icon svg-icon" id="icondanSQL" viewBox="0 0 1024 1024">
          <path d="M803.513726 0a146.176708 146.176708 0 0 1 145.665089 135.213455l0.365442 10.963253v401.985948a36.544177 36.544177 0 1 1-73.088354 0V146.176708a73.088354 73.088354 0 0 0-64.39084-72.576735L803.513726 73.088354H146.157069a73.088354 73.088354 0 0 0-72.503648 64.537017L73.214891 146.176708v730.883541a73.088354 73.088354 0 0 0 64.537017 72.576736l8.478249 0.511618h328.678328a36.544177 36.544177 0 0 1 6.577952 72.503648l-6.577952 0.584707H146.157069a146.176708 146.176708 0 0 1-145.66509-135.213456L0.126537 877.060249V146.176708A146.176708 146.176708 0 0 1 135.266904 0.365442L146.230157 0h657.283569zM688.984275 668.75844h-0.073089a34.497703 34.497703 0 0 1 0 48.749932l-98.669278 98.888543a34.790057 34.790057 0 0 0-4.239124 44.218455l4.019859 4.823831 97.499865 97.572953a34.790057 34.790057 0 0 1-44.730073 53.062145l-4.604566-3.800595-97.499865-97.572952a104.004728 104.004728 0 0 1-5.993245-139.671845l6.724129-7.455012L640.234342 668.75844a34.424615 34.424615 0 0 1 48.749933 0z m199.38503-4.458389v0.073088l5.408538 4.385301 98.815455 98.815455 6.724128 7.455012c31.647257 38.298298 32.158876 93.626182 1.096326 131.778302l-7.089571 7.893543-97.499864 97.572952-4.604567 3.800595a34.790057 34.790057 0 0 1-49.115373-47.726695l4.385301-5.33545 97.499864-97.572953 4.01986-4.823831a34.716968 34.716968 0 0 0-0.219265-39.467712l-4.01986-4.750743-98.669278-98.888543a34.497703 34.497703 0 0 1 43.268306-53.208321zM484.409971 138.867873c77.25439 0 126.662118 57.593623 126.662118 146.249796 0 41.879627-12.717374 78.935422-32.743582 102.835315l-1.900298 2.046474 21.268711 22.365036c0.730884 0.950149 1.31559 1.900297 1.827209 2.923534l1.242502 3.069711 0.657795 5.262361a20.464739 20.464739 0 0 1-7.308835 15.275466 24.338422 24.338422 0 0 1-15.860173 6.943394 18.272089 18.272089 0 0 1-9.282221-2.631181l-3.800594-2.996622-22.145772-22.876655-4.531477 2.485004a111.679005 111.679005 0 0 1-30.697109 9.793839l-11.328695 1.388679-12.059579 0.43853c-76.962037 0-127.319913-58.470683-127.319912-146.615238 0-87.998378 49.626992-145.957443 127.319912-145.957443z m-254.712914 0c55.327884 0 85.805728 24.703864 97.353688 62.344366 0.950149 2.485004 1.461767 5.116185 1.461767 7.747365 0 10.597811-8.039719 18.856795-18.345177 20.90327a37.786679 37.786679 0 0 1-7.455012 0.87706 22.584301 22.584301 0 0 1-22.145771-15.348554c-5.993245-21.414888-20.976358-33.401378-50.869495-33.401378-33.035936 0-50.723318 14.471494-50.723317 35.228586 0 19.587679 8.551337 29.235342 35.813293 35.813294l8.770603 1.973386 25.434747 5.116184c61.978924 13.155904 88.436908 36.251824 88.436908 86.463523 0 50.650229-39.906241 84.782491-102.616049 84.782491-63.221426 0-91.287354-21.853418-106.708997-64.756282l-3.069711-9.501486-0.584707-3.362064-0.146176-2.338827c0-8.989868 5.408538-16.152526 13.886787-19.880033l5.408538-1.827209 6.797217-0.803971c10.378546 0 19.295325 5.627803 22.21886 15.787084 8.039719 29.966225 22.072683 43.268306 60.517157 43.268306 35.228587 0 56.058768-15.933261 56.058768-41.075655 0-21.414888-9.940016-31.866522-40.344772-39.321535l-9.720751-2.192651-38.298297-8.332072c-48.749932-12.42502-69.653201-35.594028-69.653202-79.812483 0-45.75331 36.251824-78.350716 98.523101-78.350715z m439.18792 3.069711c11.98649 0 20.903269 5.847068 23.169009 16.152526l0.584706 5.554715v212.102403c0 2.777357 0.584707 4.019859 2.558093 4.45839l2.558092 0.219265h121.326668c12.790462 0 21.341799 9.647663 21.341799 22.438125 0 10.817076-6.285598 20.026209-16.152526 22.511213l-5.262361 0.584707H687.376331c-25.800189 0-39.467711-11.474872-41.879627-35.594029l-0.43853-8.478249v-217.803295c0-14.106052 9.940016-22.145771 23.826803-22.145771z m-184.475006 33.766819c-53.427587 0-86.024993 43.560659-86.024992 109.413266 0 66.291137 33.839908 109.120913 86.024992 109.120913 15.129289 0 27.042691-3.069711 37.421238-8.916779l-22.65739-22.949743a10.23237 10.23237 0 0 1-3.800594-7.893543c0-3.800594 2.046474-7.601189 5.481626-10.670899a13.886787 13.886787 0 0 1 10.23237-4.823832 10.963253 10.963253 0 0 1 8.332072 3.800595l23.899892 24.703863c17.175763-18.491354 26.457984-46.63037 26.457984-84.051607 0-64.537017-32.597406-107.732234-85.367198-107.732234z"></path>
        </svg>
      </i>
    );
  }
};