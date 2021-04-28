import Toast from './Toast'

const obj = {}

obj.install = function (Vue,options) {
    console.log("install ----")
    //1 创建组件构造器
    const toactConstructor = Vue.extend(Toast);
    //2 new的方式，根据组件构造器，可以创建出来一个组件对象
    const toast = new toactConstructor();
    //3 将组件对象，手动挂载到一个对象上
    toast.$mount(document.createElement('div'));//$mount方法把组件扩展到dom上
    //4 toast.$el对应的就是div
    document.body.appendChild(toast.$el);//通过$el获取组件中的dom元素
    Vue.prototype.$toast = toast;
}

export default obj