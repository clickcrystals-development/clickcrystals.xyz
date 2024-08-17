'use client'

import { Compressor } from "@/lib/compressor";
import Editor from "react-monaco-editor";
import { languageDef, configuration, theme } from '@/lib/editor-config';
import { useEffect, useState, useRef } from "react";

export default function CCSEditor() {
  const defaultCode = `def module custom-module
def desc "Custom Scripted Module"

on module_enable {

}

on module_disable {

}`
  
  const compressor = new Compressor();
  const [result, setResult] = useState("");
  const [editor, setEditor] = useState<any>();

  const deCompressCode = () => {
    setResult(compressor.decompress(editor.getValue()));
  };

  const compressCode = () => {
    setResult(compressor.compress(editor.getValue()));
  };

  const [dark, setDark] = useState(false);
  useEffect(() => {
    const darkThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeQuery.matches) {
      setDark(true);
    }
    darkThemeQuery.addEventListener("change", (e) => {
      if (e.matches) {
        setDark(true);
      } else {
        setDark(false);
      }
    });
  }, []);

  const editorWillMount = (monaco: any) => {
    if (!monaco.languages.getLanguages().some(({ id }: any) => id === 'ccs')) {
      monaco.languages.register({ id: 'ccs' });
      monaco.languages.setMonarchTokensProvider('ccs', languageDef);
      monaco.languages.setLanguageConfiguration('ccs', configuration);
      monaco.editor.defineTheme('ccs', theme);
    }
  };

  const editorDidMount = (editor: any) => {
    editor.focus();
    setEditor(editor);
  };

  return (
    <div className={`flex flex-col lg:flex-row h-screen bg-[${dark ? "#1e1e1e] text-white" : "#ffffff] text-black"}`}>
      <div className="flex-1 h-full">
        <Editor
          language="ccs"
          editorWillMount={editorWillMount}
          editorDidMount={editorDidMount}
          className="h-full"
          value={defaultCode}
          theme={dark ? "ccs" : "light"}
          options={{
            'wordWrap': 'on',
          }}
        />
      </div>

      <div className={`flex flex-col justify-center items-center p-4 lg:w-1/12 lg:px-2 lg:py-8 ${dark && "bg-[#1e1e1e]"}`}>
        <button onClick={deCompressCode} className="btn border-[#7289da] bg-[#7289da] hover:bg-[#546abb] active:bg-[#2e3d75] font-semibold px-6 py-2.5 shadow-none text-white text-sm w-full mb-4 lg:w-auto">Format</button>
        <button onClick={compressCode} className="btn border-[#7289da] bg-[#7289da] hover:bg-[#546abb] active:bg-[#2e3d75] font-semibold px-6 py-2.5 shadow-none text-white text-sm w-full lg:w-auto">Minify</button>
      </div>

      <div className="flex-1 h-full">
        <Editor
          language="ccs"
          className="h-full"
          theme={dark ? "ccs" : "light"}
          value={result}
          options={{
            'readOnly': true,
            'wordWrap': "on",
          }}
        />
      </div>
    </div>
  )
}