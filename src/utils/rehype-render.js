import { Fragment } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { toJsxRuntime } from "hast-util-to-jsx-runtime"
import Message from "../components/elements/Message"
import Youtube from "../components/elements/Youtube"
import Icon from "../components/elements/Icon"
import Table from "../components/elements/Table"

const components = {
  message: Message,
  youtube: Youtube,
  icon: Icon,
  table: Table,
}

export const recognizedComponents = components
export const render = (ast) =>
  toJsxRuntime(ast, {
    Fragment,
    jsx,
    jsxs,
    components,
  })
