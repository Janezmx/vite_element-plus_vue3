import { InjectionKey, Ref } from 'vue'



export interface User {
    name: string
    age: number
}
export const userKey: InjectionKey<Ref<User[]>> = Symbol('')
