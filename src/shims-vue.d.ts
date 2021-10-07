/* eslint-disable */
import {Store} from "vuex";

declare module '*.vue' {
  import type {DefineComponent} from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

export interface ComponentCustomProperties {
  $store: Store
}

