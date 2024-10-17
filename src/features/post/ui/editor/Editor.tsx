import { useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { EditorWrapper } from '@/features/post/ui/editor/Editor.style';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

const bold: any = Quill.import('formats/bold');
bold.tagName = 'b';
Quill.register(bold, true);

const italic: any = Quill.import('formats/italic');
italic.tagName = 'i';
Quill.register(italic, true);

const toolbarOptions = [
  [
    { header: [1, 2, 3, 4, 5, 6, false] },
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    { list: 'ordered' },
    { list: 'bullet' },
    { color: [] },
    { align: [] },
  ],
];

const modules = {
  toolbar: {
    container: toolbarOptions,
  },
};

const Editor = ({ value, onChange }: EditorProps) => {
  const quillRef = useRef<ReactQuill>(null);

  return (
    <EditorWrapper>
      <ReactQuill theme="snow" ref={quillRef} value={value} onChange={onChange} modules={modules} />
    </EditorWrapper>
  );
};

export default Editor;
