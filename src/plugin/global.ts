import { ComponentInternalInstance, getCurrentInstance } from 'vue'
export default function useCurrentInstance() {
    const { appContext } = getCurrentInstance() as ComponentInternalInstance
    const Global = appContext.config.globalProperties
    return {
        Global
    }
}
