export interface TreeState {
    expanded: boolean
    selected: boolean
  }

export interface CuriTree {
    id: number
    text: string
    state: TreeState
    depth: number
    children?: CuriTree[]
}
