const plug = {
  install(Vue, options) {
    console.log(Vue, options)
    Vue.prototype.a = () => {
      alert(11111)
    }
  }
}
export default plug
