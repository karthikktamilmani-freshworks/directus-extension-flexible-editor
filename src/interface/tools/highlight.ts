// https://tiptap.dev/api/marks/bold

import Highlight from "@tiptap/extension-highlight";
import customMessages from "../i18n/custom-messages";
import { extendMarkRangeIfUnselected } from "./utils";
import type { Editor } from "@tiptap/core";
import type { Tool } from "../types";

export default {
  key: "highlight",
  name: customMessages.tools.highlight,
  icon: "format_ink_highlighter",
  extension: [Highlight],
  shortcut: ["meta", "H"],
  action: (editor: Editor) =>
    extendMarkRangeIfUnselected(editor, "highlight").toggleHighlight().run(),
  disabled: (editor: Editor) =>
    !editor.can().chain().focus().toggleHighlight().run(),
  active: (editor: Editor) => editor.isActive("highlight"),
} as Tool;
