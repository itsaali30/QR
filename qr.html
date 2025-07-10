
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Vue SPA - QR & Barcode</title>
  <script src="https://unpkg.com/vue@3"></script>
  <script src="https://unpkg.com/vuex@4"></script>
  <script src="https://unpkg.com/vue-router@4"></script>
  <script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
  <style>
    body { font-family: sans-serif; text-align: center; padding: 30px; }
    input, select { margin: 10px; padding: 10px; font-size: 1em; }
    svg, #qrcode { margin-top: 20px; }
    nav a { margin: 0 10px; text-decoration: none; color: blue; }
    nav a.router-link-exact-active { font-weight: bold; color: black; }
  </style>
</head>
<body>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>

  <script>
    const { createApp, ref, computed, watch, onMounted } = Vue;
    const { createStore } = Vuex;
    const { createRouter, createWebHashHistory } = VueRouter;

    // Vuex Store
    const store = createStore({
      state() {
        return {
          inputText: '',
          selectedOption: 'HYD_SRB'
        };
      },
      mutations: {
        setInputText(state, val) { state.inputText = val; },
        setSelectedOption(state, val) { state.selectedOption = val; }
      }
    });

    // Home Page
    const Home = {
      template: `
        <div>
          <h2>QR & Barcode Generator</h2>
          <input v-model="inputText" placeholder="Enter text" />
          <select v-model="selectedOption">
            <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
          </select>

          <div v-if="finalText">
            <h3>QR Code</h3>
            <div id="qrcode"></div>

            <h3>Barcode</h3>
            <svg ref="barcode"></svg>

            <p><strong>Text:</strong> {{ finalText }}</p>
          </div>
        </div>
      `,
      setup() {
        const barcode = ref(null);
        const inputText = computed({
          get: () => store.state.inputText,
          set: val => store.commit('setInputText', val)
        });
        const selectedOption = computed({
          get: () => store.state.selectedOption,
          set: val => store.commit('setSelectedOption', val)
        });
        const finalText = computed(() => selectedOption.value + inputText.value);

        const options = [
          'HYD_SRB', 'ZEP_SRB_', 'HYD_RB', 'HYD_IB',
          'ZEP_RB_', 'ZEP_MIB_', 'ZEP_IB', 'ZEP_IB_'
        ];

        const generateQRCode = (text) => {
          const qrEl = document.getElementById("qrcode");
          qrEl.innerHTML = ""; // clear old QR
          new QRCode(qrEl, {
            text: text,
            width: 150,
            height: 150,
            correctLevel: QRCode.CorrectLevel.H
          });
        };

        watch(finalText, (newVal) => {
          if (newVal) {
            generateQRCode(newVal);
            if (barcode.value) {
              JsBarcode(barcode.value, newVal, {
                format: 'CODE128',
                displayValue: true,
                lineColor: '#000',
                width: 2,
                height: 80
              });
            }
          }
        });

        onMounted(() => {
          if (finalText.value) {
            generateQRCode(finalText.value);
            JsBarcode(barcode.value, finalText.value, {
              format: 'CODE128',
              displayValue: true,
              lineColor: '#000',
              width: 2,
              height: 80
            });
          }
        });

        return { inputText, selectedOption, options, barcode, finalText };
      }
    };

    // About Page
    const About = {
      template: `
        <div>
          <h2>About This App</h2>
          <p>This Vue 3 SPA uses qrcode.js and JsBarcode to generate QR and Barcode dynamically.</p>
        </div>
      `
    };

    // Router
    const routes = [
      { path: '/', component: Home },
      { path: '/about', component: About }
    ];

    const router = createRouter({
      history: createWebHashHistory(),
      routes
    });

    // App
    const app = createApp({});
    app.use(store);
    app.use(router);
    app.mount('#app');
  </script>
  <style>
  body { font-family: sans-serif; text-align: center; padding: 30px; }
  input, select { margin: 10px; padding: 10px; font-size: 1em; }
  svg, #qrcode { margin-top: 20px; }
  #qrcode {
    margin: 20px auto;
    width: fit-content;
  }
  nav a { margin: 0 10px; text-decoration: none; color: blue; }
  nav a.router-link-exact-active { font-weight: bold; color: black; }
</style>

</body>
</html>

