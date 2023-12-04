import TextAlign from "@tiptap/extension-text-align";
import customMessages from "../i18n/custom-messages";
import type { Editor } from "@tiptap/core";
import type { Tool } from "../types";

const rightAlign: Tool = {
  key: "rightAlign",
  name: customMessages.tools.textAlignRight,
  icon: "format_align_right",
  extension: [linkExtenstionConfig],
  action: (editor: Editor) =>
    editor.chain().focus().setTextAlign("right").run(),
  disabled: (editor: Editor) =>
    !editor.can().chain().focus().setTextAlign("right").run(),
  active: (editor: Editor) => editor.isActive({ textAlign: "right" }),
};

const leftAlign: Tool = {
  key: "leftAlign",
  name: customMessages.tools.textAlignLeft,
  icon: "format_align_left",
  extension: [linkExtenstionConfig],
  action: (editor: Editor) => editor.chain().focus().setTextAlign("left").run(),
  disabled: (editor: Editor) =>
    !editor.can().chain().focus().setTextAlign("left").run(),
  active: (editor: Editor) => editor.isActive({ textAlign: "left" }),
};

const centerAlign: Tool = {
  key: "centerAlign",
  name: customMessages.tools.textAlignCenter,
  icon: "format_align_center",
  extension: [linkExtenstionConfig],
  action: (editor: Editor) =>
    editor.chain().focus().setTextAlign("center").run(),
  disabled: (editor: Editor) =>
    !editor.can().chain().focus().setTextAlign("center").run(),
  active: (editor: Editor) => editor.isActive({ textAlign: "center" }),
};

function linkExtenstionConfig() {
  return TextAlign.configure({
    types: ["heading", "paragraph"],
    defaultAlignment: undefined,
  });
}

export default { rightAlign, leftAlign, centerAlign };
